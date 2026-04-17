---
title: "Padrões Arquiteturais - {{NOME_PROJETO}}"
version: "3.0.0"
status: "investigation-pending"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["architecture", "patterns", "{{LINGUAGEM}}"]
stack: "{{STACK_PRINCIPAL}}"
---

# 🔍 Padrões Arquiteturais - Modo de Investigação

> **⚠️ ATENÇÃO:** Este arquivo é um TEMPLATE de investigação.
>
> Para concluir a configuração do SDD, execute o comando:
> ```
> /iniciar-projeto
> ```
>
> A IA investigará seu projeto e gerará a versão final específica.

---

## 📋 Status da Investigação

- [ ] Stack e dependências identificadas
- [ ] Estrutura de diretórios mapeada
- [ ] Convenções de nomenclatura catalogadas
- [ ] Padrões arquiteturais descobertos
- [ ] Padrões de código identificados
- [ ] Preferências específicas documentadas
- [ ] Anti-patterns do projeto mapeados

---

## 🚀 Instruções para a IA

Quando o usuário executar `/iniciar-projeto`, siga este protocolo:

1. **Anuncie o início** da investigação ao usuário
2. **Detecte a stack** se ainda não foi detectada (Angular, React, Node, Python, Laravel, etc.)
3. **Execute as investigações** específicas da stack (seções abaixo)
4. **Para cada investigação**, apresente descobertas parciais ao usuário
5. **Reescreva este arquivo** removendo as instruções e mantendo apenas as descobertas
6. **Altere o status** de `investigation-pending` para `active`

### 🔧 Ferramentas a Usar

- **Grep**: Para encontrar padrões no código (ex: `export class`, `interface`, `function`)
- **Glob**: Para mapear estrutura de arquivos (ex: `**/*.component.ts`, `**/*.service.ts`)
- **Read**: Para ler arquivos específicos e analisar padrões de código

### ⚠️ Importante

- **SEMPRE** pergunte ao usuário sobre escolhas arquiteturais incomuns
- **NUNCA** assuma padrões - descubra através do código
- **APRESENTE** descobertas a cada 20% de progresso
- **DOCUMENTE** exemplos reais do código do projeto

---

## 🔬 Investigações Específicas

### Stack Detectada: {{STACK_PRINCIPAL}}

{{#if STACK_PRINCIPAL contains "Angular"}}
#### Investigações Angular

1. **Estrutura de Componentes**
   - Use Glob para encontrar todos os arquivos `*.component.ts`
   - Analise 5 componentes aleatórios para identificar:
     - Usam `standalone: true` ou `@NgModule`?
     - Qual `changeDetection` usam? (`OnPush` ou `Default`)
     - Como fazem injeção de dependências? (`constructor` ou `inject()`)
     - Como chamam serviços? (RxJS `subscribe` ou Signals)

2. **Convenções de Nomenclatura**
   - Use Grep para encontrar padrões de nomenclatura:
     - `export class \w+Component` → Como nomeiam componentes?
     - `export class \w+Service` → Como nomeiam services?
     - `export interface \w+` → Como nomeiam interfaces?
     - `export const \w+` → Como nomeiam constantes?

3. **Padrões de Reactive Forms**
   - Use Grep para encontrar `FormGroup`, `FormControl`, `FormBuilder`
   - Descubra: usam `formBuilder.group` ou `new FormGroup`?
   - Como fazem validação customizada?

4. **Padrões de HTTP**
   - Use Grep para encontrar `HttpClient`, `http.get`, `http.post`
   - Como estruturam as chamadas de API?
   - Usam interceptors? Para quê?

5. **Organização de Módulos**
   - Analise a estrutura `src/app/`
   - Existe `core/`, `features/`, `shared/`?
   - Como estão organizados os lazy-loaded modules?
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
#### Investigações React

1. **Estrutura de Componentes**
   - Use Glob para encontrar todos os arquivos `*.tsx`, `*.jsx`
   - Analise 5 componentes aleatórios para identificar:
     - Function components vs Class components?
     - Usam hooks? Quais?
     - Como fazem state management? (`useState`, `useContext`, Redux, Zustand?)

2. **Convenções de Nomenclatura**
   - Use Grep para encontrar padrões:
     - `export function \w+` → Como nomeiam componentes?
     - `export const use\w+` → Como nomeiam hooks?
     - `interface \w+` → Como nomeiam interfaces?

3. **Padrões de Fetch de Dados**
   - Use Grep para encontrar `fetch`, `axios`, `useQuery`
   - Como fazem chamadas de API?
   - Usam algum data fetching library?

4. **Roteamento**
   - Use Grep para encontrar `useNavigate`, `Link`, `Router`
   - Qual biblioteca de routing usam? (React Router, Next.js, etc.)

5. **State Management**
   - Procure por `createContext`, `Provider`, `useStore`
   - Como gerenciam estado global?
{{/if}}

{{#if STACK_PRINCIPAL contains "Laravel"}}
#### Investigações Laravel + Inertia

1. **Estrutura de Controllers**
   - Use Glob para encontrar `app/Http/Controllers/**/*.php`
   - Como estão organizados? (por feature, por tipo?)
   - Usam Inertia? Retornam `Inertia::render()`?

2. **Convenções de Nomenclatura**
   - Como nomeiam controllers? (`UserController`, `UserController.php`)
   - Como nomeiam models?
   - Como nomeiam migrations?

3. **Organização de Rotas**
   - Analise `routes/web.php`, `routes/api.php`
   - Usam arquivos de rotas separados por feature?
   - Como agrupam rotas?

4. **Componentes React**
   - Use Glob em `resources/js/**/*.tsx`
   - Como organizam componentes? (por página, por tipo?)
   - Usam algum component library?

5. **Padrões de Inertia**
   - Como passam dados do Laravel para React?
   - Usam `Inertia::share()` para dados globais?
{{/if}}

{{#if STACK_PRINCIPAL contains "Node"}}
#### Investigações Node.js

1. **Estrutura do Projeto**
   - Analise a organização de `src/`
   - Existe separação por camadas? (controllers, services, repositories)

2. **Framework Web**
   - Qual framework usam? (Express, Fastify, NestJS)
   - Como definem rotas?

3. **Padrões de Injeção de Dependências**
   - Usam algum DI container?
   - Como instanciam serviços?
{{/if}}

{{#if STACK_PRINCIPAL contains "Python"}}
#### Investigações Python

1. **Framework Web**
   - Qual framework usam? (FastAPI, Django, Flask)
   - Como estruturam o projeto?

2. **Organização de Código**
   - Como organizam routes, services, models?
   - Usam blueprints (Flask) ou apps (Django)?
{{/if}}

---

## 📝 MODELO DO DOCUMENTO FINAL

Após concluir todas as investigações, reescreva este arquivo seguindo esta estrutura:

# 🏗 Padrões Arquiteturais - {{NOME_PROJETO}}

> **Diretrizes arquiteturais e padrões de código** descobertos através de análise do codebase.

---

## 📋 Stack Tecnológica

| Componente | Versão | Propósito |
|------------|--------|-----------|
| **Framework** | [DESCOBERTO NA INVESTIGAÇÃO] | Framework principal |
| **Linguagem** | {{LINGUAGEM}} | Linguagem de desenvolvimento |
| **Build Tool** | [DESCOBERTO] | Build e bundling |
| **Test Runner** | [DESCOBERTO] | Testes automatizados |
| **Linter** | [DESCOBERTO] | Qualidade de código |
| **Package Manager** | [DESCOBERTO] | Gerenciamento de dependências |

### Dependências Críticas

[LISTAR DEPENDÊNCIAS PRINCIPAIS DO PROJETO DESCOBERTAS NA INVESTIGAÇÃO]

---

## 📁 Estrutura de Diretórios

[DESCREVER A ESTRUTURA REAL DO PROJETO DESCOBERTA NA INVESTIGAÇÃO]

---

## 🎨 Padrões de Código Descobertos

### Convenções de Nomenclatura

[LISTAR AS CONVENÇÕES REAIS DO PROJETO COM EXEMPLOS]

### Padrões Arquiteturais

[DESCREVER OS PADRÕES ARQUITETURAIS REAIS DO PROJETO]

### Preferências Específicas do Projeto

[LISTAR AS PREFERÊNCIAS ESPECÍFICAS DESCOBERTAS]

---

## 🚫 Anti-Patterns do Projeto

[LISTAR OS ANTI-PATTERNS ESPECÍFICOS QUE DEVEM SER EVITADOS]

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 3.0.0
**Status:** active
