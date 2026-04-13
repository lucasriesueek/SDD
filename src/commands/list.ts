import type { Command } from 'commander';
import chalk from 'chalk';
import { listMdFiles, AGENTS_DIR, COMMANDS_DIR, TEMPLATES_DIR } from '../utils/file-utils.js';
import { SUPPORTED_STACKS } from '../core/detector.js';

const TEMPLATE_DESCRIPTIONS: Record<string, string> = {
  'PADROES_ARQUITETURA.md': 'Padroes arquiteturais e convencoes da sua stack',
  'REVISAO_CODIGO.md': 'Metodologia de revisao de codigo',
  'CRIAR_CARD_TASK.md': 'Template de User Stories com Acceptance Criteria',
  'PADROES_DE_PR.md': 'Padroes de Pull Request',
  'SPEC_BUSINESS_RULES.md': 'Especificacao de regras de negocio',
  'SPEC_API_CONTRACT.md': 'Contratos de API',
  'SPEC_DATA_MODEL.md': 'Modelo de dados',
  'SPEC_WORKFLOW.md': 'Workflows e processos',
};

const AGENT_DESCRIPTIONS: Record<string, string> = {
  'code-archaeologist.md': 'Analise de codigo legado e refatoracao',
  'debugger.md': 'Debugging sistematico e root cause analysis',
  'documentation-writer.md': 'Documentacao tecnica (README, API docs)',
  'frontend-specialist.md': 'Frontend Angular 17+, React, Vue',
  'mobile-developer.md': 'React Native e Flutter',
  'explorer-agent.md': 'Exploracao avancada de codebase',
};

const COMMAND_DETAILS: Record<string, { cmd: string; desc: string }> = {
  'arquitetura.md': { cmd: '/arquitetura', desc: 'Ver padroes, convencoes e exemplos do projeto' },
  'card.md': { cmd: '/card', desc: 'Gerar User Story com Acceptance Criteria' },
  'debuggar.md': { cmd: '/debuggar', desc: 'Debugging sistematico com root cause analysis' },
  'doc.md': { cmd: '/doc', desc: 'Documentar componentes, servicos e APIs' },
  'explorar.md': { cmd: '/explorar', desc: 'Exploracao de codebase e auditorias' },
  'implementar.md': { cmd: '/implementar', desc: 'Criar feature baseada em referencia existente' },
  'pr.md': { cmd: '/pr', desc: 'Gerar descricao de Pull Request' },
  'revisar.md': { cmd: '/revisar', desc: 'Revisao de codigo antes do commit' },
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
