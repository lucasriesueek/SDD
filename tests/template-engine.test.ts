import { describe, it, expect } from 'vitest';
import { processTemplate, buildVariables } from '../src/core/template-engine.js';
import type { ProjectInfo } from '../src/core/detector.js';

const mockInfo: ProjectInfo = {
  name: 'test-project',
  stack: 'Angular',
  language: 'TypeScript',
  framework: '@angular/core',
  frameworkVersion: '17.3.0',
  buildTool: 'Angular CLI',
  testRunner: 'Jest',
  packageManager: 'npm',
  linter: 'ESLint',
  dependencies: ['@angular/core', 'rxjs', 'zone.js'],
};

describe('template-engine', () => {
  it('should replace simple placeholders', () => {
    const vars = buildVariables(mockInfo);
    const result = processTemplate('Project: {{NOME_PROJETO}} | Stack: {{STACK_PRINCIPAL}} | Date: {{DATA_ATUAL}}', vars);
    expect(result).toContain('test-project');
    expect(result).toContain('Angular');
    expect(result).toMatch(/\d{4}-\d{2}-\d{2}/);
    expect(result).not.toContain('{{');
  });

  it('should include matching conditional blocks', () => {
    const vars = buildVariables(mockInfo);
    const template = `before
{{#if STACK_PRINCIPAL contains "Angular"}}
Angular content here
{{/if}}
after`;
    const result = processTemplate(template, vars);
    expect(result).toContain('Angular content here');
    expect(result).not.toContain('{{#if');
  });

  it('should exclude non-matching conditional blocks', () => {
    const vars = buildVariables(mockInfo);
    const template = `before
{{#if STACK_PRINCIPAL contains "React"}}
React content here
{{/if}}
after`;
    const result = processTemplate(template, vars);
    expect(result).not.toContain('React content here');
    expect(result).toContain('before');
    expect(result).toContain('after');
  });

  it('should handle nested conditionals', () => {
    const vars = buildVariables(mockInfo);
    const template = `start
{{#if STACK_PRINCIPAL contains "Angular"}}
angular
{{#if STACK_PRINCIPAL contains "React"}}
react inside angular
{{/if}}
{{/if}}
end`;
    const result = processTemplate(template, vars);
    expect(result).toContain('angular');
    expect(result).not.toContain('react inside angular');
  });

  it('should replace [DETECTAR] with build tool', () => {
    const vars = buildVariables(mockInfo);
    const result = processTemplate('Tool: [DETECTAR]', vars);
    expect(result).toBe('Tool: Angular CLI');
  });

  it('should replace [LISTAR DEPENDÊNCIAS PRINCIPAIS DO PROJETO]', () => {
    const vars = buildVariables(mockInfo);
    const result = processTemplate('Deps: [LISTAR DEPENDÊNCIAS PRINCIPAIS DO PROJETO]', vars);
    expect(result).toContain('@angular/core');
  });
});
