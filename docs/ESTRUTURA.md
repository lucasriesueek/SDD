# 📁 Estrutura do SDD

Explicação detalhada da estrutura de diretórios e arquivos do Sistema Spec Driven Development.

---

## 🗂️ Estrutura Completa

```
SDD/
├── INSTALAR_SDD.md              # ⭐ Arquivo principal de instalação
├── VERSION.md                   # Controle de versão
│
├── agents/                      # Agentes especializados (5 arquivos)
│   ├── code-archaeologist.md    # Análise de código legado
│   ├── debugger.md              # Debugging sistemático
│   ├── documentation-writer.md  # Documentação técnica
│   ├── frontend-specialist.md   # Frontend Angular 17+
│   └── mobile-developer.md      # React Native e Flutter
│
├── commands/                    # Skills/Commands (7 arquivos)
│   ├── doc.md                   # Geração de documentação
│   ├── card.md                  # Criação de User Stories
│   ├── pr.md                    # Padrões de Pull Request
│   ├── revisar.md               # Revisão de código
│   ├── implementar.md           # Implementação de features
│   ├── arquitetura.md           # Diretrizes arquiteturais
│   └── debuggar.md              # Debugging sistemático
│
├── templates/                   # Templates de documentos (8 arquivos)
│   ├── PADROES_ARQUITETURA.md   # Padrões arquiteturais (EXPANDIDO)
│   ├── REVISAO_CODIGO.md        # Revisão de código (EXPANDIDO)
│   ├── CRIAR_CARD_TASK.md       # Criação de cards (EXPANDIDO)
│   ├── PADROES_DE_PR.md         # Padrões de PR (EXPANDIDO)
│   ├── SPEC_BUSINESS_RULES.md   # Regras de negócio (NOVO)
│   ├── SPEC_API_CONTRACT.md     # Contratos de API (NOVO)
│   ├── SPEC_DATA_MODEL.md       # Modelo de dados (NOVO)
│   └── SPEC_WORKFLOW.md         # Workflows/processos (NOVO)
│
└── docs/                        # Documentação do SDD
    ├── ESTRUTURA.md             # Este arquivo
    └── PERSONALIZACAO.md        # Como personalizar
├── COMO_USAR.md                 # Guia de uso (na raiz)
```

---

## 📄 Arquivo por Arquivo

### INSTALAR_SDD.md

**Propósito:** Script principal de instalação

**Conteúdo:**
- YAML frontmatter com metadados
- Instruções para a IA detectar stack
- Política de sobrescrita
- Templates de geração

**Uso:** Execute via Claude Code para configurar SDD em qualquer projeto

---

### agents/

#### code-archaeologist.md
**Propósito:** Análise de código legado e refatoração
**Use para:** Entender código antigo, refatorar, modernizar

#### debugger.md
**Propósito:** Debugging sistemático e root cause analysis
**Use para:** Bugs complexos, crashes, performance issues

#### documentation-writer.md
**Propósito:** Documentação técnica
**Use para:** README, API docs, changelogs

#### frontend-specialist.md
**Propósito:** Especialista em Angular 17+
**Use para:** Componentes, Signals, OnPush, performance

#### mobile-developer.md
**Propósito:** Desenvolvimento mobile
**Use para:** React Native, Flutter, navegação mobile

---

### commands/

#### doc.md
**Use:** `/doc`
**Ação:** Gera documentação seguindo templates

#### card.md
**Use:** `/card`
**Ação:** Cria User Stories com AC e DoD

#### pr.md
**Use:** `/pr`
**Ação:** Gera descrição de Pull Request

#### revisar.md
**Use:** `/revisar`
**Ação:** Revisa staged changes

#### implementar.md
**Use:** `/implementar`
**Ação:** Implementa nova feature baseada em feature de referência

#### debuggar.md
**Use:** `/debuggar`
**Ação:** Debugging sistemático (usa debugger agent)

#### arquitetura.md
**Use:** `/arquitetura`
**Ação:** Consulta padrões arquiteturais

---

### templates/

#### PADROES_ARQUITETURA.md
**Propósito:** Padrões arquiteturais e convenções
**Destino:** `.claude/CONTEXT/PADROES_ARQUITETURA.md`

**Contém:**
- Stack tecnológica
- Estrutura de diretórios
- Convenções de nomenclatura
- Padrões de código
- Exemplos específicos por stack

#### REVISAO_CODIGO.md
**Propósito:** Metodologia de revisão
**Destino:** `.claude/CONTEXT/REVISAO_CODIGO.md`

**Contém:**
- Checklist arquitetural
- Checklist de segurança
- Detecção de problemas
- Template de resposta

#### CRIAR_CARD_TASK.md
**Propósito:** Templates de User Stories
**Destino:** `.claude/CONTEXT/CRIAR_CARD_TASK.md`

**Contém:**
- Estrutura do card
- Personas do projeto
- Matriz de priorização
- Templates por tipo de mudança

#### PADROES_DE_PR.md
**Propósito:** Padrões de Pull Request
**Destino:** `.claude/CONTEXT/PADROES_DE_PR.md`

**Contém:**
- Estrutura do PR
- Títulos e emojis
- Templates por tipo
- Checklists

#### SPEC_BUSINESS_RULES.md (NOVO)
**Propósito:** Especificação de regras de negócio
**Destino:** `.claude/CONTEXT/SPEC_BUSINESS_RULES.md`

**Contém:**
- Glossário de termos
- Regras em formato Given/When/Then
- Invariantes
- Casos de borda
- Validações com exemplos de código

#### SPEC_API_CONTRACT.md (NOVO)
**Propósito:** Contratos de API
**Destino:** `.claude/CONTEXT/SPEC_API_CONTRACT.md`

**Contém:**
- Endpoints documentados
- Contratos request/response
- Códigos de status
- Autenticação
- Exemplos em curl/TypeScript

#### SPEC_DATA_MODEL.md (NOVO)
**Propósito:** Modelo de dados
**Destino:** `.claude/CONTEXT/SPEC_DATA_MODEL.md`

**Contém:**
- Diagrama ER (descrito)
- Entidades com atributos
- Relacionamentos
- Índices e performance
- Exemplos de queries

#### SPEC_WORKFLOW.md (NOVO)
**Propósito:** Workflows e processos
**Destino:** `.claude/CONTEXT/SPEC_WORKFLOW.md`

**Contém:**
- Fluxogramas (descritos)
- Estados do workflow
- Transições possíveis
- Handlers por estado
- Exemplos de código

---

### docs/

#### COMO_USAR.md
**Propósito:** Guia de uso rápido
**Contém:** Instruções de instalação e uso diário

#### ESTRUTURA.md
**Propósito:** Explicação da estrutura
**Contém:** Este arquivo

#### PERSONALIZACAO.md
**Propósito:** Como personalizar
**Contém:** Guia de customização

---

## 🔄 Fluxo de Instalação

```
1. INSTALAR_SDD.md é executado
   ↓
2. Detecta stack (Angular/React/Node/Python/etc)
   ↓
3. Pergunta sobre sobrescrita de arquivos existentes
   ↓
4. Cria .claude/ e subpastas
   ↓
5. Copia agents/ → .claude/agents/
   ↓
6. Copia commands/ → .claude/commands/
   ↓
7. Gera documentos em .claude/CONTEXT/
   (substituindo placeholders com dados do projeto)
   ↓
8. Cria .claude/settings.json
   ↓
9. Relata o que foi criado
```

---

## 📊 Placeholders Substituídos

Durante geração, estes placeholders são substituídos:

| Placeholder | Substituído Por |
|-------------|----------------|
| `{{NOME_PROJETO}}` | Nome detectado ou perguntado |
| `{{DATA_ATUAL}}` | Data atual (YYYY-MM-DD) |
| `{{STACK_PRINCIPAL}}` | Stack detectada |
| `{{LINGUAGEM}}` | Linguagem principal |
| `{{FRAMEWORK}}` | Framework principal |
| `{{VERSAO_FRAMEWORK}}` | Versão do framework |

---

## 🎯 Destino dos Arquivos

| Origem | Destino | Propósito |
|--------|---------|-----------|
| `agents/*.md` | `.claude/agents/` | Definições de agentes |
| `commands/*.md` | `.claude/commands/` | Skills chamadas via /nome |
| `templates/*.md` | `.claude/CONTEXT/` | Documentos de contexto |
| `settings.json` | `.claude/` | Configurações do Claude Code |

---

## 💡 Diferenças Importantes

### `.claude/CONTEXT/` vs `context/`

| `.claude/CONTEXT/` | `context/` (raiz) |
|--------------------|-------------------|
| Contexto para LLMs | Documentação para humanos |
| Lido pela IA automaticamente | Lido manualmente |
| Específico para Claude Code | Genérico |
| Curto e estruturado | Pode ser longo |

### `commands/` vs `agents/`

| `commands/` | `agents/` |
|-------------|-----------|
| Arquivos simples | Agentes completos |
| Chamados via `/nome` | Selecionados automaticamente |
| Referenciam contexto | Têm própria lógica |

---

**Versão:** 2.0.0
**Última atualização:** 2026-03-09
