import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { execa } from 'execa';
import fse from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliPath = path.join(__dirname, '../dist/cli.js');
const tempDir = path.join(__dirname, 'temp-test-dir');

describe('sdd CLI', () => {
  beforeEach(async () => {
    await fse.ensureDir(tempDir);
  });

  afterEach(async () => {
    await fse.remove(tempDir);
  });

  it('should show version', async () => {
    const { stdout } = await execa('node', [cliPath, '--version']);
    expect(stdout).toMatch(/\d+\.\d+\.\d+/);
  });

  it('should show help', async () => {
    const { stdout } = await execa('node', [cliPath, '--help']);
    expect(stdout).toContain('sdd');
    expect(stdout).toContain('init');
    expect(stdout).toContain('list');
  });

  it('should init with defaults in -y mode', async () => {
    const projectDir = path.join(tempDir, 'test-project');
    await fse.ensureDir(projectDir);

    const { stdout } = await execa('node', [cliPath, 'init', '-y', '--stack', 'angular'], {
      cwd: projectDir,
    });

    expect(stdout).toContain('SDD');

    const settings = await fse.readJSON(path.join(projectDir, '.claude', 'settings.json'));
    expect(settings.statusLine.command).toContain('angular');

    const agents = await fse.readdir(path.join(projectDir, '.claude', 'agents'));
    expect(agents.length).toBe(7);

    const commands = await fse.readdir(path.join(projectDir, '.claude', 'commands'));
    expect(commands.length).toBe(10);

    const context = await fse.readdir(path.join(projectDir, '.claude', 'CONTEXT'));
    expect(context.length).toBe(4);
  });

  it('should create properly processed templates', async () => {
    const projectDir = path.join(tempDir, 'react-project');
    await fse.ensureDir(projectDir);

    await execa('node', [cliPath, 'init', '-y', '--stack', 'react'], {
      cwd: projectDir,
    });

    const archContent = await fse.readFile(
      path.join(projectDir, '.claude', 'CONTEXT', 'PADROES_ARQUITETURA.md'),
      'utf-8',
    );

    // React content should be present
    expect(archContent).toContain('React');
    // Angular-only conditional content should NOT be present
    expect(archContent).not.toContain('{{#if');
    expect(archContent).not.toContain('{{NOME_PROJETO}}');
  });

  it('should list commands with new standardized names', async () => {
    const { stdout } = await execa('node', [cliPath, 'list', 'commands']);

    // Novos nomes com prefixo criar-
    expect(stdout).toContain('/criar-card');
    expect(stdout).toContain('/criar-pr');
    expect(stdout).toContain('/criar-doc');

    // Novos nomes renomeados
    expect(stdout).toContain('/diretrizes');
    expect(stdout).toContain('/apartir');
    expect(stdout).toContain('/investigar');

    // Mantidos iguais
    expect(stdout).toContain('/revisar');
    expect(stdout).toContain('/debuggar');
    expect(stdout).toContain('/ueek-laravel');
  });
});
