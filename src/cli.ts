import { Command } from 'commander';
import chalk from 'chalk';
import { confirm } from '@inquirer/prompts';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { registerInitCommand, runInit } from './commands/init.js';
import { registerListCommand } from './commands/list.js';
import { printWelcomeBanner } from './utils/logger.js';

// Ler versão dinamicamente do package.json
const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = readFileSync(join(__dirname, '../package.json'), 'utf-8');
const { version } = JSON.parse(packageJson);

const program = new Command();

program
  .name('sdd-ueek')
  .description('SDD-Ueek - Spec Driven Development CLI')
  .version(version);

registerInitCommand(program);
registerListCommand(program);

// Default action: quando roda `npx sdd-ueek` sem subcommand
program.action(async () => {
  printWelcomeBanner();

  const shouldInit = await confirm({
    message: 'Deseja configurar o SDD-Ueek neste projeto?',
    default: true,
  });

  if (shouldInit) {
    await runInit(process.cwd(), { output: '.claude' });
  } else {
    console.log('');
    console.log('  ' + chalk.dim('Sem problemas! Quando quiser configurar, rode:'));
    console.log('    ' + chalk.green('$') + ' npx sdd-ueek init');
    console.log('');
    console.log('  ' + chalk.dim('Para ver todas as opcoes:'));
    console.log('    ' + chalk.green('$') + ' npx sdd-ueek --help');
    console.log('');
  }
});

function buildHelpBanner(): string {
  const c = chalk.bold.cyan;
  const W = 60;
  const FIGLET_W = 25;

  const figletLines = [
    ' _   _ _____ _____ _  __',
    '| | | | ____| ____| |/ /',
    '| | | |  _| |  _| | \' /',
    '| |_| | |___| |___| . \\',
    ' \\___/|_____|_____|_|\\_\\',
  ];

  const subtitle = `Spec Driven Development CLI v${version}`;
  const tagline = 'Configure seu projeto para AI-assisted development';

  function centerPad(visibleText: string, visibleLen: number): string {
    const pad = W - visibleLen;
    const left = Math.floor(pad / 2);
    const right = pad - left;
    return ' '.repeat(left) + visibleText + ' '.repeat(right);
  }

  let banner = '';
  banner += c('  ╔' + '═'.repeat(W) + '╗') + '\n';
  banner += c('  ║') + ' '.repeat(W) + c('║') + '\n';
  for (const line of figletLines) {
    const padded = line.padEnd(FIGLET_W);
    banner += c('  ║') + centerPad(padded, FIGLET_W) + c('║') + '\n';
  }
  banner += c('  ║') + ' '.repeat(W) + c('║') + '\n';
  banner += c('  ║') + centerPad(chalk.bold.white(subtitle), subtitle.length) + c('║') + '\n';
  banner += c('  ║') + centerPad(chalk.dim(tagline), tagline.length) + c('║') + '\n';
  banner += c('  ║') + ' '.repeat(W) + c('║') + '\n';
  banner += c('  ╚' + '═'.repeat(W) + '╝');

  return banner;
}

program.addHelpText('before', `
${buildHelpBanner()}

  ${chalk.bold('Inicio rapido:')}
    ${chalk.green('$')} npx sdd-ueek                       ${chalk.dim('# Configura tudo automaticamente')}
    ${chalk.green('$')} npx sdd-ueek init -y                ${chalk.dim('# Usar valores padrao')}
    ${chalk.green('$')} npx sdd-ueek init --stack angular   ${chalk.dim('# Forcar stack Angular')}

  ${chalk.bold('O que o SDD cria no seu projeto:')}
    ${chalk.cyan('.claude/agents/')}     Assistentes especializados (debug, review, doc)
    ${chalk.cyan('.claude/commands/')}    8 comandos /xxx para usar no Claude Code
    ${chalk.cyan('.claude/CONTEXT/')}     Templates de specs e padroes da stack
`);

program.addHelpText('after', `
  ${chalk.bold('Recursos adicionais:')}
    ${chalk.green('$')} sdd-ueek list            ${chalk.dim('# Listar todos os recursos')}
    ${chalk.green('$')} sdd-ueek list stacks     ${chalk.dim('# Stacks suportadas')}
    ${chalk.green('$')} sdd-ueek list commands   ${chalk.dim('# Commands disponiveis')}

  ${chalk.dim('  Docs: https://www.npmjs.com/package/sdd-ueek')}
`);

program.parseAsync();
