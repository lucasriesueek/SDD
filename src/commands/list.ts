import type { Command } from 'commander';
import chalk from 'chalk';
import { listMdFiles, AGENTS_DIR, COMMANDS_DIR, TEMPLATES_DIR } from '../utils/file-utils.js';
import { SUPPORTED_STACKS } from '../core/detector.js';

const TEMPLATE_DESCRIPTIONS: Record<string, string> = {
  'PADROES_ARQUITETURA.md': 'Padroes arquiteturais e convencoes da sua stack',
  'REVISAO_CODIGO.md': 'Metodologia de revisao de codigo',
  'CRIAR_CARD_TASK.md': 'Template de User Stories com Acceptance Criteria',
  'PADROES_DE_PR.md': 'Padroes de Pull Request',
};

const AGENT_DESCRIPTIONS: Record<string, string> = {
  'code-archaeologist.md': 'Analise de codigo legado e refatoracao',
  'debugger.md': 'Debugging sistematico e root cause analysis',
  'documentation-writer.md': 'Documentacao tecnica (README, API docs)',
  'frontend-specialist.md': 'Frontend Angular 17+, React, Vue',
  'mobile-developer.md': 'React Native e Flutter',
  'explorer-agent.md': 'Exploracao avancada de codebase',
  'laravel-ueek-specialist.md': 'Laravel 12 + Inertia 2.x + React 19 specialist. Expertise em monolitos modernos sem APIs REST tradicionais.',
};

const COMMAND_DETAILS: Record<string, { cmd: string; desc: string }> = {
  'iniciar-projeto.md': { cmd: '/iniciar-projeto', desc: 'Inicializa padroes arquiteturais investigando o codebase' },
  'criar-card.md': { cmd: '/criar-card', desc: 'Criar User Story com Acceptance Criteria' },
  'criar-pr.md': { cmd: '/criar-pr', desc: 'Gerar descricao de Pull Request' },
  'criar-doc.md': { cmd: '/criar-doc', desc: 'Gerar documentacao tecnica' },
  'diretrizes.md': { cmd: '/diretrizes', desc: 'Ver diretrizes, padroes e exemplos do projeto' },
  'revisar.md': { cmd: '/revisar', desc: 'Revisao de codigo antes do commit' },
  'apartir.md': { cmd: '/apartir', desc: 'Criar feature baseada em referencia existente' },
  'debuggar.md': { cmd: '/debuggar', desc: 'Debugging sistematico com root cause analysis' },
  'investigar.md': { cmd: '/investigar', desc: 'Investigacao de codebase e auditorias' },
  'ueek-laravel.md': { cmd: '/ueek-laravel', desc: 'Especialista Laravel + Inertia + React' },
};

export function registerListCommand(program: Command): void {
  program
    .command('list')
    .description('Lista recursos disponiveis do SDD')
    .argument('[type]', 'Tipo de recurso (templates, agents, commands, stacks)', 'all')
    .action(async (type: string) => {
      const t = type.toLowerCase();

      console.log('');
      console.log(chalk.bold.cyan('  SDD-Ueek - Recursos disponiveis'));
      console.log('');

      if (t === 'all' || t === 'templates') {
        console.log(chalk.bold('  Templates de contexto (copiados para .claude/CONTEXT/):'));
        console.log('  ' + chalk.dim('─'.repeat(55)));
        const files = await listMdFiles(TEMPLATES_DIR);
        for (const f of files) {
          const desc = TEMPLATE_DESCRIPTIONS[f] || '';
          console.log(`    ${chalk.green('•')} ${f.padEnd(30)} ${chalk.dim(desc)}`);
        }
        console.log('');
      }

      if (t === 'all' || t === 'agents') {
        console.log(chalk.bold('  Agentes (ativados automaticamente pelo Claude):'));
        console.log('  ' + chalk.dim('─'.repeat(55)));
        const files = await listMdFiles(AGENTS_DIR);
        for (const f of files) {
          const desc = AGENT_DESCRIPTIONS[f] || '';
          console.log(`    ${chalk.green('•')} ${f.padEnd(30)} ${chalk.dim(desc)}`);
        }
        console.log('');
      }

      if (t === 'all' || t === 'commands') {
        console.log(chalk.bold('  Commands (chamados via /nome no Claude Code):'));
        console.log('  ' + chalk.dim('─'.repeat(55)));
        const files = await listMdFiles(COMMANDS_DIR);
        for (const f of files) {
          const detail = COMMAND_DETAILS[f];
          if (detail) {
            console.log(`    ${chalk.cyan(detail.cmd.padEnd(16))} ${detail.desc}`);
          }
        }
        console.log('');
      }

      if (t === 'all' || t === 'stacks') {
        console.log(chalk.bold('  Stacks suportadas:'));
        console.log('  ' + chalk.dim('─'.repeat(55)));
        const stackLine = SUPPORTED_STACKS.map(s => chalk.green('•') + ' ' + s).join('    ');
        console.log('    ' + stackLine);
        console.log('');
      }
    });
}
