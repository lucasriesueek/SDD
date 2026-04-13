import type { ProjectInfo } from './detector.js';

export interface TemplateVariables {
  NOME_PROJETO: string;
  DATA_ATUAL: string;
  STACK_PRINCIPAL: string;
  LINGUAGEM: string;
  FRAMEWORK: string;
  VERSAO_FRAMEWORK: string;
  BASE_URL: string;
  DATABASE_TYPE: string;
  'DOMINIO DE NEGOCIO': string;
  DETECTAR_BUILD_TOOL: string;
  DETECTAR_TEST_RUNNER: string;
  DETECTAR_LINTER: string;
  DETECTAR_PACKAGE_MANAGER: string;
  DEPENDENCIAS_PRINCIPAIS: string;
}

export function buildVariables(info: ProjectInfo): TemplateVariables {
  const today = new Date().toISOString().split('T')[0];

  return {
    NOME_PROJETO: info.name,
    DATA_ATUAL: today,
    STACK_PRINCIPAL: info.stack,
    LINGUAGEM: info.language,
    FRAMEWORK: info.framework,
    VERSAO_FRAMEWORK: info.frameworkVersion,
    BASE_URL: 'http://localhost:3000',
    DATABASE_TYPE: '[DATABASE_TYPE]',
    'DOMINIO DE NEGOCIO': '[DOMÍNIO DE NEGÓCIO]',
    DETECTAR_BUILD_TOOL: info.buildTool,
    DETECTAR_TEST_RUNNER: info.testRunner,
    DETECTAR_LINTER: info.linter,
    DETECTAR_PACKAGE_MANAGER: info.packageManager,
    DEPENDENCIAS_PRINCIPAIS: info.dependencies.join(', '),
  };
}

/**
 * Process a template string:
 * 1. Handle conditional blocks: {{#if VAR contains "Value"}}...{{/if}}
 * 2. Replace simple placeholders: {{VAR_NAME}}
 * 3. Replace bracket placeholders: [TEXT]
 */
export function processTemplate(content: string, variables: TemplateVariables): string {
  // Build a lookup map for conditional checks (lowercased values)
  const varLookup: Record<string, string> = {
    STACK_PRINCIPAL: variables.STACK_PRINCIPAL.toLowerCase(),
    LINGUAGEM: variables.LINGUAGEM.toLowerCase(),
    FRAMEWORK: variables.FRAMEWORK.toLowerCase(),
  };

  // Step 1: Process conditional blocks
  const lines = content.split('\n');
  const result: string[] = [];
  let skipDepth = 0;
  const condStack: boolean[] = [];

  for (const line of lines) {
    // Check for opening conditional
    const openMatch = line.match(/^\s*\{\{#if\s+(\w+)\s+contains\s+"([^"]+)"\}\}\s*$/);
    if (openMatch) {
      const varName = openMatch[1];
      const checkValue = openMatch[2].toLowerCase();
      const currentVal = varLookup[varName] ?? '';
      const matches = currentVal.includes(checkValue);
      condStack.push(matches);
      if (!matches) skipDepth++;
      continue;
    }

    // Check for closing conditional
    const closeMatch = line.match(/^\s*\{\{\/if\}\}\s*$/);
    if (closeMatch) {
      const wasTrue = condStack.pop() ?? true;
      if (!wasTrue) skipDepth--;
      continue;
    }

    // Skip lines inside false conditionals
    if (skipDepth > 0) continue;

    result.push(line);
  }

  let processed = result.join('\n');

  // Step 2: Replace {{PLACEHOLDER}} variables
  const placeholderMap: Record<string, string> = {
    '{{NOME_PROJETO}}': variables.NOME_PROJETO,
    '{{DATA_ATUAL}}': variables.DATA_ATUAL,
    '{{STACK_PRINCIPAL}}': variables.STACK_PRINCIPAL,
    '{{LINGUAGEM}}': variables.LINGUAGEM,
    '{{FRAMEWORK}}': variables.FRAMEWORK,
    '{{VERSAO_FRAMEWORK}}': variables.VERSAO_FRAMEWORK,
    '{{BASE_URL}}': variables.BASE_URL,
  };

  for (const [placeholder, value] of Object.entries(placeholderMap)) {
    processed = processed.split(placeholder).join(value);
  }

  // Step 3: Replace [DETECTAR] patterns
  processed = processed.split('[DETECTAR]').join(variables.DETECTAR_BUILD_TOOL);

  // Replace [LISTAR DEPENDÊNCIAS PRINCIPAIS DO PROJETO]
  processed = processed
    .split('[LISTAR DEPENDÊNCIAS PRINCIPAIS DO PROJETO]')
    .join(variables.DEPENDENCIAS_PRINCIPAIS);

  // Replace [DATABASE_TYPE]
  processed = processed.split('[DATABASE_TYPE]').join(variables.DATABASE_TYPE);

  // Replace [DOMÍNIO DE NEGÓCIO]
  processed = processed.split('[DOMÍNIO DE NEGÓCIO]').join(variables['DOMINIO DE NEGOCIO']);

  return processed;
}
