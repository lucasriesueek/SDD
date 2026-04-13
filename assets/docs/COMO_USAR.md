# Como Usar o SDD

Guia completo do Spec Driven Development para maximizar sua produtividade com Claude Code.

---

## Indice

1. [Introducao](#1-introducao)
2. [Visao Geral da Estrutura](#2-visao-geral-da-estrutura)
3. [Commands - Seus Superpoderes Diretos](#3-commands---seus-superpoderes-diretos)
4. [Agents - Automacao da IA](#4-agents---automacao-da-ia)
5. [Dicas de Uso](#5-dicas-de-uso)
6. [Fluxos de Trabalho Praticos](#6-fluxos-de-trabalho-praticos)
7. [Exemplos Praticos](#7-exemplos-praticos)
8. [Troubleshooting](#8-troubleshooting)

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

- **8 commands** para tarefas comuns (`/arquitetura`, `/implementar`, `/revisar`, etc.)
- **6 agentes especializados** que a IA usa automaticamente
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
│   ├── PADROES_DE_PR.md
│   ├── SPEC_BUSINESS_RULES.md
│   ├── SPEC_API_CONTRACT.md
│   ├── SPEC_DATA_MODEL.md
│   └── SPEC_WORKFLOW.md
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

## 3. Commands - Seus Superpoderes Diretos

> **Conceito chave:** Commands sao atalhos que voce controla. Digite `/nome` e acontece!
> Diferente dos agents (que a IA decide quando usar), Commands estao sob seu **controle total**.

### /arquitetura - O Arquiteto do Projeto

**Para que serve:** Saber como algo funciona no projeto.

**Quando usar:**
- Criar novo componente/modulo
- Implementar nova feature
- Verificar padroes existentes
- Duvidas sobre convencoes

**Exemplo:**
```
/arquitetura
Como devo criar um formulario seguindo os padroes do projeto?
```

**Voce recebe:** Padroes especificos, exemplos de codigo, convencoes, boas praticas.

---

### /implementar - O Construtor

**Para que serve:** Clonar uma feature existente para criar uma nova com consistencia.

**Quando usar:**
- Implementar feature baseada em outra
- Replicar padroes do projeto
- Manter consistencia arquitetural

**Exemplo:**
```
/implementar
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

### /card - O Organizador do Backlog

**Para que serve:** Criar User Stories completas com Acceptance Criteria.

**Exemplo:**
```
/card
Crie um card para essa funcionalidade de filtro de usuarios.
```

---

### /pr - O Comunicador

**Para que serve:** Gerar descricoes de PR profissionais.

**Exemplo:**
```
/pr
Gere descricao de PR para minhas mudancas atuais.
```

---

### /doc - O Documentador

**Para que serve:** Documentacao automatica de codigo, APIs e componentes.

**Exemplo:**
```
/doc
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

### /explorar - O Explorador

**Para que serve:** Exploracao de codebase, mapeamento arquitetural, auditorias.

**Exemplo:**
```
/explorar
Faca uma auditoria completa do projeto.
```

**Modos especiais:** Auditoria, Mapeamento, Viabilidade.

---

## 4. Agents - Automacao da IA

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

---

## 5. Dicas de Uso

### Para Comecar Agora

```
Passo 1: Entenda os padroes do projeto
/arquitetura
→ "Quais sao os padroes principais que devo seguir?"

Passo 2: Implemente sua primeira feature
/implementar
→ "Crie [sua feature] seguindo o padrao de [feature existente]"

Passo 3: Revise antes de commitar
/revisar
→ "Revise minhas mudancas staged"
```

### Como Combinar Commands

```
Nova Feature:   /arquitetura → /implementar → /revisar → /pr
Bug Fix:        /debuggar → /arquitetura → /revisar → /card
Code Review:    /revisar → /arquitetura → /pr
Documentacao:   /doc → /revisar
```

### Boas Praticas

| Boa pratica | Por que |
|-------------|---------|
| Seja especifico nos prompts | IA gera solucoes melhores |
| Sempre use /revisar antes de commit | Pega bugs cedo |
| Use /arquitetura antes de implementar | Garante consistencia |
| Documente conforme desenvolve | Evita divida tecnica |
| Combine commands em sequencia | Resultado completo |

### Erros Comuns

| Erro | Como evitar |
|------|-------------|
| Prompts vagos | Seja especifico: "Crie X com Y seguindo padrao Z" |
| Nao revisar antes de commit | Sempre use `/revisar` |
| Ignorar padroes | Use `/arquitetura` primeiro |
| Nao dar contexto | Inclua stack, versoes, comportamento esperado |

---

## 6. Fluxos de Trabalho Praticos

### Nova Feature

```
1. /arquitetura → "Como estruturar um modulo de [feature]?"
2. /implementar → "Implemente [feature] seguindo o padrao de [feature similar]"
3. /revisar → "Revise minhas mudancas"
4. /card → "Documente essa feature"
5. /pr → "Gere descricao de PR"
```

### Bug Complexo

```
1. /debuggar → "Bug: [descricao com passos para reproduzir]"
2. /arquitetura → "Como lidar com [X] seguindo os padroes?"
3. /revisar → "Revise o fix aplicado"
4. /card → "Documente o bug e a solucao"
```

### Code Review

```
1. /revisar → "Revise todas as mudancas staged"
2. /arquitetura → "Essa implementacao segue os padroes?"
3. /pr → "Gere feedback estruturado"
```

---

## 7. Exemplos Praticos

### Criar Novo Componente

```
Ruim: "Crie um componente de formulario"

Bom: /implementar
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
Bom: /doc
Documente o UserService incluindo:
1. Descricao do proposito
2. Parametros e retornos (com tipos)
3. Exemplos de uso
4. Dependencias
```

---

## 8. Troubleshooting

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
code .claude/commands/implementar.md
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
