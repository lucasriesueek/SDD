import path from 'node:path';
import fse from 'fs-extra';
import { readJsonFile, fileExists, getDirName } from '../utils/file-utils.js';

export interface ProjectInfo {
  name: string;
  stack: string;
  language: string;
  framework: string;
  frameworkVersion: string;
  buildTool: string;
  testRunner: string;
  packageManager: string;
  linter: string;
  dependencies: string[];
}

interface PackageJson {
  name?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

const STACK_DETECTORS: Array<{
  check: (pkg: PackageJson) => boolean;
  stack: string;
  framework: string;
  language: string;
}> = [
  { check: pkg => !!pkg.dependencies?.['@angular/core'], stack: 'Angular', framework: '@angular/core', language: 'TypeScript' },
  { check: pkg => !!pkg.dependencies?.['react'] || !!pkg.dependencies?.['next'], stack: 'React', framework: 'react', language: 'TypeScript' },
  { check: pkg => !!pkg.dependencies?.['next'], stack: 'Next.js', framework: 'next', language: 'TypeScript' },
  { check: pkg => !!pkg.dependencies?.['vue'], stack: 'Vue', framework: 'vue', language: 'TypeScript' },
  { check: pkg => !!pkg.dependencies?.['@nestjs/core'], stack: 'NestJS', framework: '@nestjs/core', language: 'TypeScript' },
  { check: pkg => !!pkg.dependencies?.['express'], stack: 'Node.js', framework: 'express', language: 'TypeScript' },
  { check: pkg => !!pkg.dependencies?.['fastify'], stack: 'Node.js', framework: 'fastify', language: 'TypeScript' },
];

function detectBuildTool(pkg: PackageJson): string {
  if (pkg.devDependencies?.['@angular/cli']) return 'Angular CLI';
  if (pkg.devDependencies?.['vite']) return 'Vite';
  if (pkg.devDependencies?.['webpack']) return 'Webpack';
  if (pkg.devDependencies?.['esbuild']) return 'esbuild';
  if (pkg.devDependencies?.['next']) return 'Next.js';
  return '[DETECTAR]';
}

function detectTestRunner(pkg: PackageJson): string {
  if (pkg.devDependencies?.['vitest']) return 'Vitest';
  if (pkg.devDependencies?.['jest']) return 'Jest';
  if (pkg.devDependencies?.['karma']) return 'Karma';
  if (pkg.devDependencies?.['mocha']) return 'Mocha';
  return '[DETECTAR]';
}

function detectPackageManager(projectDir: string): string {
  if (fse.pathExistsSync(path.join(projectDir, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fse.pathExistsSync(path.join(projectDir, 'yarn.lock'))) return 'yarn';
  if (fse.pathExistsSync(path.join(projectDir, 'bun.lockb'))) return 'bun';
  return 'npm';
}

function detectLinter(pkg: PackageJson): string {
  if (pkg.devDependencies?.['eslint']) return 'ESLint';
  if (pkg.devDependencies?.['biome']) return 'Biome';
  return '[DETECTAR]';
}

function getVersion(pkg: PackageJson, dep: string): string {
  const ver = pkg.dependencies?.[dep] ?? pkg.devDependencies?.[dep];
  if (!ver) return '';
  return ver.replace(/^[\^~>=<]*/, '');
}

function getComposerVersion(composer: Record<string, any>, dep: string): string {
  const ver = composer.require?.[dep] ?? composer['require-dev']?.[dep];
  if (!ver) return '';
  // Laravel usa versões como "^12.0.0"
  return ver.replace(/^[\^~>=<]*/, '');
}

function getMainDeps(pkg: PackageJson): string[] {
  const all = { ...pkg.dependencies, ...pkg.devDependencies };
  const skip = new Set([
    'typescript', '@types/node', 'tslib', 'rxjs', 'zone.js',
    '@angular/platform-browser', '@angular/platform-browser-dynamic',
    '@angular/compiler', '@angular/compiler-cli',
    'core-js', 'reflect-metadata',
  ]);
  return Object.keys(all).filter(k => !skip.has(k)).sort().slice(0, 15);
}

async function detectNodeProject(projectDir: string): Promise<ProjectInfo | null> {
  const pkgPath = path.join(projectDir, 'package.json');
  const pkg = await readJsonFile<PackageJson>(pkgPath);
  if (!pkg) return null;

  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
  const hasTs = !!allDeps['typescript'];

  for (const detector of STACK_DETECTORS) {
    if (detector.check(pkg)) {
      return {
        name: pkg.name || getDirName(projectDir),
        stack: detector.stack,
        language: hasTs ? 'TypeScript' : 'JavaScript',
        framework: detector.framework,
        frameworkVersion: getVersion(pkg, detector.framework),
        buildTool: detectBuildTool(pkg),
        testRunner: detectTestRunner(pkg),
        packageManager: detectPackageManager(projectDir),
        linter: detectLinter(pkg),
        dependencies: getMainDeps(pkg),
      };
    }
  }

  // Generic Node.js project
  return {
    name: pkg.name || getDirName(projectDir),
    stack: 'Node.js',
    language: hasTs ? 'TypeScript' : 'JavaScript',
    framework: 'node',
    frameworkVersion: process.version,
    buildTool: detectBuildTool(pkg),
    testRunner: detectTestRunner(pkg),
    packageManager: detectPackageManager(projectDir),
    linter: detectLinter(pkg),
    dependencies: getMainDeps(pkg),
  };
}

async function detectPythonProject(projectDir: string): Promise<ProjectInfo | null> {
  const reqPath = path.join(projectDir, 'requirements.txt');
  const pyPath = path.join(projectDir, 'pyproject.toml');

  let deps: string[] = [];
  let framework = 'Python';
  let frameworkVersion = '';

  if (await fileExists(reqPath)) {
    const content = await fse.readFile(reqPath, 'utf-8');
    deps = content.split('\n').map(l => l.split('==')[0].split('>=')[0].trim()).filter(Boolean);

    if (deps.some(d => d.toLowerCase().includes('fastapi'))) { framework = 'FastAPI'; }
    else if (deps.some(d => d.toLowerCase().includes('django'))) { framework = 'Django'; }
    else if (deps.some(d => d.toLowerCase().includes('flask'))) { framework = 'Flask'; }
  } else if (await fileExists(pyPath)) {
    const content = await fse.readFile(pyPath, 'utf-8');
    deps = content.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('[') && !l.startsWith('#'));

    if (content.includes('fastapi')) { framework = 'FastAPI'; }
    else if (content.includes('django')) { framework = 'Django'; }
  } else {
    return null;
  }

  return {
    name: getDirName(projectDir),
    stack: 'Python',
    language: 'Python',
    framework,
    frameworkVersion,
    buildTool: '[DETECTAR]',
    testRunner: 'pytest',
    packageManager: 'pip',
    linter: '[DETECTAR]',
    dependencies: deps.slice(0, 15),
  };
}

async function detectPhpProject(projectDir: string): Promise<ProjectInfo | null> {
  const composerPath = path.join(projectDir, 'composer.json');

  if (await fileExists(composerPath)) {
    const composer = await readJsonFile<Record<string, any>>(composerPath);
    if (!composer) return null;

    const allDeps = { ...composer.require ?? {}, ...composer['require-dev'] ?? {} };

    // Detectar Laravel
    if (allDeps['laravel/framework']) {
      // Detectar Inertia no composer
      const hasInertiaComposer = !!allDeps['inertiajs/inertia-laravel'];

      // Detectar React/Vue/Svelte no package.json
      let hasReact = false;
      let hasVue = false;
      let hasSvelte = false;

      const pkgPath = path.join(projectDir, 'package.json');
      if (await fileExists(pkgPath)) {
        const pkg = await readJsonFile<PackageJson>(pkgPath);
        if (pkg) {
          hasReact = !!pkg.dependencies?.['react'];
          hasVue = !!pkg.dependencies?.['vue'];
          hasSvelte = !!pkg.dependencies?.['svelte'];
        }
      }

      // Determinar stack frontend
      let frontendStack = '';
      const hasInertia = hasInertiaComposer;
      if (hasInertia && hasReact) {
        frontendStack = 'Inertia + React';
      } else if (hasInertia && hasVue) {
        frontendStack = 'Inertia + Vue';
      } else if (hasInertia && hasSvelte) {
        frontendStack = 'Inertia + Svelte';
      } else if (hasInertia) {
        frontendStack = 'Inertia';
      }

      return {
        name: composer.name || getDirName(projectDir),
        stack: frontendStack ? `Laravel + ${frontendStack}` : 'Laravel',
        language: 'PHP',
        framework: 'laravel/framework',
        frameworkVersion: getComposerVersion(composer, 'laravel/framework'),
        buildTool: 'Vite',
        testRunner: 'PHPUnit',
        packageManager: 'composer',
        linter: 'Laravel Pint',
        dependencies: Object.keys(allDeps).slice(0, 15),
      };
    }
  }

  return null;
}

async function detectOtherProjects(projectDir: string): Promise<ProjectInfo | null> {
  // Go
  if (await fileExists(path.join(projectDir, 'go.mod'))) {
    return {
      name: getDirName(projectDir),
      stack: 'Go',
      language: 'Go',
      framework: 'go',
      frameworkVersion: '',
      buildTool: 'go build',
      testRunner: 'go test',
      packageManager: 'go mod',
      linter: '[DETECTAR]',
      dependencies: [],
    };
  }

  // Rust
  if (await fileExists(path.join(projectDir, 'Cargo.toml'))) {
    return {
      name: getDirName(projectDir),
      stack: 'Rust',
      language: 'Rust',
      framework: 'cargo',
      frameworkVersion: '',
      buildTool: 'cargo',
      testRunner: 'cargo test',
      packageManager: 'cargo',
      linter: 'clippy',
      dependencies: [],
    };
  }

  // .NET
  const csprojFiles = await fse.readdir(projectDir).catch(() => [] as string[]);
  if (csprojFiles.some(f => f.endsWith('.csproj'))) {
    return {
      name: getDirName(projectDir),
      stack: '.NET',
      language: 'C#',
      framework: 'ASP.NET Core',
      frameworkVersion: '',
      buildTool: 'dotnet',
      testRunner: 'xUnit',
      packageManager: 'nuget',
      linter: '[DETECTAR]',
      dependencies: [],
    };
  }

  return null;
}

export async function detectProject(projectDir: string): Promise<ProjectInfo> {
  return (
    (await detectPhpProject(projectDir)) ||
    (await detectNodeProject(projectDir)) ||
    (await detectPythonProject(projectDir)) ||
    (await detectOtherProjects(projectDir)) || {
      name: getDirName(projectDir),
      stack: '',
      language: '',
      framework: '',
      frameworkVersion: '',
      buildTool: '[DETECTAR]',
      testRunner: '[DETECTAR]',
      packageManager: 'npm',
      linter: '[DETECTAR]',
      dependencies: [],
    }
  );
}

export const SUPPORTED_STACKS = [
  'Angular', 'React', 'Next.js', 'Vue', 'Node.js', 'NestJS',
  'Laravel', 'Laravel + Inertia', 'Laravel + Inertia + React', 'Laravel + Inertia + Vue', 'Laravel + Inertia + Svelte',
  'Python', 'Go', 'Rust', '.NET',
] as const;

export type SupportedStack = typeof SUPPORTED_STACKS[number];
