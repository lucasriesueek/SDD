---
title: "SDD - Spec Driven Development Setup"
version: "2.0.0"
author: "SDD Team"
purpose: "Setup completo de Spec Driven Development com contexto, agentes e commands"
created: "2026-03-09"
---

# 🚀 SDD - Spec Driven Development Setup

> **Objetivo**: Configurar automaticamente Spec Driven Development em qualquer projeto com estrutura `.claude/` completa, incluindo agentes especializados, commands/skills e documentos de contexto.

---

## 📋 INSTRUÇÕES PARA A IA

Ao receber a solicitação de executar este workflow de instalação:

### ETAPA 1: Análise do Projeto

Execute os seguintes passos para entender o projeto:

```bash
# 1. Identificar linguagem/framework através de arquivos de configuração
# Procurar por:
- package.json          → Node.js/JavaScript/TypeScript (verificar por @angular/core, react, next, etc.)
- angular.json          → Angular
- next.config.js        → Next.js
- vite.config.ts        → Vite
- requirements.txt      → Python
- pyproject.toml        → Python moderno
- Cargo.toml            → Rust
- go.mod                → Go
- pom.xml               → Java/Maven
- build.gradle          → Java/Gradle
- *.csproj              → .NET/C#
- composer.json         → PHP
- Gemfile               → Ruby

# 2. Mapear estrutura de diretórios
# Identificar padrões: src/, lib/, app/, components/, services/, models/, etc.

# 3. Identificar dependências críticas
# Ler arquivo de dependências e listar bibliotecas principais

# 4. Detectar padrões existentes
# Procurar arquivos de configuração: .eslintrc, .prettierrc, tsconfig.json, etc.

# 5. Verificar se já existe .claude/
```

### ETAPA 2: Política de Sobrescrita

**IMPORTANTE: SEMPRE perguntar antes de sobrescrever arquivos existentes!**

Para cada arquivo que já existe, usar `AskUserQuestion` para confirmar:

```javascript
{
  "question": "O arquivo .claude/agents/code-archaeologist.md já existe. Deseja sobrescrever?",
  "header": "Sobrescrita",
  "options": [
    {
      "label": "Sobrescrever",
      "description": "Substituir o arquivo existente pela nova versão"
    },
    {
      "label": "Manter existente",
      "description": "Preservar o arquivo atual"
    },
    {
      "label": "Sobrescrever todos",
      "description": "Sobrescrever todos os arquivos existentes sem perguntar"
    }
  ],
  "multiSelect": false
}
```

### ETAPA 3: Criar Estrutura .claude/

Criar a pasta `.claude/` e suas subpastas:

```
.claude/
├── agents/
├── commands/
├── CONTEXT/
└── settings.json
```

### ETAPA 4: Copiar Agentes

Copiar todos os `.md` de `agents/` para `.claude/agents/`:

- `code-archaeologist.md` - Análise de código legado
- `debugger.md` - Debugging sistemático
- `documentation-writer.md` - Documentação técnica
- `frontend-specialist.md` - Frontend Angular 17+
- `mobile-developer.md` - React Native e Flutter

### ETAPA 5: Copiar Commands

Copiar todos os `.md` de `commands/` para `.claude/commands/`:

- `doc.md` - Geração de documentação
- `card.md` - Criação de User Stories
- `pr.md` - Padrões de Pull Request
- `revisar.md` - Revisão de código
- `implementar.md` - Implementação de features (baseado em referência)
- `arquitetura.md` - Diretrizes arquiteturais
- `debuggar.md` - Debugging sistemático

### ETAPA 6: Gerar Documentos de Contexto

Ler `templates/` e gerar em `.claude/CONTEXT/` substituindo os placeholders:

#### Placeholders para Substituir:
- `{{NOME_PROJETO}}` → Nome do projeto (detectado ou perguntar)
- `{{DATA_ATUAL}}` → Data atual no formato YYYY-MM-DD
- `{{STACK_PRINCIPAL}}` → Stack detectada (Angular 17, React, Node.js, Python, etc.)
- `{{LINGUAGEM}}` → Linguagem principal (TypeScript, JavaScript, Python, etc.)
- `{{FRAMEWORK}}` → Framework principal (@angular/core, react, express, fastapi, etc.)
- `{{VERSAO_FRAMEWORK}}` → Versão do framework (detectada do package.json)

#### Stacks Suportadas e Exemplos Específicos:

**Angular 17+** (detectado via `@angular/core` em package.json):
- Standalone Components
- Signals API
- OnPush Change Detection
- RxJS 7+
- Typed Forms
- New Control Flow (@if, @for, @switch)

**React** (detectado via `react` em package.json):
- Hooks (useState, useEffect, useContext, useMemo, useCallback)
- Context API
- Redux Toolkit
- React Query
- Next.js App Router

**Node.js** (detectado via package.json com express/fastify/nestjs):
- Express.js patterns
- Fastify
- NestJS (modular architecture)
- TypeORM / Prisma
- JWT auth

**Python** (detectado via requirements.txt ou pyproject.toml):
- FastAPI
- Django
- SQLAlchemy
- Pydantic
- Async/await patterns

**.NET** (detectado via *.csproj):
- Entity Framework Core
- Dependency Injection
- LINQ
- ASP.NET Core

**Rust** (detectado via Cargo.toml):
- Actix-web / Axum
- Diesel / SeaORM
- Serde
- Tokio async runtime

**Go** (detectado via go.mod):
- Gin / Echo
- GORM
- Context-based timeouts
- Goroutine patterns

#### Documentos a Gerar:

1. **PADROES_ARQUITETURA.md** - Padrões arquiteturais (EXPANDIDO)
2. **REVISAO_CODIGO.md** - Revisão de código (EXPANDIDO)
3. **CRIAR_CARD_TASK.md** - Criação de cards (EXPANDIDO)
4. **PADROES_DE_PR.md** - Padrões de PR (EXPANDIDO)
5. **SPEC_BUSINESS_RULES.md** - Regras de negócio (NOVO)
6. **SPEC_API_CONTRACT.md** - Contratos de API (NOVO)
7. **SPEC_DATA_MODEL.md** - Modelo de dados (NOVO)
8. **SPEC_WORKFLOW.md** - Workflows/processos (NOVO)

### ETAPA 7: Criar Arquivo settings.json

Criar `.claude/settings.json` com:

```json
{
  "statusLine": {
    "type": "text",
    "text": "SDD v2.0 | {{STACK_PRINCIPAL}}",
    "padding": 0
  }
}
```

### ETAPA 8: Validação e Relatório

Verificar criação de todos os arquivos e relatar:

```
## ✅ Instalação SDD Concluída

### 📁 Estrutura Criada:

| Pasta | Arquivos | Status |
|-------|----------|--------|
| .claude/agents/ | 5 agentes | ✅ |
| .claude/commands/ | 7 commands | ✅ |
| .claude/CONTEXT/ | 9 documentos | ✅ |

### 🎯 Stack Detectada: {{STACK_PRINCIPAL}}

### 🚀 Comandos Disponíveis:

| Comando | Descrição |
|---------|-----------|
| /doc | Gerar documentação |
| /card | Criar User Story |
| /pr | Criar Pull Request |
| /revisar | Revisar código |
| /implementar | Implementar features |
| /arquitetura | Diretrizes arquiteturais |
| /debuggar | Debugging sistemático |

### 📚 Contexto Disponível:

- `.claude/CONTEXT/README.md` - Hub central
- `.claude/CONTEXT/PADROES_ARQUITETURA.md` - Arquitetura específica para {{STACK_PRINCIPAL}}
- `.claude/CONTEXT/REVISAO_CODIGO.md` - Checklist de revisão
- `.claude/CONTEXT/CRIAR_CARD_TASK.md` - Templates de cards
- `.claude/CONTEXT/PADROES_DE_PR.md` - Templates de PR
- `.claude/CONTEXT/SPEC_BUSINESS_RULES.md` - Regras de negócio
- `.claude/CONTEXT/SPEC_API_CONTRACT.md` - Contratos de API
- `.claude/CONTEXT/SPEC_DATA_MODEL.md` - Modelo de dados
- `.claude/CONTEXT/SPEC_WORKFLOW.md` - Workflows

### 📝 Próximos Passos:

1. Revise os documentos em `.claude/CONTEXT/` e customize para seu projeto
2. Use `/arquitetura` para ver padrões específicos do {{STACK_PRINCIPAL}}
3. Use `/doc` para gerar documentação automaticamente
4. Use `/card` para criar User Stories a partir de mudanças
5. Use `/revisar` para revisar código antes de commit

---

**SDD v2.0 instalado com sucesso! 🎉**
```

---

## ⚠️ TRATAMENTO DE ERROS

### Se a stack não for reconhecida:

1. **Perguntar ao usuário** qual é a stack principal
2. **Gerar documentos** com placeholders genéricos
3. **Marcar seções** que precisam de revisão manual com `[REVISAR]`
4. **Informar** que documentos precisam de customização adicional

### Se não houver permissão para criar pastas:

1. **Informar o erro** ao usuário
2. **Sugerir** executar com permissões elevadas
3. **Oferecer** alternativa de manualmente copiar os arquivos

---

## 📝 NOTAS FINAIS

### Ao Gerar Documentos

- Usar **terminologia específica** da stack (não genérica)
- Incluir **exemplos de código reais** específicos para a stack detectada
- Manter **tamanho compacto** (100-200 linhas por documento)
- Adicionar **anti-patterns** específicos da linguagem/framework
- Focar em **valor prático** sobre teoria

### Exemplos por Stack

**Angular 17+ - PADROES_ARQUITETURA.md deve incluir:**
```typescript
// Exemplo de Standalone Component com Signals
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @for (user of users(); track user.id) {
      <a [routerLink]="['/user', user.id]">{{ user.name }}</a>
    }
  `
})
export class UserListComponent {
  users = signal<User[]>([]);
  userService = inject(UserService);

  ngOnInit() {
    this.users = this.userService.users;
  }
}
```

**React - PADROES_ARQUITETURA.md deve incluir:**
```typescript
// Exemplo de Custom Hook com useContext
const useUsers = () => {
  const { users, loading, error } = useContext(UserContext);
  const [filtered, setFiltered] = useState(users);

  useEffect(() => {
    setFiltered(users);
  }, [users]);

  return { users: filtered, loading, error };
};
```

**Python/FastAPI - SPEC_API_CONTRACT.md deve incluir:**
```python
# Exemplo de endpoint FastAPI
@app.get("/users/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    current_user: User = Depends(get_current_user)
) -> UserResponse:
    """Get user by ID with Pydantic validation."""
    user = await UserService.get_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
```

### Após Gerar

- Informar usuário sobre arquivos criados
- Sugerir revisão dos placeholders `[REVISAR]`
- Recomendar adicionar `.claude/CONTEXT/` ao version control
- Indicar próximos passos para customização
