# 🚀 Como Usar o SDD

Guia completo do Sistema Spec Driven Development para maximizar sua produtividade com Claude Code.

---

## 📖 Índice

1. [Introdução: O que é SDD](#1-introdução-o-que-é-sdd)
2. [Visão Geral da Estrutura](#2-visão-geral-da-estrutura)
3. [Commands - Seus Superpoderes Diretos](#3-commands---seus-superpoderes-diretos)
4. [Agents - Automação da IA](#4-agents---automação-da-ia)
5. [💡 Dicas de Uso](#5--dicas-de-uso)
6. [Diferenças Chave](#6-diferenças-chave)
7. [Fluxos de Trabalho Práticos](#7-fluxos-de-trabalho-práticos)
8. [Exemplos Práticos Detalhados](#8-exemplos-práticos-detalhados)
9. [Troubleshooting Ampliado](#9-troubleshooting-ampliado)

---

## 1. Introdução: O que é SDD

### O que é Spec Driven Development?

**Spec Driven Development (SDD)** é uma abordagem de desenvolvimento onde você **define specifications (specs)** primeiro, e depois usa a IA para **implementar seguindo essas specs**.

Diferente de abordagens tradicionais onde você dá instruções vagas à IA ("crie um componente de usuário"), com SDD você:
1. **Define padrões claros** de arquitetura
2. **Especifica regras de negócio** de forma estruturada
3. **Documenta contratos** de API e modelos de dados
4. **Usa commands/skills** para tarefas específicas

### Por que usar SDD no seu projeto?

| Benefício | Como Ajuda |
|-----------|------------|
| **Consistência** | Todo código segue os mesmos padrões |
| **Velocidade** | Commands executam tarefas complexas em segundos |
| **Qualidade** | Revisões automatizadas detectam problemas |
| **Documentação** | Sempre atualizada com o código |
| **Onboarding** | Novos devs entendem o projeto rapidamente |

### Benefícios Imediatos

Após instalar SDD, você terá:

- ✅ **7 commands** para tarefas comuns (`/arquitetura`, `/implementar`, `/revisar`, etc.)
- ✅ **5 agentes especializados** que a IA pode usar automaticamente
- ✅ **8 documentos de contexto** personalizados para sua stack
- ✅ **Padrões consistentes** em todo o projeto

---

## 2. Visão Geral da Estrutura

### Diagrama da Estrutura

```
SDD/ (Pacote de distribuição)
├── INSTALAR_SDD.md       # Script de instalação automática
├── COMO_USAR.md          # ← Você está aqui! Guia completo
├── VERSION.md            # Controle de versão
├── settings.json         # Configurações do Claude Code
│
├── commands/             # Commands/Skills (chamados via /nome)
│   ├── arquitetura.md
│   ├── card.md
│   ├── debuggar.md
│   ├── doc.md
│   ├── implementar.md
│   ├── pr.md
│   └── revisar.md
│
├── agents/               # Agentes especializados (auto-selecionados)
│   ├── code-archaeologist.md
│   ├── debugger.md
│   ├── documentation-writer.md
│   ├── frontend-specialist.md
│   └── mobile-developer.md
│
├── templates/            # Templates de documentos
│   ├── PADROES_ARQUITETURA.md
│   ├── REVISAO_CODIGO.md
│   ├── CRIAR_CARD_TASK.md
│   ├── PADROES_DE_PR.md
│   ├── SPEC_BUSINESS_RULES.md
│   ├── SPEC_API_CONTRACT.md
│   ├── SPEC_DATA_MODEL.md
│   └── SPEC_WORKFLOW.md
│
└── docs/                 # Documentação adicional
    ├── ESTRUTURA.md
    └── PERSONALIZACAO.md
```

### Resumo Rápido

| Pasta | Propósito | Quem decide usar |
|-------|-----------|-----------------|
| **commands/** | Skills que você chama via `/nome` | **Você** 💪 |
| **agents/** | Especialistas que a IA usa automaticamente | **Sistema Claude** 🤖 |
| **templates/** | Modelos de documentos para gerar no projeto | Script de instalação |
| **docs/** | Documentação sobre o próprio SDD | Você (lê diretamente) |

---

## 3. Commands - Seus Superpoderes Diretos

> **💡 Conceito chave:** Commands são como atalhos mágicos - você digita `/nome` e acontece!
> Diferente dos agents (que a IA decide quando usar), Commands estão sob seu **controle total**.

### 🎯 Como Funciona

```
Você digita:     /arquitetura
                      ↓
Claude responde: [Padrões do projeto, exemplos, boas práticas]
```

**VOCÊ manda aqui!** Digite `/nome` e acontece. Diferente dos agents (que a IA decide), Commands estão sob seu controle total.

---


## **SEUS COMMANDS**


### 1. /arquitetura - O Arquiteto do Projeto 🏗️

**Para quê serve?**
Quando você precisa saber: "Como isso funciona no meu projeto?"

**Quando usar?**
- Criar novo componente/módulo
- Implementar nova feature
- Verificar padrões existentes
- Dúvidas sobre convenções

**Exemplo prático:**
```
/arquitetura
Como devo criar um formulário seguindo os padrões do projeto?
```

**Você recebe:**
- Padrões específicos da sua stack
- Exemplos de código prontos
- Convenções de nomenclatura
- Boas práticas do projeto

---

### 2. /implementar - O Construtor 🔨

**Para quê serve?**
Clone uma feature existente para criar uma nova - garantia de consistência!

**Quando usar?**
- Implementar feature baseada em outra
- Replicar padrões do projeto
- Manter consistência arquitetural

**Exemplo prático:**
```
/implementar
Crie "gestão de produtos" seguindo o padrão de "gestão de clientes"
```

**Você recebe:**
1. Análise da feature de referência
2. Planejamento da nova feature
3. Implementação seguindo padrões
4. Validação e testes

---

### 3. /revisar - O Guardião da Qualidade 🔍

**Para quê serve?**
Revisão automática de código antes de commit - pegue bugs antes que cheguem ao PR!

**Quando usar?**
- Antes de commitar mudanças
- Verificar conformidade com padrões
- Detectar problemas de segurança
- Validar boas práticas

**Exemplo prático:**
```
/revisar
Por favor, revise minhas mudanças staged.
```

**Você recebe:**
- Análise de conformidade com padrões
- Detecção de problemas de segurança
- Sugestões de melhorias
- Validação de boas práticas

**Dica de ouro:** Use antes de TODO commit. Garante qualidade do código.

---

### 4. /card - O Organizador do Backlog 📋

**Para quê serve?**
Cria User Stories completas com Acceptance Criteria prontos para o JIRA/Linear.

**Quando usar?**
- Criar card para backlog
- Documentar trabalho recém-finalizado
- Definir Acceptance Criteria
- Estimar complexidade

**Exemplo prático:**
```
/card
Crie um card para essa funcionalidade de filtro de usuários que acabei de implementar.
```

**Você recebe:**
- User Story formatada
- Acceptance Criteria
- Definition of Done
- Estimativa de complexidade

---

### 5. /pr - O Comunicador 🚀

**Para quê serve?**
Gera descrições de PR profissionais seguindo os padrões do time.

**Quando usar?**
- Criou Pull Request e precisa de descrição
- Quer seguir padrões de PR do time
- Precisa documentar mudanças claramente

**Exemplo prático:**
```
/pr
Gere descrição de PR para minhas mudanças atuais.
```

**Você recebe:**
- Título formatado com emoji
- Descrição estruturada
- Lista de mudanças
- Checklist de revisão

---

### 6. /doc - O Documentador 📝

**Para quê serve?**
Documentação automática de código, APIs e componentes.

**Quando usar?**
- Documentar código, API ou componente
- Gerar README ou documentação técnica
- Atualizar documentação existente

**Exemplo prático:**
```
/doc
Documente este componente de UserService.
```

**Você recebe:**
- Documentação clara e concisa
- Exemplos de uso
- Parâmetros e retornos documentados
- Formato apropriado (JSDoc, TSDoc, etc.)

**Dica:** Documente conforme desenvolve. Não deixe para depois.

---

### 7. /debuggar - O Detetive 🐛

**Para quê serve?**
Debugging sistemático de bugs complexos - chegue na root cause mais rápido.

**Quando usar?**
- Bug complexo que precisa investigação
- Quer debugging sistemático (não tentativa e erro)
- Precisa entender root cause de um problema

**Exemplo prático:**
```
/debuggar
Ajude a debugar esse bug onde usuários não conseguem fazer login após registro.
```

**Você recebe:**
1. Reprodução do bug
2. Isolamento do problema
3. Identificação da root cause
4. Fix validado

**Dica:** Forneça o máximo de informações: passos para reproduzir, mensagens de erro, contexto.

---

## 4. Agents - Automação da IA

> **🤖 Conceito chave:** Agents são especialistas que a IA usa automaticamente quando acha necessário.
> Você **não precisa chamá-los diretamente** - o Claude decide quando usar.

### 🎯 Como Funciona

```
Sua tarefa:     "Analise esse código legado complexo"
                      ↓
Claude detecta:  "Isso parece código antigo"
                      ↓
Claude ativa:    code-archaeologist agent
                      ↓
Resultado:       Análise especializada em refatoração
```

---

## **SEUS AGENTS**

### code-archaeologist - O Explorador do Passado

**Para quê serve?**
Análise de código legado, refatoração, modernização de padrões obsoletos.

**Quando a IA usa:**
Quando detecta código antigo, padrões obsoletos, ou precisa entender arquitetura existente.

**Exemplo de prompt:**
```
"Analise esse código legado e sugira refatorações seguindo padrões modernos"
```

---

### debugger - O Caçador de Bugs

**Para quê serve?**
Debugging sistemático de bugs complexos e problemas de performance.

**Quando a IA usa:**
Quando há bugs, crashes, problemas de performance.

**Exemplo de prompt:**
```
"A aplicação está crashing em produção. Ajude a debugar."
```

**Também disponível como:** `/debuggar` (command)

---

### documentation-writer - O Escritor Técnico

**Para quê serve?**
Documentação técnica (README, API docs, changelogs).

**Quando a IA usa:**
Quando você pede explicitamente para documentar algo.

**Exemplo de prompt:**
```
"Documente essa API"
```

**Também disponível como:** `/doc` (command)

---

### frontend-specialist - O Mestre do Frontend

**Para quê serve?**
Frontend moderno (Angular 17+, React, Vue, etc.).

**Quando a IA usa:**
Quando trabalha com componentes, state management, UI.

**Exemplo de prompt:**
```
"Crie um componente de lista usando Signals e OnPush"
```

---

### mobile-developer - O Construtor Mobile

**Para quê serve?**
React Native e Flutter.

**Quando a IA usa:**
Quando detecta projeto mobile.

**Exemplo de prompt:**
```
"Implemente navegação React Native"
```

---

## 5. 💡 Dicas de Uso

> **🎯 Objetivo desta seção:** Maximizar sua produtividade com SDD através de práticas comprovadas, workflows eficientes e exemplos reais do dia a dia.

---

### 🚀 Para Começar Agora

**Se é sua primeira vez usando SDD, comece aqui:**

```
Passo 1: Entenda os padrões do projeto
/arquitetura
→ "Quais são os padrões principais que devo seguir?"

Passo 2: Implemente sua primeira feature
/implementar
→ "Crie [sua feature] seguindo o padrão de [feature existente]"

Passo 3: Revise antes de commitar
/revisar
→ "Revise minhas mudanças staged"
```

**Esses 3 commands cobrem 80% do seu trabalho diário.**

---

### 📋 Workflows Recomendados

#### Workflow de Nova Feature

Use quando precisa criar algo novo do zero.

```
1. /arquitetura
   → "Como devo estruturar um módulo de [feature]?"

2. /implementar
   → "Implemente [feature] seguindo o padrão de [feature similar]"

3. /revisar
   → "Revise minhas mudanças"

4. /card
   → "Crie um card documentando essa feature"

5. /pr
   → "Gere descrição de PR para essas mudanças"
```

**Tempo estimado:** 15-30 minutos (dependendo da complexidade)

---

#### Workflow de Bug Fix

Use quando precisa resolver um bug.

```
1. /debuggar
   → "Bug: [descrição do problema com passos para reproduzir]"

2. /arquitetura
   → "Qual a forma correta de lidar com [X] seguindo os padrões?"

3. /revisar
   → "Revise o fix que acabei de aplicar"

4. /card
   → "Documente o bug e a solução aplicada"
```

**Dica:** Quanto mais detalhes você der no `/debuggar`, mais rápido será o diagnóstico.

---

#### Workflow de Code Review

Use quando precisa revisar código (seu ou de outros).

```
1. /revisar
   → "Revise todas as mudanças staged"
   → OU: "Revise o arquivo src/app/features/xyz/"

2. /arquitetura
   → "Essa implementação segue os padrões do projeto?"

3. /pr
   → "Gere feedback estruturado para o PR #[número]"
```

**O que verificar:**
- ✅ Conformidade com padrões
- ✅ Problemas de segurança
- ✅ Performance
- ✅ Testes cobrem o cenário
- ✅ Documentação atualizada

---

#### Workflow de Documentação

Use quando precisa documentar código ou features.

```
1. /doc
   → "Documente o componente/service/módulo [nome]"

2. /arquitetura
   → "Essa documentação está alinhada com os padrões?"

3. /revisar
   → "Revise a documentação criada"
```

**Dica:** Documente conforme desenvolve. Não deixe acumular!

---

### 💬 Prompts por Cenário

#### Criar Novo Componente

```
❌ Ruim: "Crie um componente de formulário"

✅ Bom: /implementar
Crie um componente de formulário de contato seguindo o mesmo padrão
do componente de formulário de registro (RegistrationFormComponent).
Use:
- Reactive Forms com validação
- Signals para estado
- OnPush change detection
- Classes BEM para styling
```

---

#### Refatorar Código Legado

```
❌ Ruim: "Refatore esse código"

✅ Bom: /arquitetura
Analise esse código legado e me diga:
1. Quais padrões modernos devo aplicar?
2. Qual a melhor estratégia de refatoração?
3. Quais os riscos dessa mudança?

[ cole o código legado aqui ]
```

---

#### Debugar Bug Complexo

```
❌ Ruim: "Tem um bug no carrinho"

✅ Bom: /debuggar
Bug no carrinho de compras:
**Sintoma:** Ao adicionar item que já existe, a quantidade não atualiza na UI
**Passos para reproduzir:**
1. Adicione "Camiseta P" ao carrinho
2. Adicione "Camiseta P" novamente
3. Observe: quantidade na UI permanece "1"
4. Refresh: quantidade aparece "2" corretamente
**Contexto:** Angular 17, Signals, OnPush
**Logs:** [cole logs relevantes]
```

---

#### Gerar Documentação

```
❌ Ruim: "Documente isso"

✅ Bom: /doc
Documente o UserService incluindo:
1. Descrição do propósito
2. Parâmetros e retornos (com tipos)
3. Exemplos de uso
4. Dependências
5. Considerações de performance

Formato: JSDoc compatível com TypeScript strict mode
```

---

#### Criar PR Completo

```
❌ Ruim: "Crie um PR"

✅ Bom: /pr
Gere descrição de PR para essa feature de gestão de produtos.
Inclua:
- Título com emoji e convenção do time
- Summary com o que foi feito
- Checklist de revisão (performance, segurança, testes)
- Breaking changes (se houver)
- Screenshots da UI (se aplicável)
```

---

### ✨ Boas Práticas

#### Como Combinar Commands

```
🎯 Combo para Nova Feature:
/arquitetura → /implementar → /revisar → /pr

🎯 Combo para Bug:
/debuggar → /arquitetura → /revisar → /card

🎯 Combo para Documentação:
/doc → /revisar

🎯 Combo para Code Review:
/revisar → /arquitetura → /pr
```

#### Quando Usar Múltiplos Commands em Sequência

**Use sequencialmente quando:**
- A saída de um command alimenta o próximo
- Você precisa validar em múltiplas dimensões
- Quer garantir qualidade completa

**Exemplo:**
```
1. /implementar → cria o código
2. /revisar → valida qualidade
3. /doc → gera documentação
4. /pr → prepara para merge
```

#### Como Iterar com a IA

```
🔄 Iteração Produtiva:

1. Peça o que você quer
   /implementar "Crie X"

2. Revise o resultado
   "Gostei, mas preciso adicionar validação de email"

3. Seja específico no ajuste
   "Adicione validação: email deve conter @ e domínio válido"

4. Valide o ajuste
   /revisar "Revise as mudanças de validação"

5. Documente
   /doc "Documente a validação adicionada"
```

#### Como Fornecer Contexto Adequado

```
❌ Pouco contexto:
"O formulário não funciona"

✅ Contexto adequado:
"O formulário de registro (RegistrationForm) não valida email corretamente.
Ao inserir 'user@' (sem domínio), o formulário submete mesmo com
validators.required e validators.email.
Stack: Angular 17.2, Reactive Forms, TypeScript 5.2"
```

**O que incluir no contexto:**
- Nome do arquivo/componente
- Stack e versões
- Comportamento esperado vs atual
- Mensagens de erro
- Passos para reproduzir (se bug)

---

### ⚠️ Erros Comuns

| Erro | Por que é ruim | Como fazer certo |
|------|----------------|------------------|
| **Prompts muito vagos** | IA não sabe exatamente o que você quer | Seja específico: "Crie X com Y tecnologia seguindo padrão Z" |
| **Não revisar código antes de commit** | Bugs chegam na base de código | Sempre use `/revisar` antes de commitar |
| **Ignorar padrões do projeto** | Inconsistência no códigobase | Use `/arquitetura` antes de implementar |
| **Não atualizar contexto** | IA fica desatualizada com mudanças | Mantenha `.claude/CONTEXT/` atualizado |
| **Usar só um command** | Perder benefício completo | Combine commands para workflows completos |
| **Pular documentação** | Dívida técnica acumula | Documente conforme desenvolve com `/doc` |
| **Não fornecer contexto suficiente** | IA gera soluções genéricas | Inclua stack, versões, comportamento esperado |

---

### 🎯 Dicas Avançadas

#### Criar Commands Personalizados

Você pode criar seus próprios commands para tarefas recorrentes:

```
1. Crie arquivo: .claude/commands/deploy.md
2. Adicione conteúdo:
---
description: Deploy para produção
globs: ["**/*.ts", "**/*.json"]
---

Execute os passos de deploy:
1. Run tests: npm test
2. Build: npm run build
3. Run pre-deploy checks
4. Create git tag
5. Push to production

3. Use: /deploy
```

#### Estender Agents Existente

Personalize agents para seu contexto:

```markdown
# .claude/agents/mobile-developer.md

## Contexto Específico do Projeto

- Usamos React Navigation 6
- Estado com Zustand (não Redux)
- API com Axios + interceptors
- Testes com Jest + React Native Testing Library

## Padrões do Projeto

- Components devem ter `testID`
- Services devem ter error handling estruturado
- Navigation deve usar type-safe routes
```

#### Combinar SDD com Outras Ferramentas

**SDD + Git Hooks:**
```bash
# .git/hooks/pre-commit
#!/bin/bash
echo "🔍 Executando /revisar antes do commit..."
# Run Claude Code review
```

**SDD + CI/CD:**
```yaml
# .github/workflows/pr-review.yml
- name: AI Code Review
  run: |
    echo "/revisar" | claude-code review
```

#### Otimizar para Seu Fluxo de Trabalho

**Para Equipes:**
- Defina commands específicos do time
- Padronize prompts em templates
- Use `/card` para documentar decisões

**Para Solo Dev:**
- Crie commands para tarefas repetitivas
- Automatize documentação com `/doc`
- Use `/revisar` como "pair programmer"

**Para Consultoria:**
- Use `/arquitetura` para entender código legado rápido
- `/implementar` para seguir padrões do cliente
- `/doc` para entregar documentação completa

---

### 📊 Comparativo: Antes vs Depois de SDD

| Cenário | Sem SDD | Com SDD |
|---------|---------|---------|
| **Nova feature** | 2-4 horas | 30-60 min |
| **Bug fix** | Tentativa e erro | Debugging sistemático |
| **Code review** | Manual e inconsistente | Automatizado e padronizado |
| **Documentação** | Deixa para depois | Gera automaticamente |
| **Onboarding** | Semana 1 | Dia 1 |

---

## 6. Diferenças Chave

> **⚡ A diferença crítica:** Commands = você controla. Agents = a IA decide.

### Comparação Visual

| Aspecto | **Agents** 🤖 | **Commands** 💪 |
|---------|--------------|----------------|
| **Como é chamado** | IA decide automaticamente | Você chama via `/nome` |
| **Quando usar** | Tarefas complexas que exigem especialização | Tarefas específicas do dia a dia |
| **Controle** | Indireto (via prompt) | Direto (via command) |
| **Quem manda** | Sistema Claude | **VOCÊ** |

### Quando usar o quê?

```
USE AGENTS quando:
  • Não sabe qual approach usar
  • Tarefa é complexa e aberta
  • Quer que a IA decida o melhor especialista

USE COMMANDS quando:
  • Sabe exatamente o que precisa
  • Quer controle total da execução
  • Tarefa específica e bem-definida
```

### Exemplos Práticos

| Cenário | Agent ou Command? | Por quê? |
|---------|-------------------|----------|
| "Criar gestão de produtos igual à de clientes" | **`/implementar`** | Você sabe o que quer e tem referência |
| "Quero revisar meu código antes de commitar" | **`/revisar`** | Tarefa específica, seu controle |
| "Bug estranho na aplicação" | **`/debuggar`** | Task específica de debugging |

---

## 7. Fluxos de Trabalho Práticos

### Cenário 1: Nova Feature

**Situação:** Você precisa implementar uma feature de "gestão de produtos".

```
Passo 1: Entender padrões
/arquitetura
→ "Quais são os padrões para criar novos módulos?"

Passo 2: Implementar seguindo referência
/implementar
→ "Crie gestão de produtos seguindo o padrão de gestão de clientes"

Passo 3: Revisar código
/revisar
→ "Revise minhas mudanças"

Passo 4: Criar PR
/pr
→ "Gere descrição de PR"
```

---

### Cenário 2: Bug Complexo

**Situação:** Usuários reportam bug no checkout.

```
Passo 1: Debuggar
/debuggar
→ "Checkout falha quando usuário tem cupom desconto"

Passo 2: Verificar padrões
/arquitetura
→ "Como lidar com descontos seguindo padrões?"

Passo 3: Documentar fix
/card
→ "Crie card para documentar o fix"
```

---

### Cenário 3: Novo no Projeto

**Situação:** Você acabou de entrar no time.

```
Passo 1: Entender estrutura
Ler docs/ESTRUTURA.md

Passo 2: Executar instalação
Rodar INSTALAR_SDD.md

Passo 3: Entender padrões
/arquitetura
→ "Quais são os padrões principais do projeto?"

Passo 4: Explorar contexto
Ler .claude/CONTEXT/README.md
```

---

## 8. Exemplos Práticos Detalhados

### Exemplo 1: Implementar Nova Feature

**Prompt:**
```
/implementar

Preciso criar uma feature de "catálogo de produtos" seguindo o mesmo padrão da feature de "catálogo de serviços" que já existe no projeto.
```

**Resposta Esperada:**

> Vou analisar a feature de referência (catálogo de serviços) e implementar catálogo de produtos seguindo os mesmos padrões.
>
> ## Análise da Feature de Referência
>
> **Estrutura de Arquivos:**
> - `src/app/features/catalog/services/`
>   - `service-list.service.ts`
>   - `service-detail.service.ts`
> - `src/app/features/catalog/components/`
>   - `service-list.component.ts`
>   - `service-card.component.ts`
>   - `service-filter.component.ts`
> - `src/app/features/catalog/models/`
>   - `service.model.ts`
>
> **Padrões Identificados:**
> - Services usam RxJS com observables
> - Components usam Signals e OnPush
> - Nomenclatura: `{feature}-{type}.component.ts`
>
> ## Planejamento
>
> Vou criar a estrutura idêntica para produtos:
> - `src/app/features/products/services/`
> - `src/app/features/products/components/`
> - `src/app/features/products/models/`
>
> Posso prosseguir?

---

### Exemplo 2: Debuggar Bug

**Prompt:**
```
/debuggar

Usuários reportam que ao adicionar item ao carrinho, a quantidade não atualiza na UI se o item já existir. Precisa dar refresh na página para ver.
```

**Resposta Esperada:**

> Vou debuggar esse bug seguindo o processo de 4 fases.
>
> ## Fase 1: Reproduzir
>
> **Passos para Reproduzir:**
> 1. Adicionar produto "Camiseta" ao carrinho
> 2. Adicionar mesmo produto novamente
> 3. Observar: quantidade na UI não muda
> 4. Dar refresh: quantidade aparece correta
>
> **Bug Reproduzido:** ✅
>
> ## Fase 2: Isolar
>
> Adicionando logs no `cart.service.ts` e `cart.component.ts`...
>
> **Descoberta:** O service atualiza o estado corretamente, mas o component não está reativando.
>
> ## Fase 3: Root Cause
>
> **Problema:** `CartComponent` não está usando Signals para o estado do carrinho, apenas `ngOnChanges`.
>
> **Root Cause:** Mudanças no array de itens não disparam `ngOnChanges` porque a referência do array não muda, apenas o conteúdo.
>
> ## Fase 4: Fix
>
> **Solução:** Converter para Signals.
>
> ```typescript
> // Antes
> @Input() items: CartItem[] = [];
>
> // Depois
> items = input<CartItem[]>([]);
> total = computed(() => this.items().reduce(...));
> ```

---

### Exemplo 3: Revisar Código

**Prompt:**
```
/revisar
```

**Resposta Esperada:**

> ## Revisão de Código
>
> ### Arquivos Modificados
> - `src/app/components/user-form/user-form.component.ts`
> - `src/app/services/user.service.ts`
>
> ### Conformidade com Padrões ✅
>
> | Padrão | Status | Observação |
> |--------|--------|------------|
> | Signals + OnPush | ✅ | Component usa signals corretamente |
> | Nomenclatura | ✅ | Segue convenções do projeto |
> | Error handling | ⚠️ | Faltou try-catch no service |
>
> ### Problemas Detectados
>
> **[Segurança] - ALTA:**
> - Password sendo logado em console na linha 42
>
> **[Qualidade] - MÉDIA:**
> - Falta validação de email no form
> - Magic number "100" (limite de caracteres) sem constante
>
> ### Sugestões
>
> 1. Remover console.log com password
> 2. Adicionar validação de email
> 3. Extrair magic number para constante `MAX_NAME_LENGTH`

---

## 9. Troubleshooting Ampliado

### Commands não funcionam?

**Sintoma:** `/arquitetura` ou outro command não funciona.

**Possíveis Causas:**

1. **Arquivo não existe em `.claude/commands/`**
   - **Verificação:** `ls .claude/commands/`
   - **Solução:** Reinstalar SDD

2. **YAML frontmatter inválido**
   - **Verificação:** Abrir o arquivo e ver se o YAML está correto
   - **Solução:** Corrigir ou reinstalar

3. **Claude Code não reiniciou**
   - **Solução:** Fechar e abrir Claude Code

4. **Path incorreto**
   - **Verificação:** Você está na raiz do projeto?
   - **Solução:** `cd` para raiz do projeto

---

### Contexto não é lido?

**Sintoma:** Claude não segue os padrões definidos em `.claude/CONTEXT/`.

**Possíveis Causas:**

1. **Arquivo não existe**
   - **Verificação:** `ls .claude/CONTEXT/`
   - **Solução:** Reinstalar SDD

2. **Prompt não menciona contexto explicitamente**
   - **Solução:** Seja explícito: "Siga os padrões em `.claude/CONTEXT/PADROES_ARQUITETURA.md`"

3. **Documento muito genérico**
   - **Solução:** Personalizar para seu projeto

---

### Agentes não são selecionados?

**Sintoma:** Claude não usa agents especializados automaticamente.

**Possíveis Causas:**

1. **Tarefa não complexa o suficiente**
   - Claude só usa agents para tarefas complexas
   - **Solução:** Use commands explicitamente (`/debuggar`, `/doc`)

2. **Agente não definido**
   - **Verificação:** `ls .claude/agents/`
   - **Solução:** Reinstalar SDD

---

### Como personalizar templates?

**Sintoma:** Quer modificar os documentos de contexto.

**Solução:**

1. **Edite diretamente:**
   ```bash
   code .claude/CONTEXT/PADROES_ARQUITETURA.md
   ```

2. **Adicione seções específicas do projeto:**
   ```markdown
   ## Padrões Específicos do Meu Projeto

   - Todos os components devem ter `data-testid`
   - Services devem ter logging estruturado
   ```

3. **Reinstale se precisar dos templates originais:**
   - Backup de `.claude/`
   - Execute `INSTALAR_SDD.md` novamente

---

### Instalação falha?

**Sintoma:** Erro durante execução de `INSTALAR_SDD.md`.

**Possíveis Causas:**

1. **Permissões de escrita**
   - **Verificação:** Você tem permissão para criar `.claude/`?
   - **Solução:** Verifique permissões da pasta

2. **Projeto inválido**
   - **Verificação:** É um projeto válido (tem package.json, etc.)?
   - **Solução:** Execute em um projeto válido

3. **Stack não reconhecida**
   - **Solução:** O script irá perguntar a stack manualmente

---

## 📚 Recursos Adicionais

### Documentação

- [ESTRUTURA.md](./docs/ESTRUTURA.md) - Explicação detalhada da estrutura
- [PERSONALIZACAO.md](./docs/PERSONALIZACAO.md) - Como personalizar SDD

### Contexto do Projeto

Após instalação, consulte:
- `.claude/CONTEXT/README.md` - Hub central de contexto
- `.claude/CONTEXT/PADROES_ARQUITETURA.md` - Padrões específicos da sua stack

---

## 🔄 Atualização

Para atualizar o SDD:

1. **Backup:** Copie `.claude/` (se quiser preservar customizações)
2. **Descompacte:** Nova versão do SDD
3. **Execute:** `INSTALAR_SDD.md` novamente
4. **Escolha:** O que sobrescrever

---

**Versão:** 2.0.0
**Última atualização:** 2026-03-09
**Autores:** SDD Team
