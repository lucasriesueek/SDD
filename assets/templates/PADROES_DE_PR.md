---
title: "Padrões de Pull Requests - {{NOME_PROJETO}}"
version: "2.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["pull-request", "workflow", "{{LINGUAGEM}}"]
status: "active"
---

# 🚀 Padrões de Pull Requests - {{NOME_PROJETO}}

> **Diretrizes e templates para Pull Requests** bem estruturados, claros e acionáveis no {{NOME_PROJETO}}.

---

## 📋 Estrutura do PR

### Template Completo

```markdown
# ✨ [Tipo] Título Descritivo

[Resumo de uma linha que descreve o que mudou]

## 📝 Descrição

[Descrição detalhada da mudança, contexto e motivação]

## 🎯 Objetivos

- [ ] [Objetivo 1]
- [ ] [Objetivo 2]
- [ ] [Objetivo 3]

## 🔄 Mudanças

### [Funcionalidade/Área 1]
- **Antes:** [Descrição do comportamento anterior]
- **Depois:** [Descrição do novo comportamento]
- **Motivo:** [Por que a mudança foi feita]

### [Funcionalidade/Área 2]
- **Antes:** [Descrição do comportamento anterior]
- **Depois:** [Descrição do novo comportamento]
- **Motivo:** [Por que a mudança foi feita]

## 📁 Arquivos Alterados

| Status | Arquivo | Mudança | Linhas | Impacto |
|--------|---------|---------|--------|---------|
| ➕ Criado | `path/to/file.ts` | Descrição | +100 | Alto |
| 📝 Alterado | `path/to/file.ts` | Descrição | +50/-20 | Médio |
| ❌ Deletado | `path/to/file.ts` | Descrição | -100 | Baixo |

## 🧪 Como Testar

### Pré-requisitos
- [Pré-requisito 1]
- [Pré-requisito 2]

### Passos
1. [Passo 1 com comandos/URLs]
2. [Passo 2 com comandos/URLs]
3. [Passo 3 com comandos/URLs]

**Resultado Esperado:** [Descrição do resultado esperado]

### Casos de Teste
- ✅ [Caso de teste 1]
- ✅ [Caso de teste 2]
- ✅ [Caso de teste 3]

## 🎬 Screenshots/Vídeos (se aplicável)

[Adicionar screenshots ou vídeos antes/depois]

## ⚠️ Notas de Deploy

- [ ] Migration necessária: [Sim/Não]
- [ ] Envolve dados: [Sim/Não]
- [ ] Rebuild necessário: [Sim/Não]
- [ ] Configuração necessária: [Descrição]
- [ ] Comandos de deploy: [Comandos]

## 📊 Impacto

### Benefícios
- ✅ [Benefício 1]
- ✅ [Benefício 2]

### Riscos
- ⚠️ [Risco 1] - [Mitigação]
- ⚠️ [Risco 2] - [Mitigação]

## 🔗 Relacionado

- Fecha #[issue-number]
- Relacionado a #[issue-number]
- Depende de #[pr-number]

## ✅ Checklist

- [ ] Código segue padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Sem regressões
- [ ] Build passando
- [ ] Linter passando
- [ ] Tests passando

---

**Tamanho do PR:** [Pequeno/Médio/Grande]
**Tempo estimado de review:** [X minutos]
**Priority:** [Baixa/Média/Alta]
```

---

## 🎯 Títulos de PR

### Formato Padrão

```
[emoji] [tipo]: [descrição curta e específica]
```

### Emojis Padrão

| Emoji | Tipo | Quando Usar |
|-------|------|-------------|
| ✨ | feat | Nova funcionalidade |
| 🐛 | fix | Bug fix |
| ♻️ | refactor | Refatoração |
| 🔧 | config | Configuração |
| 📝 | docs | Documentação |
| 🧪 | test | Testes |
| ⚡ | perf | Performance |
| 🎨 | style | Estilo/formatação |
| 🚨 | hotfix | Hotfix crítico |
| ✅ | ci | CI/CD |

### Exemplos de Títulos

```bash
# ✅ Bons títulos
✨ feat(auth): add JWT refresh token flow
🐛 fix(user-list): prevent duplicate API calls on filter
♻️ refactor(api): extract service layer for better testing
⚡ perf(list): implement trackBy for optimization
📝 docs(readme): update setup instructions

# ❌ Ruins títulos
✨ update code
🐛 fix bug
♻️ refactor stuff
⚡ performance improvements
📝 docs
```

---

## 📐 Templates por Tipo de Mudança

### Feature Nova (`feat`)

```markdown
# ✨ feat: Adicionar [Funcionalidade]

## Descrição

Adiciona nova funcionalidade de [descrição] que permite [benefício].

## Contexto

[Explicação do contexto de negócio e por que isso é importante]

## Funcionalidades

- [Funcionalidade 1]
- [Funcionalidade 2]
- [Funcionalidade 3]

{{#if STACK_PRINCIPAL contains "Angular"}}
## Implementação Técnica

- ✅ Standalone component criado
- ✅ Signals utilizados para estado
- ✅ OnPush implementado
- ✅ Testes unitários adicionados
- ✅ Testes de integração adicionados
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
## Implementação Técnica

- ✅ Functional component criado
- ✅ Hooks apropriados utilizados
- ✅ Memoização implementada
- ✅ Testes adicionados
- ✅ TypeScript types definidos
{{/if}}

## Como Testar

1. Acesse [URL/Componente]
2. Execute [ação]
3. Verifique [resultado]

**Resultado Esperado:** [Descrição]

## Breaking Changes

- [ ] Sim - [Descrição]
- [x] Não

## Migration Guide

[Se breaking change, fornecer guide de migração]
```

### Bug Fix (`fix`)

```markdown
# 🐛 fix: Corrigir [Problema]

## Descrição

Corrige [problema] que ocorria quando [condição].

## Problema

**Comportamento Anterior:**
[Descrição do bug]

**Passos para Reproduzir:**
1. [Passo 1]
2. [Passo 2]

**Resultado:** [Comportamento incorreto]

## Solução

**Comportamento Corrigido:**
[Descrição da correção]

**Como foi corrigido:**
[Explicação técnica da solução]

## Root Cause

[Causa raiz do bug]

## Como Testar

1. [Passos para testar]
2. Verifique [resultado]

**Resultado Esperado:** [Bug não ocorre]

## Regressão

- [x] Testes de regressão adicionados
- [ ] Outras áreas possivelmente impactadas: [Lista]

## Screenshots

Antes/Depois se aplicável
```

### Refactor (`refactor`)

```markdown
# ♻️ refactor: Melhorar [Código/Arquitetura]

## Descrição

Refatora [área] para melhorar [benefício].

## Motivação

**Problemas Atuais:**
- [Problema 1]
- [Problema 2]

**Benefícios:**
- [Benefício 1]
- [Benefício 2]

## Mudanças

### Arquitetura
- [Mudança 1]
- [Mudança 2]

### Código
- [Refatoração 1]
- [Refatoração 2]

## Compatibilidade

- [x] Comportamento mantido
- [x] Testes existentes passam
- [x] Sem breaking changes

## Como Testar

Mesmos testes existentes devem passar:
```bash
npm test
```

## Performance

- [x] Performance mantida
- [ ] Performance melhorada: [Descrição]
```

### Performance (`perf`)

```markdown
# ⚡ perf: Otimizar [Componente/Feature]

## Descrição

Otimiza [área] para melhorar performance.

## Métricas

### Antes
- Load time: Xms
- Render time: Xms
- Bundle size: XKB

### Depois
- Load time: Yms (X% melhoria)
- Render time: Yms (X% melhoria)
- Bundle size: YKB (X% redução)

## Otimizações

- [Otimização 1] - [Impacto]
- [Otimização 2] - [Impacto]

## Como Testar

1. Abra DevTools Performance
2. Execute [ação]
3. Verifique métricas

**Resultado Esperado:** [Métricas esperadas]

## Benchmarks

```bash
# Comando para benchmark
npm run benchmark
```

## Regressão

- [x] Funcionalidade mantida
- [x] Sem bugs introduzidos
```

### Documentação (`docs`)

```markdown
# 📝 docs: Atualizar [Documento/Seção]

## Descrição

Atualiza [documento] com [informação].

## Mudanças

- [Mudança 1]
- [Mudança 2]
- [Mudança 3]

## Documentos Atualizados

- [x] [Documento 1]
- [x] [Documento 2]

## Review Checklist

- [ ] Informação precisa
- [ ] Gramática e ortografia
- [ ] Links funcionando
- [ ] Formatação correta
- [ ] Screenshots atualizados (se aplicável)
```

---

## ✅ Checklists por Tipo

### Feature Nova

```markdown
## Implementação
- [ ] Funcionalidade implementada conforme requisitos
- [ ] Padrões arquiteturais seguidos
- [ ] Type safety mantida
- [ ] Error handling implementado

## Testes
- [ ] Testes unitários adicionados
- [ ] Testes de integração adicionados
- [ ] Cobertura > 80%
- [ ] Edge cases cobertos

## Documentação
- [ ] README atualizado (se necessário)
- [ ] API docs atualizados (se necessário)
- [ ] JSDoc/TSDoc adicionados
- [ ] Changelog atualizado

## Quality
- [ ] Linter passando
- [ ] Build passando
- [ ] Sem console.logs
- [ ] Sem TODOs/FIXMEs não planejados
```

### Bug Fix

```markdown
## Correção
- [ ] Bug corrigido
- [ ] Causa raiz identificada
- [ ] Teste adicionado para prevenir regressão

## Validação
- [ ] Bug reproduzido antes do fix
- [ ] Bug não ocorre após o fix
- [ ] Side effects avaliados
- [ ] Outros cenários testados

## Documentação
- [ ] Issue referenciada
- [ ] Changelog atualizado
- [ ] Notas de release adicionadas
```

### Refactor

```markdown
## Qualidade
- [ ] Código mais limpo
- [ ] Complexidade reduzida
- [ ] Testabilidade melhorada
- [ ] Padrões seguidos

## Validação
- [ ] Comportamento mantido
- [ ] Todos testes passam
- [ ] Sem regressões
- [ ] Performance mantida ou melhorada

## Documentação
- [ ] Comentários atualizados
- [ ] README atualizado se necessário
```

---

## 🎨 Exemplos de PRs Reais

### Exemplo 1: Feature Angular

```markdown
# ✨ feat(user-list): add pagination and filtering

## Descrição

Adiciona paginação e filtros avançados na lista de usuários para melhorar a usabilidade ao lidar com grandes volumes de dados.

## Contexto

A lista atual carrega todos os usuários de uma vez, causando problemas de performance quando há mais de 100 registros. Esta implementação resolve isso com paginação server-side.

## Mudanças

### Frontend
- ✅ Standalone `UserListComponent` com Signals
- ✅ `MatPaginator` integrado
- ✅ Filtros por nome, email e status
- ✅ Loading states com skeleton
- ✅ Error handling com user-friendly messages

### Backend
- ✅ Endpoint `/api/users` suporta paginação
- ✅ Query params: `page`, `pageSize`, `search`, `status`
- ✅ Response inclui `total`, `page`, `pageSize`

## Arquivos Alterados

| Status | Arquivo | Linhas | Impacto |
|--------|---------|--------|---------|
| ➕ Criado | `user-list.component.ts` | +120 | Alto |
| ➕ Criado | `user-list.component.spec.ts` | +85 | Médio |
| ➕ Criado | `user-list.component.scss` | +45 | Baixo |
| ➕ Criado | `user.service.ts` | +60 | Alto |
| 📝 Alterado | `api.routes.ts` | +5/-2 | Médio |
| 📝 Alterado | `user.controller.ts` | +35/-10 | Alto |

## Como Testar

### Pré-requisitos
- Ter pelo menos 50 usuários cadastrados

### Passos
1. Acesse `/users`
2. Navegue entre as páginas
3. Filtre por nome "admin"
4. Filtre por status "active"
5. Verifique se a URL muda com os filtros

**Resultado Esperado:**
- Paginação funciona corretamente
- Filtros aplicam instantaneamente
- Loading states aparecem durante requisições
- URL reflete filtros aplicados

## API Changes

### Novo Endpoint

```
GET /api/users?page=1&pageSize=20&search=admin&status=active
```

### Response

```json
{
  "data": [...],
  "total": 150,
  "page": 1,
  "pageSize": 20
}
```

## Performance

**Antes:**
- Load time: ~2000ms (100 usuários)
- Memory: ~50MB

**Depois:**
- Load time: ~300ms (20 usuários)
- Memory: ~15MB

**Melhoria:** 85% mais rápido, 70% menos memória

## Screenshots

[Listar caminhos para screenshots ou descrever]

## ✅ Checklist

- [x] Código segue padrões do projeto
- [x] Componente é standalone
- [x] Signals utilizados
- [x] OnPush implementado
- [x] Testes unitários adicionados
- [x] Testes de integração adicionados
- [x] Linter passando
- [x] Build passando

---

**Tamanho:** Médio
**Tempo de review:** ~15 min
**Priority:** Alta
```

---

## 🔄 Workflow de Review

### Para o Autor

1. **Antes de abrir PR:**
   - [ ] Revisar próprias mudanças
   - [ ] Rodar linter e formatter
   - [ ] Rodar todos os testes
   - [ ] Atualizar documentação

2. **Ao abrir PR:**
   - [ ] Usar template apropriado
   - [ ] Título claro e descritivo
   - [ ] Descrição completa
   - [ ] Linkar issues relacionadas
   - [ ] Marcar reviewers apropriados

3. **Durante review:**
   - [ ] Responder feedbacks prontamente
   - [ ] Fazer adjustes solicitados
   - [ ] Push commits no mesmo PR

### Para o Reviewer

1. **Leitura inicial:**
   - Ler descrição completamente
   - Entender contexto e objetivo
   - Verificar checklist

2. **Review de código:**
   - Verificar conformidade com padrões
   - Procurar bugs e problemas
   - Sugerir melhorias
   - Verificar testes

3. **Feedback:**
   - Ser específico e construtivo
   - Explicar o "porquê"
   - Oferecer sugestões
   - Marcar comentários como resolvidos

---

## 📌 Tamanhos de PR

| Tamanho | Linhas | Review Time | Ideal |
|---------|--------|-------------|-------|
| **Pequeno** | < 100 | 5-10 min | ✅ Ideal |
| **Médio** | 100-400 | 15-30 min | ✅ Aceitável |
| **Grande** | 400-800 | 30-60 min | ⚠️ Considerar dividir |
| **Huge** | > 800 | > 60 min | ❌ Dividir obrigatoriamente |

### Quando Dividir

Divida o PR se:
- Diferentes funcionalidades
- Diferentes áreas do sistema
- Mais de 500 linhas
- Mais de 1 hora de review
- Múltiplas concerns

---

## 🚨 Anti-Patterns

| ❌ Anti-Pattern | ✅ Melhor Abordagem |
|-----------------|---------------------|
| "Update files" | "feat: add user authentication" |
| "Fix stuff" | "fix: resolve null pointer in login" |
| PRs gigantes (>500 linhas) | Dividir em PRs menores |
| Sem descrição | Sempre adicionar contexto |
| Sem testes | Sempre adicionar testes |
| Force push sem aviso | Comunicar antes |
| Ignorar feedback | Responder/discutir |

---

## 📚 Referências

- [Padrões de Código](./PADROES_ARQUITETURA.md)
- [Revisão de Código](./REVISAO_CODIGO.md)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 2.0.0
**Maintainer:** Equipe {{NOME_PROJETO}}
