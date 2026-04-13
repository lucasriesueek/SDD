import chalk from 'chalk';

const BOX_W = 60;
const FIGLET_W = 25;

function centerPad(visibleText: string, visibleLen: number): string {
  const pad = BOX_W - visibleLen;
  const left = Math.floor(pad / 2);
  const right = pad - left;
  return ' '.repeat(left) + visibleText + ' '.repeat(right);
}

export function printWelcomeBanner(): void {
  const c = chalk.bold.cyan;
  const g = chalk.cyan;
  const d = chalk.dim;

  const figletLines = [
    ' _   _ _____ _____ _  __',
    '| | | | ____| ____| |/ /',
    '| | | |  _| |  _| | \' /',
    '| |_| | |___| |___| . \\',
    ' \\___/|_____|_____|_|\\_\\',
  ];

  const subtitle = 'Spec Driven Development CLI v2.1';
  const tagline = 'Configure seu projeto para AI-assisted development';

  console.log('');
  console.log(c('  ╔' + '═'.repeat(BOX_W) + '╗'));
  console.log(c('  ║') + ' '.repeat(BOX_W) + c('║'));
  for (const line of figletLines) {
    const padded = line.padEnd(FIGLET_W);
    console.log(c('  ║') + centerPad(padded, FIGLET_W) + c('║'));
  }
  console.log(c('  ║') + ' '.repeat(BOX_W) + c('║'));
  console.log(c('  ║') + centerPad(chalk.bold.white(subtitle), subtitle.length) + c('║'));
  console.log(c('  ║') + centerPad(chalk.dim(tagline), tagline.length) + c('║'));
  console.log(c('  ║') + ' '.repeat(BOX_W) + c('║'));
  console.log(c('  ╚' + '═'.repeat(BOX_W) + '╝'));
  console.log('');
  console.log('  ' + chalk.bold('O SDD vai criar no seu projeto:'));
  console.log('    ' + g('•') + ' Agents    ' + d('— Assistentes especializados (debug, doc, review...)'));
  console.log('    ' + g('•') + ' Commands  ' + d('— Comandos /xxx no Claude Code (8 comandos)'));
  console.log('    ' + g('•') + ' Templates ' + d('— Especificacoes e padroes da sua stack'));
  console.log('');
}

export const logger = {
  banner: (text: string) => {
    console.log(chalk.bold.cyan(`\n${text}\n`));
  },

  success: (text: string) => {
    console.log(chalk.green('  ✔') + ' ' + text);
  },

  error: (text: string) => {
    console.log(chalk.red('  ✖') + ' ' + text);
  },

  warn: (text: string) => {
    console.log(chalk.yellow('  ⚠') + ' ' + text);
  },

  info: (text: string) => {
    console.log(chalk.blue('  ℹ') + ' ' + text);
  },

  dim: (text: string) => {
    console.log(chalk.dim('  ' + text));
  },

  table: (headers: string[], rows: string[][]) => {
    const colWidths = headers.map((h, i) =>
      Math.max(h.length, ...rows.map(r => r[i]?.length ?? 0))
    );

    const formatRow = (cells: string[]) =>
      '  ' + cells.map((c, i) => c.padEnd(colWidths[i])).join('  ');

    console.log(chalk.bold(formatRow(headers)));
    console.log('  ' + colWidths.map(w => '─'.repeat(w)).join('──'));
    for (const row of rows) {
      console.log(formatRow(row));
    }
  },
};
