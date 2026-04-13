import { input, select, checkbox, confirm } from '@inquirer/prompts';
import type { ProjectInfo } from '../core/detector.js';
import { SUPPORTED_STACKS } from '../core/detector.js';
import { getDirName } from '../utils/file-utils.js';
import chalk from 'chalk';

export interface SetupAnswers {
  projectName: string;
  stack: string;
  language: string;
  features: ('agents' | 'commands' | 'templates')[];
  outputDir: string;
}

export async function runSetupPrompts(
  projectDir: string,
  detected: ProjectInfo
): Promise<SetupAnswers> {
  // 1. Project name
  const projectName = await input({
    message: 'Nome do projeto',
    default: detected.name || getDirName(projectDir),
  });

  // 2. Stack - confirm detected or ask
  let stack = detected.stack;
  let language = detected.language;

  if (stack) {
    console.log(chalk.green(`  Stack detectada: ${chalk.bold(stack)}`));

    const useDetected = await confirm({
      message: `Usar "${stack}" como stack principal?`,
      default: true,
    });

    if (!useDetected) {
      const chosen = await select({
        message: 'Selecione a stack do projeto',
        choices: SUPPORTED_STACKS.map(s => ({
          name: s,
          value: s,
        })),
      });
      stack = chosen;
      language = inferLanguage(chosen);
    }
  } else {
    const chosen = await select({
      message: 'Stack não detectada. Selecione a stack do projeto',
      choices: SUPPORTED_STACKS.map(s => ({
        name: s,
        value: s,
      })),
    });
    stack = chosen;
    language = inferLanguage(chosen);
  }

  // 3. Features
  const features = await checkbox<'agents' | 'commands' | 'templates'>({
    message: 'Quais recursos instalar?',
    choices: [
      { name: 'Agentes (6 agentes especializados)', value: 'agents', checked: true },
      { name: 'Commands (8 comandos /arquitetura, /revisar, etc.)', value: 'commands', checked: true },
      { name: 'Templates de contexto (8 documentos personalizados)', value: 'templates', checked: true },
    ],
    required: true,
  });

  // 4. Output directory
  const outputDir = await input({
    message: 'Diretório de saída',
    default: '.claude',
  });

  return {
    projectName,
    stack,
    language,
    features,
    outputDir,
  };
}

function inferLanguage(stack: string): string {
  const map: Record<string, string> = {
    Angular: 'TypeScript',
    React: 'TypeScript',
    'Next.js': 'TypeScript',
    Vue: 'TypeScript',
    'Node.js': 'TypeScript',
    NestJS: 'TypeScript',
    Python: 'Python',
    Go: 'Go',
    Rust: 'Rust',
    '.NET': 'C#',
  };
  return map[stack] || '';
}

export async function confirmInstall(answers: SetupAnswers): Promise<boolean> {
  console.log('');
  console.log(chalk.bold('  Resumo da instalação:'));
  console.log(`    Projeto:   ${answers.projectName}`);
  console.log(`    Stack:     ${answers.stack}`);
  console.log(`    Recursos:  ${answers.features.join(', ')}`);
  console.log(`    Diretório: ${answers.outputDir}`);
  console.log('');

  return confirm({
    message: 'Confirmar instalação?',
    default: true,
  });
}
