# 🎨 Personalização do SDD

Guia completo para personalizar o Sistema Spec Driven Development para seu projeto.

---

## 📋 Níveis de Personalização

### Nível 1: Básico (Recomendado Começar Aqui)
- Editar informações do projeto nos templates
- Adicionar persons específicas
- Ajustar convenções de nomenclatura

### Nível 2: Intermediário
- Adicionar novos commands
- Customizar agentes existentes
- Adicionar templates específicos

### Nível 3: Avançado
- Criar workflows customizados
- Integrar com ferramentas externas
- Modificar scripts de instalação

---

## 🎯 Nível 1: Personalização Básica

### Editar Informações do Projeto

Após instalação, edite `.claude/CONTEXT/README.md`:

```markdown
## 🎯 Visão Geral do Projeto

**Nome:** Meu Projeto Incrível
**Stack:** Angular 17
**Linguagem:** TypeScript
**Framework:** @angular/core v17.2.0

### Propósito

Sistema de gestão de... [DESCREVER SEU PROJETO]
```

### Adicionar Personas Específicas

Edite `.claude/CONTEXT/CRIAR_CARD_TASK.md`:

```markdown
## 👥 Personas do Projeto

### Persona: Gerente de Produtos - Carlos

**Perfil:**
- Idade: 42 anos
- Profissão: Gerente de Produtos
- Nível técnico: Baixo
- Frequência de uso: Diária

**Objetivos:**
- Visualizar métricas de vendas
- Aprovar pedidos rapidamente
- Gerar relatórios mensais

**Frustrações:**
- Interfaces complexas
- Falta de visibilidade dos dados
- Processos manuais demorados
```

### Ajustar Convenções de Nomenclatura

Edite `.claude/CONTEXT/PADROES_ARQUITETURA.md`:

```markdown
## 📝 Convenções de Nomenclatura

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| **Componentes** | PascalCase + sufixo | `UserCardComponent` |
| **Services** | PascalCase + sufixo Service | `OrderService` |
| **Interfaces** | PascalCase + prefixo I | `IUserRepository` |
| **Variáveis** | camelCase | `userName` |
```

---

## 🔧 Nível 2: Personalização Intermediária

### Adicionar Novo Command

Crie `.claude/commands/meu-command.md`:

```markdown
---
name: meu-command
description: Descrição do que este command faz
---

Quando chamar esse comando você deve OBRIGATORIAMENTE [instrução específica].

[Instruções detalhadas do que o command deve fazer]
```

**Exemplo - Command de Database:**

```markdown
---
name: database
description: Gerencia migrações e queries do banco de dados
---

Quando chamar esse comando você deve OBRIGATORIAMENTE chamar o arquivo `.claude/CONTEXT/PADROES_ARQUITETURA.md` e seguir as instruções para:

1. Verificar se a migration segue os padrões
2. Validar relacionamentos
3. Verificar índices apropriados
4. Gerar SQL quando solicitado
```

### Adicionar Novo Agent

Crie `.claude/agents/meu-agent.md`:

```markdown
---
name: meu-agent
description: Descrição da especialidade do agente
tools: Read, Grep, Glob, Edit, Write
model: inherit
skills: [lista de skills]
---

# Nome do Agente

Descrição do que este agente faz e quando usá-lo.

## Core Philosophy

> "Frase que define a filosofia do agente"

## Your Mindset

- **Princípio 1**: Descrição
- **Princípio 2**: Descrição
- **Princípio 3**: Descrição

## When You Should Be Used

- Situação 1
- Situação 2
- Situação 3
```

### Customizar Template Existente

Edite qualquer template em `.claude/CONTEXT/`:

**Exemplo - Adicionar nova seção em PADROES_ARQUITETURA.md:**

```markdown
## 🎨 Design System

### Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | #007bff | Botões primários |
| Secondary | #6c757d | Botões secundários |
| Success | #28a745 | Mensagens de sucesso |

### Tipografia

| Tamanho | Uso |
|---------|-----|
| 14px | Corpo do texto |
| 16px | Títulos de seção |
| 24px | Títulos principais |
```

---

## 🚀 Nível 3: Personalização Avançada

### Criar Workflow Customizado

Crie `.claude/CONTEXT/MEU_WORKFLOW.md`:

```markdown
---
title: "Meu Workflow Customizado"
version: "1.0.0"
author: "Equipe"
tags: ["workflow", "custom"]
---

## 🔄 Workflow: Meu Processo

### Descrição

[Descrição do workflow]

### Estados

| Estado | Descrição |
|--------|-----------|
| ESTADO_1 | Descrição |
| ESTADO_2 | Descrição |

### Transições

| De | Para | Gatilho |
|----|------|---------|
| ESTADO_1 | ESTADO_2 | Condição |

### Handlers

```typescript
// Exemplo de código
class Handler {
  async handle(context: Context): Promise<State> {
    // Lógica
  }
}
```
```

### Integrar com Ferramentas Externas

**Exemplo - Integração com Jira:**

```markdown
## 🔗 Integração Jira

### Command: /jira

```markdown
---
name: jira
description: Gerencia tickets do Jira
---

Quando chamado:
1. Lê contexto do Jira
2. Cria/atualiza tickets
3. Sincroniza status
```
```

### Modificar Script de Instalação

Edite `INSTALAR_SDD.md` para adicionar:

```markdown
### ETAPA 9: Customizações Específicas

[Adicionar etapas customizadas de instalação]
```

---

## 📦 Templates por Stack

### Angular 17+

Edite `.claude/CONTEXT/PADROES_ARQUITETURA.md`:

```markdown
## 🎨 Angular 17+ Específico

### Padrões de Componentes

```typescript
// ✅ Padrão do projeto
@Component({
  selector: 'app-xxx',
  standalone: true,
  imports: [CommonModule, ...],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XxxComponent {
  // Signals privados, computed públicos
  private readonly _state = signal<State>(initialState);
  readonly state = this._state.asReadonly();
}
```

### Estrutura de Módulos

[Adicionar estrutura específica do seu projeto]
```

### React

```markdown
## 🎨 React Específico

### Padrões de Hooks

```typescript
// ✅ Padrão do projeto
export function useXxx() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Cleanup
    return () => cleanup();
  }, [dependencies]);

  return { state, actions };
}
```
```

### Node.js/Python

```markdown
## 🎨 Backend Específico

### Padrões de Service

```typescript
// ✅ Padrão do projeto
export class XxxService {
  constructor(
    private readonly repository: XxxRepository,
    private readonly logger: Logger
  ) {}

  async method(params: Params): Promise<Result> {
    // Lógica
  }
}
```
```

---

## 🧪 Testar Personalizações

### Testar Command

```markdown
/	meu-command
```

### Testar Agent

```markdown
Por favor, use o agente "meu-agent" para...
```

### Testar Contexto

```markdown
Siga os padrões em .claude/CONTEXT/PADROES_ARQUITETURA.md para criar X
```

---

## 📝 Versionamento de Personalizações

### Git Strategy

```bash
# Opção 1: Versionar tudo
git add .claude/

# Opção 2: Versionar apenas CONTEXT/
# Adicionar .claude/agents/ e .claude/commands/ ao .gitignore

# Opção 3: Versionar com branches
# main: templates originais
# custom: personalizações do projeto
```

### .gitignore Recomendado

```gitignore
# Manter personalizações, ignorar SDD original
SDD/

# Ou manter tudo
# (sem entrada para SDD/)
```

---

## 🔄 Atualização de Personalizações

### Quando SDD é Atualizado

1. **Backup:** Copie `.claude/` para backup
2. **Atualize:** Descompacte nova versão do SDD
3. **Compare:** Compare templates novos com antigos
4. **Mergear:** Aplique suas personalizações nos novos templates
5. **Teste:** Verifique se tudo funciona

### Estratégia de Merge

```bash
# Usar git para merge
git checkout -b sdd-update
cp -r SDD/* .
git add .
git commit -m "Update SDD"

# Merge com personalizações
git checkout main
git merge sdd-update --strategy-option=theirs
```

---

## 📚 Referências

- [COMO_USAR.md](../COMO_USAR.md) - Uso básico
- [ESTRUTURA.md](./ESTRUTURA.md) - Estrutura de arquivos

---

## 💡 Dicas de Personalização

### Boas Práticas

1. **Comece simples** - Personalize apenas o essencial primeiro
2. **Documente** - Anote suas personalizações
3. **Teste** - Verifique se personalizações funcionam
4. **Versione** - Mantenha histórico de mudanças
5. **Compartilhe** - Compartilhe personalizações úteis com a equipe

### Evite

1. ❌ Sobrescrever demais os templates originais
2. ❌ Criar muitos commands específicos (perde o padrão)
3. ❌ Não documentar personalizações
4. ❌ Não versionar `.claude/`
5. ❌ Personalizações muito específicas (difícil manutenção)

---

**Versão:** 2.0.0
**Última atualização:** 2026-03-09
