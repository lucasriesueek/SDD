import { describe, it, expect } from 'vitest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { detectProject } from '../src/core/detector.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixtures = path.join(__dirname, 'fixtures');

describe('detector', () => {
  it('should detect Angular project', async () => {
    const info = await detectProject(path.join(fixtures, 'angular-project'));
    expect(info.stack).toBe('Angular');
    expect(info.framework).toBe('@angular/core');
    expect(info.language).toBe('TypeScript');
    expect(info.name).toBe('my-angular-app');
    expect(info.buildTool).toBe('Angular CLI');
    expect(info.frameworkVersion).toBe('17.3.0');
  });

  it('should detect React project', async () => {
    const info = await detectProject(path.join(fixtures, 'react-project'));
    expect(info.stack).toBe('React');
    expect(info.framework).toBe('react');
    expect(info.language).toBe('TypeScript');
    expect(info.name).toBe('my-react-app');
    expect(info.frameworkVersion).toBe('18.2.0');
  });

  it('should detect Laravel + Inertia + React project', async () => {
    const info = await detectProject(path.join(fixtures, 'laravel-inertia-react'));
    expect(info.stack).toBe('Laravel + Inertia + React');
    expect(info.framework).toBe('laravel/framework');
    expect(info.language).toBe('PHP');
    expect(info.name).toBe('test/laravel-inertia-react');
    expect(info.buildTool).toBe('Vite');
    expect(info.testRunner).toBe('PHPUnit');
    expect(info.packageManager).toBe('composer');
    expect(info.linter).toBe('Laravel Pint');
  });

  it('should return empty stack for unknown project', async () => {
    const info = await detectProject(path.join(fixtures, 'unknown-project'));
    expect(info.stack).toBe('');
    expect(info.name).toBe('unknown-project');
  });
});
