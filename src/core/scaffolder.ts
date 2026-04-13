import path from 'node:path';
import fse from 'fs-extra';
import type { ProjectInfo } from './detector.js';
import { processTemplate, buildVariables, type TemplateVariables } from './template-engine.js';
import { AGENTS_DIR, COMMANDS_DIR, TEMPLATES_DIR, DOCS_DIR, listMdFiles, fileExists } from '../utils/file-utils.js';

export interface ScaffoldOptions {
  projectDir: string;
  outputDir: string;
  info: ProjectInfo;
  installAgents: boolean;
  installCommands: boolean;
  installTemplates: boolean;
  overwriteAll: boolean;
  onFileConflict?: (filePath: string) => Promise<'overwrite' | 'keep' | 'overwriteAll'>;
}

export interface ScaffoldResult {
  agents: string[];
  commands: string[];
  templates: string[];
  settings: boolean;
}

async function copyWithOverwriteCheck(
  src: string,
  dest: string,
  overwriteAll: boolean,
  onConflict?: (filePath: string) => Promise<'overwrite' | 'keep' | 'overwriteAll'>
): Promise<boolean> {
  if (await fileExists(dest)) {
    if (overwriteAll) {
      await fse.copy(src, dest, { overwrite: true });
      return true;
    }
    if (onConflict) {
      const action = await onConflict(dest);
      if (action === 'keep') return false;
      if (action === 'overwriteAll') {
        overwriteAll = true;
      }
    }
  }
  await fse.copy(src, dest, { overwrite: true });
  return true;
}

export async function scaffold(options: ScaffoldOptions): Promise<ScaffoldResult> {
  const { projectDir, outputDir, info } = options;
  const claudeDir = path.join(projectDir, outputDir);
  const variables = buildVariables(info);

  const result: ScaffoldResult = { agents: [], commands: [], templates: [], settings: false };

  // Ensure directories
  await fse.ensureDir(claudeDir);

  // Copy agents
  if (options.installAgents) {
    const agentsDestDir = path.join(claudeDir, 'agents');
    await fse.ensureDir(agentsDestDir);
    const agentFiles = await listMdFiles(AGENTS_DIR);
    for (const file of agentFiles) {
      const src = path.join(AGENTS_DIR, file);
      const dest = path.join(agentsDestDir, file);
      const copied = await copyWithOverwriteCheck(src, dest, options.overwriteAll, options.onFileConflict);
      if (copied) result.agents.push(file);
    }
  }

  // Copy commands
  if (options.installCommands) {
    const commandsDestDir = path.join(claudeDir, 'commands');
    await fse.ensureDir(commandsDestDir);
    const commandFiles = await listMdFiles(COMMANDS_DIR);
    for (const file of commandFiles) {
      const src = path.join(COMMANDS_DIR, file);
      const dest = path.join(commandsDestDir, file);
      const copied = await copyWithOverwriteCheck(src, dest, options.overwriteAll, options.onFileConflict);
      if (copied) result.commands.push(file);
    }
  }

  // Process and copy templates
  if (options.installTemplates) {
    const contextDestDir = path.join(claudeDir, 'CONTEXT');
    await fse.ensureDir(contextDestDir);
    const templateFiles = await listMdFiles(TEMPLATES_DIR);
    for (const file of templateFiles) {
      const src = path.join(TEMPLATES_DIR, file);
      const dest = path.join(contextDestDir, file);
      const destExists = await fileExists(dest);

      if (destExists && !options.overwriteAll && options.onFileConflict) {
        const action = await options.onFileConflict(dest);
        if (action === 'keep') continue;
        if (action === 'overwriteAll') options.overwriteAll = true;
      }

      const rawContent = await fse.readFile(src, 'utf-8');
      const processed = processTemplate(rawContent, variables);
      await fse.writeFile(dest, processed, 'utf-8');
      result.templates.push(file);
    }
  }

  // Create settings.json
  const settingsPath = path.join(claudeDir, 'settings.json');
  if (!await fileExists(settingsPath) || options.overwriteAll) {
    const settings = {
      statusLine: {
        type: 'command',
        command: `echo "SDD-Ueek v2.1 | ${info.stack}"`,
      },
    };
    await fse.writeJSON(settingsPath, settings, { spaces: 2 });
    result.settings = true;
  }

  // Copy docs (README.md, COMO_USAR.md) to .claude/
  const docsFiles = await listMdFiles(DOCS_DIR);
  for (const file of docsFiles) {
    const src = path.join(DOCS_DIR, file);
    const dest = path.join(claudeDir, file);
    const content = await fse.readFile(src, 'utf-8');
    await fse.writeFile(dest, content, 'utf-8');
  }

  return result;
}
