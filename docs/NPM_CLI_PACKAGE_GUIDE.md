# Guia Completo: Criando um Pacote CLI NPM (create-sdd / sdd)

Este documento cobre tudo que voce precisa saber para transformar o SDD em um pacote CLI publicado no NPM, instalavel via `npm install -g sdd` ou `npx create-sdd`.

---

## Sumario

1. [package.json para Ferramentas CLI](#1-packagejson-para-ferramentas-cli)
2. [Estrutura do Projeto](#2-estrutura-do-projeto)
3. [package.json - Campos Essenciais Explicados](#3-packagejson---campos-essenciais-explicados)
4. [Scripts Executaveis e Shebang](#4-scripts-executaveis-e-shebang)
5. [TypeScript Setup para CLI](#5-typescript-setup-para-cli)
6. [Commander.js - Argumentos e Comandos](#6-commanderjs---argumentos-e-comandos)
7. [Inquirer.js - Prompts Interativos](#7-inquirerjs---prompts-interativos)
8. [Ora e Chalk - Spinner e Cores](#8-ora-e-chalk---spinner-e-cores)
9. [Gerenciamento de Templates](#9-gerenciamento-de-templates)
10. [Fluxo Completo: Scaffolding](#10-fluxo-completo-scaffolding)
11. [Publicacao no NPM](#11-publicacao-no-npm)
12. [Testes](#12-testes)
13. [Arquitetura de Ferramentas Populares](#13-arquitetura-de-ferramentas-populares)

---

## 1. package.json para Ferramentas CLI

### O campo `bin`

O campo `bin` no `package.json` diz ao NPM quais arquivos devem ser expostos como comandos executaveis quando o pacote e instalado globalmente ou usado via `npx`.

**Forma abreviada (comando unico):**
```json
{
  "name": "sdd",
  "bin": "./dist/cli.js"
}
```
Isso cria um comando chamado `sdd`.

**Forma mapa (multiplos comandos):**
```json
{
  "name": "sdd",
  "bin": {
    "sdd": "./dist/cli.js",
    "create-sdd": "./dist/create.js"
  }
}
```

### O campo `files`

Controla quais arquivos sao incluidos no pacote publicado. Sem isso, o NPM pode incluir arquivos desnecessarios.

```json
{
  "files": [
    "dist",
    "templates",
    "README.md"
  ]
}
```

Arquivos SEMPRE incluidos (nao precisa listar): `package.json`, `LICENSE`, `README.md`.
Arquivos SEMPRE excluidos: `node_modules`, `.git`, arquivos listados em `.npmignore`.

### O campo `engines`

Especifica versoes compativeis do Node.js:

```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

---

## 2. Estrutura do Projeto

A estrutura recomendada para o `create-sdd`:

```
sdd-cli/
├── src/
│   ├── cli.ts              # Entry point principal
│   ├── commands/
│   │   ├── init.ts         # Comando `sdd init`
│   │   ├── install.ts      # Comando `sdd install`
│   │   └── list.ts         # Comando `sdd list`
│   ├── prompts/
│   │   └── setup.ts        # Perguntas interativas
│   ├── utils/
│   │   ├── copy.ts         # Copia de templates
│   │   ├── logger.ts       # Logs coloridos
│   │   ├── detector.ts     # Deteccao de stack
│   │   └── validator.ts    # Validacoes
│   └── types/
│       └── index.ts
├── templates/               # Templates estaticos (copiados para o projeto)
│   ├── PADROES_ARQUITETURA.md
│   ├── PADROES_DE_PR.md
│   ├── REVISAO_CODIGO.md
│   ├── SPEC_API_CONTRACT.md
│   ├── SPEC_BUSINESS_RULES.md
│   ├── SPEC_DATA_MODEL.md
│   ├── SPEC_WORKFLOW.md
│   └── CRIAR_CARD_TASK.md
├── agents/                  # Templates de agentes
│   ├── code-archaeologist.md
│   ├── debugger.md
│   └── ...
├── commands/                # Templates de comandos
│   ├── arquitetura.md
│   ├── card.md
│   └── ...
├── tsconfig.json
├── tsup.config.ts
├── package.json
├── .npmignore
└── README.md
```

---

## 3. package.json - Campos Essenciais Explicados

Aqui esta o `package.json` completo recomendado para o `create-sdd`:

```json
{
  "name": "sdd",
  "version": "0.1.0",
  "description": "Spec Driven Development - CLI tool for project scaffolding with AI-ready specs",
  "type": "module",
  "main": "dist/cli.js",
  "bin": {
    "sdd": "./dist/cli.js",
    "create-sdd": "./dist/cli.js"
  },
  "files": [
    "dist",
    "templates",
    "agents",
    "commands"
  ],
  "scripts": {
    "dev": "tsx src/cli.ts",
    "build": "tsup",
    "prepublishOnly": "npm run build",
    "test": "vitest",
    "lint": "tsc --noEmit",
    "release:patch": "npm version patch && npm publish",
    "release:minor": "npm version minor && npm publish",
    "release:major": "npm version major && npm publish"
  },
  "keywords": [
    "cli",
    "scaffold",
    "sdd",
    "spec-driven-development",
    "ai",
    "claude",
    "template"
  ],
  "author": "Lucas Ries",
  "license": "MIT",
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "commander": "^13.0.0",
    "@inquirer/prompts": "^7.0.0",
    "chalk": "^5.3.0",
    "ora": "^8.0.0",
    "fs-extra": "^11.2.0",
    "glob": "^11.0.0",
    "picocolors": "^1.1.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tsup": "^8.4.0",
    "tsx": "^4.19.0",
    "@types/node": "^22.0.0",
    "@types/fs-extra": "^11.0.0",
    "vitest": "^3.0.0"
  }
}
```

### Explicacao campo a campo

| Campo | Funcao |
|---|---|
| `"name"` | Nome do pacote no NPM. Deve ser unico. |
| `"version"` | Versao semantica (major.minor.patch). |
| `"type": "module"` | Usa ES Modules (import/export) em vez de CommonJS. |
| `"main"` | Entry point quando importado como biblioteca. |
| `"bin"` | Mapeia nomes de comandos para arquivos executaveis. |
| `"files"` | Lista branca do que entra no pacote publicado. |
| `"scripts.prepublishOnly"` | Garante que o build roda antes de publicar. |
| `"dependencies"` | Pacotes necessarios em producao (incluidos no bundle). |
| `"devDependencies"` | Pacotes apenas para desenvolvimento. |

### IMPORTANTE: dependencies vs devDependencies

- `commander`, `chalk`, `ora`, `@inquirer/prompts` devem estar em `dependencies` (sao usados em runtime).
- `typescript`, `tsup`, `tsx`, `vitest` devem estar em `devDependencies`.

---

## 4. Scripts Executaveis e Shebang

Todo arquivo listado no campo `bin` DEVE comecar com um **shebang** na primeira linha:

```typescript
#!/usr/bin/env node

import { program } from 'commander';
// ... resto do codigo
```

O shebang `#!/usr/bin/env node` diz ao sistema operacional para executar o arquivo usando o Node.js. Isso funciona em macOS, Linux e Windows (via npm).

### Como funciona na pratica

1. Quando o usuario roda `npm install -g sdd`, o NPM:
   - Le o campo `bin` no `package.json`
   - Cria um script executavel em `/usr/local/bin/sdd` (ou equivalente no Windows)
   - O conteudo do script aponta para o arquivo `./dist/cli.js` do pacote instalado

2. Quando o usuario roda `npx create-sdd`, o NPM:
   - Baixa o pacote temporariamente (se nao estiver instalado)
   - Executa o binario mapeado para `create-sdd`

3. O `tsup` detecta automaticamente o shebang e torna o arquivo de saida executavel (nao precisa de `chmod +x` manual).

### Dica para desenvolvimento local

```bash
# Cria um link simbolico global para testar localmente
npm link

# Agora voce pode rodar:
sdd init

# Para remover o link:
npm unlink -g sdd
```

---

## 5. TypeScript Setup para CLI

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

### tsup.config.ts (Recomendado para 2025)

O `tsup` e um bundler zero-config baseado no esbuild. Ele compila TypeScript, injeta o shebang, e gera declaracoes.

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm'],
  target: 'node20',
  outDir: 'dist',
  clean: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
  // Nao fazer bundle dos templates - eles sao copiados como arquivos estaticos
  external: [],
});
```

**Pontos importantes do tsup:**
- `banner.js`: Injeta o shebang automaticamente no arquivo de saida.
- `clean`: Limpa a pasta `dist` antes de cada build.
- `format: ['esm']`: Gera ES Modules (compativel com `"type": "module"`).
- O tsup detecta o shebang no arquivo fonte e automaticamente torna o output executavel.

### Alternativa: Build com `tsc` direto

Se nao quiser usar tsup:

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsx src/cli.ts"
  }
}
```

O `tsx` permite rodar TypeScript diretamente sem compilar (ideal para desenvolvimento).

---

## 6. Commander.js - Argumentos e Comandos

O Commander.js e a biblioteca mais popular para criar CLIs em Node.js. Documentacao oficial: https://github.com/tj/commander.js

### Setup basico

```typescript
#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('sdd')
  .description('Spec Driven Development CLI')
  .version('0.1.0');

program.parse();
```

### Comandos com acoes

```typescript
program
  .command('init')
  .description('Initialize SDD in the current project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .option('-s, --stack <stack>', 'Force a specific stack (angular, react, node, python)')
  .action(async (options) => {
    if (options.yes) {
      // Instalar com defaults
    } else {
      // Rodar prompts interativos
    }
  });

program
  .command('install')
  .description('Install SDD into the current project')
  .argument('[path]', 'installation path', '.')
  .action(async (path, options) => {
    console.log(`Installing SDD to ${path}`);
  });

program
  .command('list')
  .description('List available templates, agents, and commands')
  .argument('[type]', 'what to list (templates, agents, commands)', 'all')
  .action(async (type) => {
    // Listar recursos disponiveis
  });
```

### Opcoes avancadas

```typescript
import { Command, Option } from 'commander';

program
  .command('init')
  .addOption(
    new Option('-s, --stack <stack>', 'Technology stack')
      .choices(['angular', 'react', 'vue', 'node', 'python'])
  )
  .option('-o, --output <dir>', 'output directory', '.claude')
  .option('--no-agents', 'skip agent templates')
  .option('--no-commands', 'skip command templates')
  .action(async (options) => {
    console.log(options.stack);
    console.log(options.output);
    console.log(options.agents);  // true por padrao, false com --no-agents
  });
```

### Argumentos com validacao

```typescript
import { Command, Argument } from 'commander';

program
  .command('add')
  .addArgument(
    new Argument('<type>', 'resource type')
      .choices(['spec', 'agent', 'command'])
  )
  .argument('<name>', 'resource name')
  .action(async (type, name) => {
    console.log(`Adding ${type}: ${name}`);
  });
```

### Parsing assincrono

```typescript
// Use parseAsync em vez de parse quando handlers sao async
program.parseAsync(process.argv);
// ou simplesmente:
program.parseAsync();
```

### Help customizado

```typescript
program
  .name('sdd')
  .usage('[command] [options]')
  .addHelpText('after', `
Examples:
  $ sdd init                  # Interactive setup
  $ sdd init --stack angular  # Skip prompts, force Angular
  $ sdd init -y               # Use all defaults
  $ sdd list templates        # List available templates
`);
```

---

## 7. Inquirer.js - Prompts Interativos

O Inquirer.js (v9+, pacote `@inquirer/prompts`) e o padrao da industria para prompts interativos em CLIs Node.js.

### Instalacao

```bash
npm install @inquirer/prompts
```

### Input - Entrada de texto

```typescript
import { input } from '@inquirer/prompts';

const projectName = await input({
  message: 'What is your project name?',
  default: 'my-project',
  validate: (value) => {
    if (!value.trim()) return 'Project name is required';
    if (!/^[a-z0-9-]+$/.test(value)) {
      return 'Use only lowercase letters, numbers, and hyphens';
    }
    return true;
  },
});
```

### Select - Selecao unica

```typescript
import { select, Separator } from '@inquirer/prompts';

const stack = await select({
  message: 'Select your technology stack',
  choices: [
    { name: 'Angular', value: 'angular', description: 'Full-featured framework by Google' },
    { name: 'React', value: 'react', description: 'Library by Meta' },
    { name: 'Vue', value: 'vue', description: 'Progressive framework' },
    new Separator('--- Backend ---'),
    { name: 'Node.js', value: 'node', description: 'JavaScript runtime' },
    { name: 'Python', value: 'python', description: 'General-purpose language' },
  ],
});
```

### Checkbox - Selecao multipla

```typescript
import { checkbox } from '@inquirer/prompts';

const features = await checkbox({
  message: 'Which SDD features do you want to install?',
  choices: [
    { value: 'specs', name: 'Specs (API, Business Rules, Data Model)', checked: true },
    { value: 'agents', name: 'AI Agents (Archaeologist, Debugger, etc.)', checked: true },
    { value: 'commands', name: 'Commands (Implementar, Revisar, etc.)', checked: true },
    { value: 'templates', name: 'Document Templates' },
  ],
  required: true,
  validate: (items) => {
    if (items.length === 0) return 'Select at least one feature';
    return true;
  },
});
```

### Confirm - Sim/Nao

```typescript
import { confirm } from '@inquirer/prompts';

const proceed = await confirm({
  message: 'This will create files in .claude/ directory. Continue?',
  default: true,
});
```

### Fluxo completo de setup

```typescript
import { input, select, checkbox, confirm } from '@inquirer/prompts';

interface SetupOptions {
  projectName: string;
  stack: string;
  features: string[];
  outputDir: string;
  proceed: boolean;
}

async function runSetupPrompts(): Promise<SetupOptions> {
  const projectName = await input({
    message: 'Project name',
    default: path.basename(process.cwd()),
  });

  const stack = await select({
    message: 'Select your technology stack',
    choices: [
      { name: 'Angular', value: 'angular' },
      { name: 'React', value: 'react' },
      { name: 'Vue', value: 'vue' },
      { name: 'Node.js', value: 'node' },
      { name: 'Python', value: 'python' },
    ],
  });

  const features = await checkbox({
    message: 'Select SDD features to install',
    choices: [
      { value: 'specs', name: 'Specs', checked: true },
      { value: 'agents', name: 'Agents', checked: true },
      { value: 'commands', name: 'Commands', checked: true },
    ],
  });

  const outputDir = await input({
    message: 'Output directory',
    default: '.claude',
  });

  const proceed = await confirm({
    message: 'Ready to install?',
    default: true,
  });

  return { projectName, stack, features, outputDir, proceed };
}
```

---

## 8. Ora e Chalk - Spinner e Cores

### Chalk - Colorindo o terminal

```typescript
import chalk from 'chalk';

// Cores basicas
console.log(chalk.blue('SDD CLI'));
console.log(chalk.green('Success!'));
console.log(chalk.red('Error!'));
console.log(chalk.yellow('Warning!'));

// Combinando estilos
console.log(chalk.bold.cyan('=== SDD - Spec Driven Development ==='));
console.log(chalk.dim('Created by Lucas Ries'));

// Hex customizado
console.log(chalk.hex('#FF5733')('Custom color'));

// Usando em mensagens
console.log(chalk.green('  [OK]') + ' Templates copied');
console.log(chalk.red('  [FAIL]') + ' Directory not found');
console.log(chalk.yellow('  [WARN]') + ' Stack not detected');
```

### Ora - Spinner de carregamento

```typescript
import ora from 'ora';

// Uso basico
const spinner = ora('Installing SDD...').start();

setTimeout(() => {
  spinner.succeed('SDD installed successfully!');
  // Output: ✔ SDD installed successfully!
}, 2000);

// Multi-step
async function installSDD() {
  const s1 = ora('Detecting project stack...').start();
  await detectStack();
  s1.succeed('Stack detected: Angular');

  const s2 = ora('Copying templates...').start();
  await copyTemplates();
  s2.succeed('Templates copied');

  const s3 = ora('Configuring agents...').start();
  await configureAgents();
  s3.succeed('Agents configured');

  const s4 = ora('Installing commands...').start();
  await installCommands();
  s4.succeed('Commands installed');
}

// Status diferentes
spinner.succeed('Done!');     // ✔ Done!
spinner.fail('Failed!');      // ✖ Failed!
spinner.warn('Warning!');     // ⚠ Warning!
spinner.info('Info');         // ℹ Info

// Com oraPromise
import { oraPromise } from 'ora';

await oraPromise(
  copyTemplates(),
  { text: 'Copying templates...', successText: 'Templates copied!', failText: 'Failed to copy' }
);
```

---

## 9. Gerenciamento de Templates

### O padrao `path.join(__dirname, '../templates/')`

Este e o padrao fundamental para acessar arquivos estaticos empacotados com o NPM.

```typescript
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import fse from 'fs-extra';

// Em ES Modules (type: "module"):
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para templates relativos ao arquivo compilado em dist/
const templatesDir = path.join(__dirname, '../templates');
const agentsDir = path.join(__dirname, '../agents');
const commandsDir = path.join(__dirname, '../commands');
```

**Como funciona na pratica:**
- Quando compilado, `dist/cli.js` esta em `dist/`
- `path.join(__dirname, '../templates')` resolve para `templates/` na raiz do pacote
- Quando publicado, a estrutura fica: `/node_modules/sdd/dist/cli.js` e `/node_modules/sdd/templates/`

### Listando templates disponiveis

```typescript
import { readdir } from 'node:fs/promises';

async function listTemplates(): Promise<string[]> {
  const templatesDir = path.join(__dirname, '../templates');
  const files = await readdir(templatesDir);
  return files.filter(f => f.endsWith('.md'));
}

async function listAgents(): Promise<string[]> {
  const agentsDir = path.join(__dirname, '../agents');
  const files = await readdir(agentsDir);
  return files.filter(f => f.endsWith('.md'));
}
```

### Copiando templates para o projeto do usuario

```typescript
import fse from 'fs-extra';
import path from 'node:path';

async function copyTemplatesToProject(
  targetDir: string,
  features: string[]
): Promise<void> {
  const claudeDir = path.join(targetDir, '.claude');

  // Criar estrutura de diretorios
  await fse.ensureDir(claudeDir);
  await fse.ensureDir(path.join(claudeDir, 'specs'));
  await fse.ensureDir(path.join(claudeDir, 'agents'));
  await fse.ensureDir(path.join(claudeDir, 'commands'));

  // Copiar templates
  const templatesDir = path.join(__dirname, '../templates');
  if (features.includes('specs')) {
    await fse.copy(templatesDir, path.join(claudeDir, 'specs'));
  }

  // Copiar agentes
  if (features.includes('agents')) {
    const agentsDir = path.join(__dirname, '../agents');
    await fse.copy(agentsDir, path.join(claudeDir, 'agents'));
  }

  // Copiar comandos
  if (features.includes('commands')) {
    const commandsDir = path.join(__dirname, '../commands');
    await fse.copy(commandsDir, path.join(claudeDir, 'commands'));
  }
}
```

### Template com interpolacao (substituicao de variaveis)

Se voce precisa injetar valores dinamicos nos templates:

```typescript
async function processTemplate(
  templatePath: string,
  variables: Record<string, string>,
  outputPath: string
): Promise<void> {
  let content = await fse.readFile(templatePath, 'utf-8');

  // Substituir variaveis no formato {{NOME}}
  for (const [key, value] of Object.entries(variables)) {
    content = content.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
  }

  await fse.ensureDir(path.dirname(outputPath));
  await fse.writeFile(outputPath, content, 'utf-8');
}

// Uso:
await processTemplate(
  path.join(templatesDir, 'SPEC_API_CONTRACT.md'),
  {
    PROJECT_NAME: 'meu-app',
    STACK: 'angular',
    DATE: new Date().toISOString().split('T')[0],
  },
  path.join(targetDir, '.claude/specs/SPEC_API_CONTRACT.md')
);
```

---

## 10. Fluxo Completo: Scaffolding

Aqui esta o fluxo completo de `sdd init`:

```typescript
#!/usr/bin/env node

import { Command } from 'commander';
import { input, select, checkbox, confirm } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';
import path from 'node:path';
import fs from 'node:fs/promises';
import fse from 'fs-extra';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('sdd')
  .description('Spec Driven Development CLI')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize SDD in the current project')
  .option('-y, --yes', 'Use defaults')
  .option('-s, --stack <stack>', 'Force stack')
  .option('-o, --output <dir>', 'Output directory', '.claude')
  .action(async (options) => {
    try {
      console.log(chalk.bold.cyan('\n=== SDD - Spec Driven Development ===\n'));

      // 1. Coletar informacoes (ou usar defaults)
      let stack = options.stack;
      let features = ['specs', 'agents', 'commands'];

      if (!options.yes && !options.stack) {
        stack = await select({
          message: 'Select your technology stack',
          choices: [
            { name: 'Angular', value: 'angular' },
            { name: 'React', value: 'react' },
            { name: 'Vue', value: 'vue' },
            { name: 'Node.js', value: 'node' },
            { name: 'Python', value: 'python' },
          ],
        });

        features = await checkbox({
          message: 'Select features to install',
          choices: [
            { value: 'specs', name: 'Specs', checked: true },
            { value: 'agents', name: 'Agents', checked: true },
            { value: 'commands', name: 'Commands', checked: true },
          ],
        });
      }

      // 2. Detectar informacoes do projeto
      const spinner1 = ora('Detecting project info...').start();
      const projectDir = process.cwd();
      const projectName = path.basename(projectDir);
      spinner1.succeed(`Project: ${chalk.bold(projectName)}`);

      // 3. Copiar templates
      const spinner2 = ora('Copying templates...').start();
      const claudeDir = path.join(projectDir, options.output);

      if (features.includes('specs')) {
        await fse.copy(
          path.join(__dirname, '../templates'),
          path.join(claudeDir, 'specs')
        );
      }

      if (features.includes('agents')) {
        await fse.copy(
          path.join(__dirname, '../agents'),
          path.join(claudeDir, 'agents')
        );
      }

      if (features.includes('commands')) {
        await fse.copy(
          path.join(__dirname, '../commands'),
          path.join(claudeDir, 'commands')
        );
      }
      spinner2.succeed('Templates copied');

      // 4. Gerar arquivo de configuracao
      const spinner3 = ora('Generating config...').start();
      const config = {
        version: '0.1.0',
        project: projectName,
        stack,
        features,
        createdAt: new Date().toISOString(),
      };
      await fse.writeJSON(path.join(claudeDir, 'sdd.json'), config, { spaces: 2 });
      spinner3.succeed('Config generated');

      // 5. Mensagem final
      console.log(chalk.green('\n  SDD installed successfully!\n'));
      console.log(chalk.dim(`  Files created in ${options.output}/`));
      console.log(chalk.dim('  Open your project in Claude Code to get started.\n'));

    } catch (error: any) {
      console.error(chalk.red(`\n  Error: ${error.message}\n`));
      process.exit(1);
    }
  });

program.parseAsync();
```

---

## 11. Publicacao no NPM

### .npmignore

Crie um arquivo `.npmignore` na raiz do projeto:

```
# Source code (not needed in published package)
src/
tsconfig.json
tsup.config.ts

# Development files
.git/
.github/
node_modules/
*.test.ts
*.spec.ts

# Build artifacts not needed
*.tsbuildinfo

# IDE
.vscode/
.idea/

# Misc
.DS_Store
Thumbs.db
*.log
```

### Preparando para publicar

```bash
# 1. Verifique se esta logado
npm login

# 2. Verifique o conteudo que sera publicado (dry run)
npm publish --dry-run

# Isso mostra exatamente quais arquivos e o tamanho total do pacote.

# 3. Verifique o nome do pacote esta disponivel
npm view sdd
# Se retornar 404, o nome esta disponivel

# 4. Publique a primeira versao
npm publish --access public
# Use --access public para pacotes com escopo publico (@org/sdd)
```

### Versionamento semantico

```bash
# Patch: bug fixes (0.1.0 -> 0.1.1)
npm version patch

# Minor: novas features (0.1.0 -> 0.2.0)
npm version minor

# Major: breaking changes (0.1.0 -> 1.0.0)
npm version major

# Apos versionar, publique:
npm publish
```

### npx support

Para que `npx create-sdd` funcione, voce precisa de um dos dois:

**Opcao A:** Publicar um pacote separado chamado `create-sdd`:
```json
{
  "name": "create-sdd",
  "bin": {
    "create-sdd": "./dist/cli.js"
  }
}
```

**Opcao B:** Mapear no mesmo pacote `sdd`:
```json
{
  "name": "sdd",
  "bin": {
    "sdd": "./dist/cli.js",
    "create-sdd": "./dist/cli.js"
  }
}
```

O `npx` procura por um binario com o nome do pacote. Se o usuario rodar `npx create-sdd`, o NPM procura um pacote chamado `create-sdd` com um binario `create-sdd`.

**Recomendacao:** Publique DOIS pacotes:
1. `sdd` - o CLI principal (`npm install -g sdd`)
2. `create-sdd` - wrapper que chama `sdd init` (`npx create-sdd meu-projeto`)

### Teste local antes de publicar

```bash
# 1. Build
npm run build

# 2. Link global
npm link

# 3. Teste os comandos
sdd --version
sdd init
sdd init --stack angular -y
sdd list templates

# 4. Simule o pacote publicado
npm pack
# Isso gera um arquivo sdd-0.1.0.tgz
# Instale em outro projeto para testar:
npm install -g ./sdd-0.1.0.tgz

# 5. Quando terminar, remova o link
npm unlink -g sdd
```

---

## 12. Testes

### Estrutura de testes

```
tests/
├── cli.test.ts
├── commands/
│   ├── init.test.ts
│   └── list.test.ts
├── utils/
│   ├── copy.test.ts
│   └── detector.test.ts
└── fixtures/
    └── sample-project/
```

### Testando com Vitest

```typescript
// tests/commands/init.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { execa } from 'execa';
import fse from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliPath = path.join(__dirname, '../../dist/cli.js');

describe('sdd init', () => {
  const tempDir = path.join(__dirname, '../temp-test-dir');

  beforeEach(async () => {
    await fse.ensureDir(tempDir);
  });

  afterEach(async () => {
    await fse.remove(tempDir);
  });

  it('should show version', async () => {
    const { stdout } = await execa('node', [cliPath, '--version']);
    expect(stdout).toMatch(/\d+\.\d+\.\d+/);
  });

  it('should initialize with defaults when using -y flag', async () => {
    const { stdout } = await execa('node', [cliPath, 'init', '-y'], {
      cwd: tempDir,
    });

    expect(stdout).toContain('SDD installed');

    const config = await fse.readJSON(
      path.join(tempDir, '.claude', 'sdd.json')
    );
    expect(config).toHaveProperty('version');
    expect(config).toHaveProperty('stack');
  });

  it('should create expected directory structure', async () => {
    await execa('node', [cliPath, 'init', '-y', '--stack', 'angular'], {
      cwd: tempDir,
    });

    const exists = (p: string) => fse.pathExists(path.join(tempDir, p));

    expect(await exists('.claude/sdd.json')).toBe(true);
    expect(await exists('.claude/specs')).toBe(true);
    expect(await exists('.claude/agents')).toBe(true);
    expect(await exists('.claude/commands')).toBe(true);
  });
});
```

### Testando prompts interativos

Para testar prompts do Inquirer, voce pode usar `stdin` mock ou bypass com flags:

```typescript
// A abordagem mais pratica: sempre oferecer opcao --yes para CI/testing
it('should work with all CLI flags', async () => {
  const { stdout } = await execa('node', [
    cliPath, 'init',
    '-y',
    '--stack', 'react',
    '--output', '.sdd-test',
  ], { cwd: tempDir });

  expect(stdout).toContain('SDD installed');

  const config = await fse.readJSON(
    path.join(tempDir, '.sdd-test', 'sdd.json')
  );
  expect(config.stack).toBe('react');
});
```

---

## 13. Arquitetura de Ferramentas Populares

### create-react-app (CRA)

| Componente | Detalhe |
|---|---|
| Pacote CLI | `create-react-app` |
| Core | `react-scripts` (build, start, test) |
| Templates | `cra-template`, `cra-template-typescript` |
| Fluxo | Parse args -> Valida -> Cria dir -> Instala deps -> Copia template -> git init |

### create-next-app

| Componente | Detalhe |
|---|---|
| Pacote CLI | `create-next-app` (dentro do monorepo next.js) |
| Prompts | TypeScript? ESLint? Tailwind? src/? App Router? |
| Templates | Built-in + exemplos do GitHub |
| Fluxo | Prompts interativos -> Cria dir -> Instala deps -> Copia template -> git init |

### Yeoman

| Componente | Detalhe |
|---|---|
| Core | `yeoman-generator` (classe base) |
| Fluxo | Prompt -> Compose -> Write -> Install -> End |
| Templates | EJS com interpolacao |
| Features | Compositional generators, conflict resolution |

### Padrao arquitetural comum

Todas as ferramentas seguem este fluxo:

```
┌─────────────────────────────────────────┐
│  1. CLI Entry (bin/)                    │
│     Parse args, validate, show help     │
├─────────────────────────────────────────┤
│  2. Interactive Prompts                 │
│     Inquirer / Commander options        │
├─────────────────────────────────────────┤
│  3. Template Engine / Copier            │
│     File copy, template interpolation   │
├─────────────────────────────────────────┤
│  4. Post-Install                        │
│     git init, success message           │
└─────────────────────────────────────────┘
```

### Bibliotecas populares usadas em CLIs

| Proposito | Bibliotecas |
|---|---|
| Argumentos CLI | `commander`, `yargs`, `meow`, `cac` |
| Prompts | `@inquirer/prompts`, `prompts` (terkelg) |
| Cores | `chalk`, `picocolors` |
| Spinner | `ora` |
| File ops | `fs-extra`, `cpy`, `globby` |
| Templating | `ejs`, `handlebars` |
| Subprocessos | `execa`, `cross-spawn` |
| Validacao | `validate-npm-package-name` |
| Box output | `boxen` |

---

## Resumo: Checklist para Publicar o SDD CLI

1. **Criar `src/cli.ts`** com shebang `#!/usr/bin/env node`
2. **Configurar `package.json`** com `bin`, `files`, `type: "module"`
3. **Configurar `tsup.config.ts`** para compilar e injetar shebang
4. **Implementar comandos** com Commander.js
5. **Implementar prompts** com `@inquirer/prompts`
6. **Implementar copia de templates** usando `path.join(__dirname, '../templates')`
7. **Adicionar feedback visual** com ora (spinner) e chalk (cores)
8. **Testar localmente** com `npm link`
9. **Criar `.npmignore`**
10. **Testar publicacao** com `npm publish --dry-run`
11. **Publicar** com `npm publish --access public`
12. **Testar instalacao** com `npm install -g sdd` e `npx create-sdd`

---

## Referencias e Fontes

- [Commander.js - GitHub](https://github.com/tj/commander.js) - Documentacao oficial do Commander.js
- [Inquirer.js - GitHub](https://github.com/SBoudrias/Inquirer.js) - Prompts interativos
- [Chalk - GitHub](https://github.com/chalk/chalk) - Cores no terminal
- [Ora - GitHub](https://github.com/sindresorhus/ora) - Spinners
- [tsup - GitHub](https://github.com/egoist/tsup) - TypeScript bundler
- [NPM Documentation - bin field](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin)
- [NPM Documentation - files field](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files)
- [NPM publish docs](https://docs.npmjs.com/cli/v10/commands/npm-publish)
