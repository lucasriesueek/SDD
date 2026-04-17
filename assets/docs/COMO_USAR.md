# Como Usar o SDD

Guia completo do Spec Driven Development para maximizar sua produtividade com Claude Code.

---

## Indice

1. [Introducao](#1-introducao)
2. [Visao Geral da Estrutura](#2-visao-geral-da-estrutura)
3. [O Primeiro Passo - /iniciar-projeto](#3-o-primeiro-passo---iniciar-projeto)
4. [Commands - Seus Superpoderes Diretos](#4-commands---seus-superpoderes-diretos)
5. [Agents - Automacao da IA](#5-agents---automacao-da-ia)
6. [Dicas de Uso](#6-dicas-de-uso)
7. [Fluxos de Trabalho Praticos](#7-fluxos-de-trabalho-praticos)
8. [Exemplos Praticos](#8-exemplos-praticos)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Introducao

### O que e Spec Driven Development?

**Spec Driven Development (SDD)** e uma abordagem onde voce **define specifications (specs)** primeiro, e depois usa a IA para **implementar seguindo essas specs**.

Diferente de abordagens tradicionais onde voce da instrucoes vagas a IA ("crie um componente"), com SDD voce:
1. **Define padroes claros** de arquitetura
2. **Especifica regras de negocio** de forma estruturada
3. **Documenta contratos** de API e modelos de dados
4. **Usa commands/skills** para tarefas especificas

### Beneficios

| Beneficio | Como Ajuda |
|-----------|------------|
| **Consistencia** | Todo codigo segue os mesmos padroes |
| **Velocidade** | Commands executam tarefas complexas em segundos |
| **Qualidade** | Revisoes automatizadas detectam problemas |
| **Documentacao** | Sempre atualizada com o codigo |
| **Onboarding** | Novos devs entendem o projeto rapidamente |

### O que voce tem disponivel

- **10 commands** para tarefas comuns (`/iniciar-projeto`, `/diretrizes`, `/apartir`, `/revisar`, etc.)
- **7 agentes especializados** que a IA usa automaticamente
- **8 documentos de contexto** personalizados para sua stack
- **Padroes consistentes** em todo o projeto

---

## 2. Visao Geral da Estrutura

### Diagrama

```
.claude/
├── commands/             Commands/Skills (chamados via /nome)
│   ├── arquitetura.md
│   ├── card.md
│   ├── debuggar.md
│   ├── doc.md
│   ├── explorar.md
│   ├── implementar.md
│   ├── pr.md
│   └── revisar.md
│
├── agents/               Agentes especializados (auto-selecionados)
│   ├── code-archaeologist.md
│   ├── debugger.md
│   ├── documentation-writer.md
│   ├── explorer-agent.md
│   ├── frontend-specialist.md
│   └── mobile-developer.md
│
├── CONTEXT/              Documentos de contexto personalizados
│   ├── PADROES_ARQUITETURA.md
│   ├── REVISAO_CODIGO.md
│   ├── CRIAR_CARD_TASK.md
│   └── PADROES_DE_PR.md
│
├── settings.json         Configuracoes do Claude Code
├── README.md             Guia rapido
└── COMO_USAR.md          Voce esta aqui!
```

### Resumo

| Pasta | Proposito | Quem decide usar |
|-------|-----------|-----------------|
| **commands/** | Skills que voce chama via `/nome` | **Voce** |
| **agents/** | Especialistas que a IA usa automaticamente | **Claude** |
| **CONTEXT/** | Documentos de contexto para sua stack | Ambos |

---

## 3. O Primeiro Passo - /iniciar-projeto

> **Antes de usar qualquer outro command, execute este!**

### O que e

O `/iniciar-projeto` e o command que **inicializa os padroes arquiteturais** do seu projeto investigando o codigo existente.

### Quando usar

- **Imediatamente apos** instalar o SDD (`sdd-ueek init`)
- Quando quiser **atualizar** os padroes documentados
- Quando o projeto sofrer **mudancas arquiteturais significativas**

### Como funciona

```
/iniciar-projeto
```

**O que acontece:**

1. **Investigacao automatica** - A IA analisa seu codigo para descobrir padroes reais
2. **Catalogacao de convencoes** - Documenta convencoes de nomenclatura especificas
3. **Identificacao de preferencias** - Descobre preferencias de codigo do projeto
4. **Geracao de guia personalizado** - Cria um guia unico para seu time

### Exemplo de saida

```
🔍 Iniciando investigacao do projeto...

[20%] 🔍 Analisando estrutura de componentes...
✓ Encontrados 47 componentes Angular
✓ 45 usam OnPush, 2 usam Default
✓ 100% usam inject() para DI

[40%] 🔍 Analisando convencoes de nomenclatura...
✓ Componentes: PascalCase + sufixo Component
✓ Services: PascalCase + sufixo Service
✓ Interfaces: PascalCase (sem prefixo I)

[60%] 🔍 Mapeando estrutura de diretorios...
✓ Estrutura: core/, features/, shared/

[80%] 🔍 Identificando padroes de HTTP...
✓ Usam HttpClient com interceptors
✓ Repositories padrao para acesso a dados

[100%] ✅ PADROES_ARQUITETURA.md inicializado!
```

### Por que importante

| Sem /iniciar-projeto | Com /iniciar-projeto |
|---------------------|---------------------|
| Padroes genericos | Padroes especificos do seu projeto |
| Exemplos teoricos | Exemplos reais do seu codigo |
| Pode nao se aplicar | 100% aplicavel ao seu time |

---

## 4. Commands - Seus Superpoderes Diretos

> **Conceito chave:** Commands sao atalhos que voce controla. Digite `/nome` e acontece!
> Diferente dos agents (que a IA decide quando usar), Commands estao sob seu **controle total**.

### /diretrizes - O Arquiteto do Projeto

**Para que serve:** Saber como algo funciona no projeto.

**Quando usar:**
- Criar novo componente/modulo
- Implementar nova feature
- Verificar padroes existentes
- Duvidas sobre convencoes

**Exemplo:**
```
/diretrizes
Como devo criar um formulario seguindo os padroes do projeto?
```

**Voce recebe:** Padroes especificos, exemplos de codigo, convencoes, boas praticas.

---

### /apartir - O Construtor

**Para que serve:** Clonar uma feature existente para criar uma nova com consistencia.

**Quando usar:**
- Implementar feature baseada em outra
- Replicar padroes do projeto
- Manter consistencia arquitetural

**Exemplo:**
```
/apartir
Crie "gestao de produtos" seguindo o padrao de "gestao de clientes"
```

**Voce recebe:** Analise da referencia, planejamento, implementacao, validacao.

---

### /revisar - O Guardiao da Qualidade

**Para que serve:** Revisao automatica de codigo antes de commit.

**Quando usar:**
- Antes de commitar mudancas
- Verificar conformidade com padroes
- Detectar problemas de seguranca
- Validar boas praticas

**Exemplo:**
```
/revisar
Revise minhas mudancas staged.
```

**Dica de ouro:** Use antes de TODO commit.

---

### /criar-card - O Organizador do Backlog

**Para que serve:** Criar User Stories completas com Acceptance Criteria.

**Exemplo:**
```
/criar-card
Crie um card para essa funcionalidade de filtro de usuarios.
```

---

### /criar-pr - O Comunicador

**Para que serve:** Gerar descricoes de PR profissionais.

**Exemplo:**
```
/criar-pr
Gere descricao de PR para minhas mudancas atuais.
```

---

### /criar-doc - O Documentador

**Para que serve:** Documentacao automatica de codigo, APIs e componentes.

**Exemplo:**
```
/criar-doc
Documente o componente de UserService.
```

**Dica:** Documente conforme desenvolve. Nao deixe para depois.

---

### /debuggar - O Detetive

**Para que serve:** Debugging sistematico de bugs complexos.

**Exemplo:**
```
/debuggar
Bug: usuarios nao conseguem fazer login apos registro.
Passos: 1. Registrar 2. Tentar login 3. Erro 500
```

**Dica:** Quanto mais detalhes voce der, mais rapido o diagnostico.

---

### /investigar - O Investigador

**Para que serve:** Investigacao de codebase, mapeamento arquitetural, auditorias.

**Exemplo:**
```
/investigar
Faca uma auditoria completa do projeto.
```

**Modos especiais:** Auditoria, Mapeamento, Viabilidade.

---

## 5. Agents - Automacao da IA

> **Conceito chave:** Agents sao especialistas que a IA usa automaticamente.
> Voce **nao precisa chama-los diretamente** - o Claude decide quando usar.

### code-archaeologist
Analise de codigo legado e refatoracao. Ativado quando detecta codigo antigo ou padroes obsoletos.

### debugger
Debugging sistematico de bugs e problemas de performance. Ativado para bugs e crashes.

### documentation-writer
Documentacao tecnica. Ativado quando voce pede para documentar algo.

### frontend-specialist
Frontend moderno (Angular 17+, React, Vue). Ativado para trabalho com UI e componentes.

### mobile-developer
React Native e Flutter. Ativado quando detecta projeto mobile.

### explorer-agent
Exploracao e descoberta avancada de codebase. Ativado para analise arquitetural profunda.

### laravel-ueek-specialist
Especialista em Laravel 12 + Inertia 2.x + React 19. Meta-agente que consulta
documentacao de padroes para orientacao precisa em monolitos modernos.
Ativado quando detecta tarefas envolvendo Laravel, Inertia, PHP, Blade ou Livewire.

---

## 6. Dicas de Uso

### Para Comecar Agora

```
Passo 0: Inicialize os padroes do projeto (PRIMEIRO!)
/iniciar-projeto
→ A IA investiga seu codigo e cria guia personalizado

Passo 1: Entenda os padroes do projeto
/diretrizes
→ "Quais sao os padroes principais que devo seguir?"

Passo 2: Implemente sua primeira feature
/apartir
→ "Crie [sua feature] seguindo o padrao de [feature existente]"

Passo 3: Revise antes de commitar
/revisar
→ "Revise minhas mudancas staged"
```

### Como Combinar Commands

```
Nova Feature:   /diretrizes → /apartir → /revisar → /criar-pr
Bug Fix:        /debuggar → /diretrizes → /revisar → /criar-card
Code Review:    /revisar → /diretrizes → /criar-pr
Documentacao:   /criar-doc → /revisar
```

### Boas Praticas

| Boa pratica | Por que |
|-------------|---------|
| Seja especifico nos prompts | IA gera solucoes melhores |
| Sempre use /revisar antes de commit | Pega bugs cedo |
| Use /diretrizes antes de implementar | Garante consistencia |
| Documente conforme desenvolve | Evita divida tecnica |
| Combine commands em sequencia | Resultado completo |

### Erros Comuns

| Erro | Como evitar |
|------|-------------|
| Prompts vagos | Seja especifico: "Crie X com Y seguindo padrao Z" |
| Nao revisar antes de commit | Sempre use `/revisar` |
| Ignorar padroes | Use `/diretrizes` primeiro |
| Nao dar contexto | Inclua stack, versoes, comportamento esperado |

---

## 7. Fluxos de Trabalho Praticos

### Primeira Configuracao

```
1. sdd-ueek init           → Instala o SDD no projeto
2. /iniciar-projeto        → IA investiga e inicializa padroes
```

### Nova Feature

```
1. /diretrizes → "Como estruturar um modulo de [feature]?"
2. /apartir → "Implemente [feature] seguindo o padrao de [feature similar]"
3. /revisar → "Revise minhas mudancas"
4. /criar-card → "Documente essa feature"
5. /criar-pr → "Gere descricao de PR"
```

### Bug Complexo

```
1. /debuggar → "Bug: [descricao com passos para reproduzir]"
2. /diretrizes → "Como lidar com [X] seguindo os padroes?"
3. /revisar → "Revise o fix aplicado"
4. /criar-card → "Documente o bug e a solucao"
```

### Code Review

```
1. /revisar → "Revise todas as mudancas staged"
2. /diretrizes → "Essa implementacao segue os padroes?"
3. /criar-pr → "Gere feedback estruturado"
```

---

## 8. Exemplos Praticos

### Criar Novo Componente

```
Ruim: "Crie um componente de formulario"

Bom: /apartir
Crie um formulario de contato seguindo o mesmo padrao
do formulario de registro (RegistrationFormComponent).
Use Reactive Forms com validacao e OnPush change detection.
```

### Debugar Bug

```
Ruim: "Tem um bug no carrinho"

Bom: /debuggar
Bug no carrinho:
Sintoma: Ao adicionar item que ja existe, quantidade nao atualiza na UI
Passos: 1. Adicione "Camiseta P"  2. Adicione "Camiseta P" novamente
Esperado: Quantidade mostra "2"  Atual: Mostra "1"
Stack: Angular 17, Signals, OnPush
```

### Gerar Documentacao

```
Bom: /criar-doc
Documente o UserService incluindo:
1. Descricao do proposito
2. Parametros e retornos (com tipos)
3. Exemplos de uso
4. Dependencias
```

---

## 9. Troubleshooting

### Commands nao funcionam?

1. **Verifique:** `ls .claude/commands/` - os arquivos existem?
2. **Reinicie:** Feche e abra o Claude Code
3. **Reinstale:** `npx sdd-ueek init` no diretorio do projeto

### Contexto nao e lido?

1. **Verifique:** `ls .claude/CONTEXT/` - os arquivos existem?
2. **Seja explicito:** "Siga os padroes em `.claude/CONTEXT/PADROES_ARQUITETURA.md`"
3. **Personalize:** Edite os documentos para seu projeto

### Como personalizar?

Edite os arquivos diretamente:
```bash
code .claude/CONTEXT/PADROES_ARQUITETURA.md
code .claude/commands/apartir.md
```

Para restaurar os originais: `npx sdd-ueek init`

---

## Comparativo: Antes vs Depois

| Cenario | Sem SDD | Com SDD |
|---------|---------|---------|
| Nova feature | 2-4 horas | 30-60 min |
| Bug fix | Tentativa e erro | Debugging sistematico |
| Code review | Manual e inconsistente | Automatizado e padronizado |
| Documentacao | Deixa para depois | Gera automaticamente |
| Onboarding | Semana 1 | Dia 1 |

---

**Gerado por sdd-ueek** | [npmjs.com/package/sdd-ueek](https://www.npmjs.com/package/sdd-ueek)
