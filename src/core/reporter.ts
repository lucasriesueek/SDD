import chalk from 'chalk';
import type { ScaffoldResult } from './scaffolder.js';
import type { ProjectInfo } from './detector.js';

export function printReport(result: ScaffoldResult, info: ProjectInfo, outputDir: string): void {
  console.log('');
  console.log(chalk.bold.cyan('  ╔══════════════════════════════════════════════════╗'));
  console.log(chalk.bold.cyan('  ║') + chalk.bold.green('  SDD-Ueek v2.1 instalado com sucesso!') + ' '.repeat(12) + chalk.bold.cyan('║'));
  console.log(chalk.bold.cyan('  ╚══════════════════════════════════════════════════╝'));
  console.log('');

  // Stack detected
  console.log(chalk.bold('  Stack: ') + chalk.cyan(info.stack));
  if (info.framework) {
    console.log(chalk.dim('  Framework: ' + info.framework + ' ' + info.frameworkVersion));
  }
  console.log('');

  // Structure created
  console.log(chalk.bold('  Estrutura criada em ' + chalk.cyan(outputDir) + '/:'));
  console.log('');
  console.log('  ' + chalk.dim('Pasta') + '                  ' + chalk.dim('Arquivos'));
  console.log('  ' + '─'.repeat(45));

  if (result.agents.length > 0) {
    console.log('  .claude/agents/         ' + chalk.green(String(result.agents.length).padStart(2)) + '  agentes');
  }
  if (result.commands.length > 0) {
    console.log('  .claude/commands/       ' + chalk.green(String(result.commands.length).padStart(2)) + '  commands');
  }
  if (result.templates.length > 0) {
    console.log('  .claude/CONTEXT/        ' + chalk.green(String(result.templates.length).padStart(2)) + '  templates');
  }
  console.log('  .claude/README.md            ' + chalk.green('guia rapido'));
  console.log('  .claude/COMO_USAR.md         ' + chalk.green('guia completo'));
  if (result.settings) {
    console.log('  .claude/settings.json        ' + chalk.green('configuracao'));
  }
  console.log('');

  // Available commands
  if (result.commands.length > 0) {
    console.log(chalk.bold('  Commands disponiveis (digite /nome no Claude Code):'));
    console.log('');

    const cmds = [
      ['/arquitetura', 'Ver padroes e convencoes do projeto'],
      ['/implementar', 'Criar feature baseada em referencia'],
      ['/revisar', 'Revisar codigo antes do commit'],
      ['/card', 'Gerar User Story com Acceptance Criteria'],
      ['/pr', 'Gerar descricao de Pull Request'],
      ['/doc', 'Documentar componentes e servicos'],
      ['/debuggar', 'Debugging sistematico'],
      ['/explorar', 'Explorar codebase e auditorias'],
    ];

    for (const [cmd, desc] of cmds) {
      console.log(`    ${chalk.cyan(cmd.padEnd(16))} ${chalk.dim(desc)}`);
    }
    console.log('');
  }

  // What to do now
  console.log(chalk.bold('  O que fazer agora?'));
  console.log('');
  console.log('    ' + chalk.green('1.') + ' Abra o Claude Code neste projeto');
  console.log('    ' + chalk.green('2.') + ' Digite ' + chalk.cyan('/arquitetura') + ' para ver os padroes do projeto');
  console.log('    ' + chalk.green('3.') + ' Use ' + chalk.cyan('/implementar') + ' para criar sua primeira feature');
  console.log('    ' + chalk.green('4.') + ' Sempre use ' + chalk.cyan('/revisar') + ' antes de commitar');
  console.log('');
  console.log(chalk.dim('    Guia completo: .claude/COMO_USAR.md'));
  console.log('');
}
