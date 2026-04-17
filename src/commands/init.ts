import type { Command } from 'commander';
import type { ProjectInfo } from '../core/detector.js';
import { detectProject } from '../core/detector.js';
import { scaffold } from '../core/scaffolder.js';
import { printReport } from '../core/reporter.js';
import { runSetupPrompts, confirmInstall } from '../prompts/setup.js';
import { logger, printWelcomeBanner } from '../utils/logger.js';
import chalk from 'chalk';
import ora from 'ora';

export interface InitOptions {
  yes?: boolean;
  stack?: string;
  output?: string;
  agents?: boolean;
  commands?: boolean;
  templates?: boolean;
}

export async function runInit(projectDir: string, opts: InitOptions): Promise<void> {
  try {
    printWelcomeBanner();

    // Step 1: Detect project
    const spinner1 = ora('Detectando stack do projeto...').start();
    const detected = await detectProject(projectDir);

    // Override stack if specified via flag
    if (opts.stack) {
      detected.stack = opts.stack;
      detected.language = inferLanguage(opts.stack);
    }

    if (detected.stack) {
      spinner1.succeed(`Stack detectada: ${chalk.bold(detected.stack)} (${detected.framework} ${detected.frameworkVersion})`);
    } else {
      spinner1.warn('Stack não detectada automaticamente');
    }

    // Step 2: Get user input
    let info: ProjectInfo = { ...detected };
    let features: ('agents' | 'commands' | 'templates')[] = ['agents', 'commands', 'templates'];
    let outputDir = opts.output || '.claude';

    if (!opts.yes) {
      const answers = await runSetupPrompts(projectDir, detected);

      // Merge answers back into project info
      info = {
        ...info,
        name: answers.projectName,
        stack: answers.stack,
        language: answers.language,
      };
      features = answers.features;
      outputDir = answers.outputDir;

      const ok = await confirmInstall(answers);
      if (!ok) {
        logger.warn('Instalação cancelada.');
        return;
      }
    } else {
      // Apply flags for non-interactive mode
      if (opts.agents === false) features = features.filter(f => f !== 'agents');
      if (opts.commands === false) features = features.filter(f => f !== 'commands');
      if (opts.templates === false) features = features.filter(f => f !== 'templates');
    }

    // Step 3: Scaffold
    const spinner2 = ora('Criando estrutura .claude/...').start();

    const result = await scaffold({
      projectDir,
      outputDir,
      info,
      installAgents: features.includes('agents'),
      installCommands: features.includes('commands'),
      installTemplates: features.includes('templates'),
      overwriteAll: !!opts.yes,
    });

    spinner2.succeed('Estrutura criada com sucesso!');

    // Step 4: Report
    printReport(result, info, outputDir);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    logger.error(`Falha na instalação: ${msg}`);
    process.exit(1);
  }
}

export function registerInitCommand(program: Command): void {
  program
    .command('init')
    .description('Inicializa o SDD no projeto atual')
    .option('-y, --yes', 'Usar valores padrão (sem prompts)')
    .option('-s, --stack <stack>', 'Forçar stack específica')
    .option('-o, --output <dir>', 'Diretório de saída', '.claude')
    .option('--no-agents', 'Não instalar agentes')
    .option('--no-commands', 'Não instalar commands')
    .option('--no-templates', 'Não instalar templates')
    .action(async (opts: InitOptions) => {
      await runInit(process.cwd(), opts);
    });
}

function inferLanguage(stack: string): string {
  const map: Record<string, string> = {
    angular: 'TypeScript',
    react: 'TypeScript',
    nextjs: 'TypeScript',
    'next.js': 'TypeScript',
    vue: 'TypeScript',
    node: 'TypeScript',
    'node.js': 'TypeScript',
    nestjs: 'TypeScript',
    laravel: 'PHP',
    'laravel + inertia': 'PHP',
    'laravel + inertia + react': 'PHP',
    'laravel + inertia + vue': 'PHP',
    'laravel + inertia + svelte': 'PHP',
    python: 'Python',
    go: 'Go',
    rust: 'Rust',
    dotnet: 'C#',
    '.net': 'C#',
  };
  return map[stack.toLowerCase()] || '';
}
