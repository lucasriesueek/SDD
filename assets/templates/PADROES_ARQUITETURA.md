---
title: "Padrões Arquiteturais - {{NOME_PROJETO}}"
version: "2.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["architecture", "patterns", "{{LINGUAGEM}}"]
status: "active"
---

# 🏗 Padrões Arquiteturais - {{NOME_PROJETO}}

> **Diretrizes arquiteturais e padrões de código** para desenvolvimento consistente e maintainable no {{NOME_PROJETO}}.

---

## 📋 Stack Tecnológica

| Componente | Versão | Propósito |
|------------|--------|-----------|
| **Framework** | {{FRAMEWORK}} v{{VERSAO_FRAMEWORK}} | Framework principal |
| **Linguagem** | {{LINGUAGEM}} | Linguagem de desenvolvimento |
| **Build Tool** | [DETECTAR] | Build e bundling |
| **Test Runner** | [DETECTAR] | Testes automatizados |
| **Linter** | [DETECTAR] | Qualidade de código |
| **Package Manager** | [DETECTAR] | Gerenciamento de dependências |

### Dependências Críticas

[LISTAR DEPENDÊNCIAS PRINCIPAIS DO PROJETO]

---

## 📁 Estrutura de Diretórios

```
{{NOME_PROJETO}}/
├── src/
│   ├── [estrutura específica da stack]
├── tests/                       # Testes unitários e integração
├── docs/                        # Documentação adicional
├── .claude/                     # Configurações Claude Code
│   ├── agents/                  # Agentes especializados
│   ├── commands/                # Commands/Skills
│   └── CONTEXT/                 # Documentos de contexto
└── [arquivos de configuração]
```

{{#if STACK_PRINCIPAL contains "Angular"}}
### Estrutura Angular Específica

```
src/
├── app/
│   ├── core/                    # Singleton services e interfaces globais
│   │   ├── services/            # Services singleton (auth, api, etc)
│   │   ├── interceptors/        # HTTP interceptors
│   │   ├── guards/              # Route guards
│   │   └── models/              # Interfaces e tipos globais
│   ├── features/                # Feature modules (lazy-loaded)
│   │   ├── [feature-name]/
│   │   │   ├── components/      # Componentes da feature
│   │   │   ├── services/        # Services específicos da feature
│   │   │   ├── models/          # Interfaces e tipos específicos
│   │   │   └── [feature].routes.ts
│   ├── shared/                  # Componentes e pipes compartilhados
│   │   ├── components/          # Componentes reutilizáveis
│   │   ├── pipes/               # Pipes customizados
│   │   ├── directives/          # Directives customizadas
│   │   └── validators/          # Validadores customizados
│   └── app.routes.ts            # Rotas principais
├── environments/                # Configurações de ambiente
└── styles/                      # Estilos globais
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
### Estrutura React Específica

```
src/
├── components/                  # Componentes reutilizáveis
│   ├── ui/                      # Componentes UI base
│   └── [domain]/                # Componentes de domínio
├── hooks/                       # Custom hooks
├── context/                     # Context providers
├── services/                    # API services e business logic
├── store/                       # State management (Redux/Zustand)
├── utils/                       # Utility functions
├── types/                       # TypeScript types/interfaces
└── App.tsx
```
{{/if}}

{{#if STACK_PRINCIPAL contains "Node"}}
### Estrutura Node.js Específica

```
src/
├── controllers/                 # Request handlers
├── services/                    # Business logic
├── repositories/                # Data access
├── models/                      # Data models
├── middlewares/                 # Express middlewares
├── routes/                      # Route definitions
├── utils/                       # Utility functions
├── config/                      # Configuration
└── server.ts                    # Entry point
```
{{/if}}

{{#if STACK_PRINCIPAL contains "Python"}}
### Estrutura Python Específica

```
src/
├── api/                         # API endpoints (FastAPI/Flask)
│   ├── v1/                      # API version 1
│   └── dependencies.py          # Dependencies
├── core/                        # Core functionality
│   ├── config.py                # Configuration
│   ├── security.py              # Security utilities
│   └── database.py              # Database setup
├── models/                      # Data models (SQLAlchemy/Pydantic)
├── services/                    # Business logic
├── repositories/                # Data access
├── schemas/                     # Pydantic schemas
└── main.py                      # Application entry
```
{{/if}}

---

## 🎨 Padrões de Código

### Princípios SOLID Aplicados

1. **Single Responsibility** - Cada componente/função tem uma única responsabilidade
2. **Open/Closed** - Aberto para extensão, fechado para modificação
3. **Liskov Substitution** - Subtipos podem substituir tipos base
4. **Interface Segregation** - Interfaces pequenas e específicas
5. **Dependency Inversion** - Dependa de abstrações, não de implementações

### Design Patterns Utilizados

| Pattern | Descrição | Exemplo de Uso |
|---------|-----------|----------------|
| **Repository** | Abstração de acesso a dados | `UserRepository` para operações de DB |
| **Service** | Lógica de negócio | `AuthService` para autenticação |
| **Factory** | Criação de objetos complexos | `ComponentFactory` para componentes |
| **Observer** | Reação a mudanças | Signals/Observable para reatividade |
| **Strategy** | Algoritmos intercambiáveis | `ValidationStrategy` para validações |
| **Singleton** | Única instância | Services singleton em `core/` |

---

## 📝 Convenções de Nomenclatura

{{#if STACK_PRINCIPAL contains "Angular"}}
### Angular Conventions

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| **Componentes** | PascalCase + sufixo Component | `UserListComponent` |
| **Directives** | PascalCase + sufixo Directive | `HighlightDirective` |
| **Pipes** | PascalCase + sufixo Pipe | `DateFormatPipe` |
| **Services** | PascalCase + sufixo Service | `UserService` |
| **Interfaces** | PascalCase + prefixo I | `IUser`, `ApiResponse` |
| **Types** | PascalCase | `UserType`, `HttpHeaders` |
| **Enums** | PascalCase | `UserRole`, `HttpStatus` |
| **Constantes** | UPPER_SNAKE_CASE | `API_BASE_URL`, `MAX_RETRY` |
| **Variáveis** | camelCase | `userName`, `isLoading` |
| **Privadas** | camelCase + prefixo _ | `_internalState` |
| **Observables** | camelCase + sufixo $ | `users$`, `data$` |
| **Arquivos** | kebab-case | `user-list.component.ts` |
| **Seletores** | kebab-case + prefixo app | `app-user-list` |
| **Testes** | mesmo nome + .spec.ts | `user-list.component.spec.ts` |

### Componente Modelo

```typescript
// user-list.component.ts
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  // ✅ Signal para estado
  private readonly userService = inject(UserService);
  readonly users = signal<User[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  // ✅ Computado
  readonly activeUsers = computed(() =>
    this.users().filter(u => u.active)
  );

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.loading.set(true);
    this.userService.getUsers().pipe(
      catchError(err => {
        this.error.set(err.message);
        return of([]);
      }),
      finalize(() => this.loading.set(false))
    ).subscribe(users => this.users.set(users));
  }
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
### React Conventions

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| **Componentes** | PascalCase | `UserList`, `Button` |
| **Custom Hooks** | camelCase + prefixo use | `useUsers`, `useAuth` |
| **Contexts** | PascalCase + Context | `UserContext` |
| **Types/Interfaces** | PascalCase | `UserType`, `ApiResponse` |
| **Enums** | PascalCase | `UserRole`, `Status` |
| **Constantes** | UPPER_SNAKE_CASE | `API_BASE_URL` |
| **Variáveis** | camelCase | `userName`, `isLoading` |
| **Arquivos** | kebab-case ou PascalCase | `user-list.tsx` ou `UserList.tsx` |
| **Testes** | mesmo nome + .test.tsx | `UserList.test.tsx` |

### Componente Modelo

```typescript
// user-list.tsx
interface UserListProps {
  filter?: 'active' | 'inactive';
}

export function UserList({ filter }: UserListProps) {
  // ✅ Custom hooks
  const { users, loading, error } = useUsers();

  // ✅ Memoização
  const filteredUsers = useMemo(() =>
    users.filter(u => filter ? u.status === filter : true),
    [users, filter]
  );

  // ✅ Early return
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <ul>
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "Node"}}
### Node.js Conventions

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| **Classes** | PascalCase | `UserService`, `ApiController` |
| **Interfaces** | PascalCase + prefixo I | `IUser`, `IRepository` |
| **Types** | PascalCase | `UserType`, `HttpRequest` |
| **Funções** | camelCase | `getUserById`, `validateEmail` |
| **Constantes** | UPPER_SNAKE_CASE | `API_BASE_URL` |
| **Arquivos** | kebab-case | `user.service.ts` |
| **Rotas** | kebab-case | `/api/users/:id` |

### Service Modelo

```typescript
// user.service.ts
export class UserService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly logger: Logger
  ) {}

  async getUserById(id: string): Promise<User> {
    try {
      const user = await this.userRepository.findById(id);
      if (!user) {
        throw new NotFoundError(`User ${id} not found`);
      }
      return user;
    } catch (error) {
      this.logger.error('Failed to get user', { id, error });
      throw error;
    }
  }
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "Python"}}
### Python Conventions

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| **Classes** | PascalCase | `UserService`, `ApiController` |
| **Funções/Métodos** | snake_case | `get_user_by_id`, `validate_email` |
| **Constantes** | UPPER_SNAKE_CASE | `API_BASE_URL` |
| **Variáveis** | snake_case | `user_name`, `is_loading` |
| **Privadas** | snake_case + prefixo _ | `_internal_state` |
| **Módulos** | snake_case | `user_service.py` |
| **Rotas** | kebab-case | `/api/users/:id` |

### Service Modelo

```python
# user_service.py
class UserService:
    def __init__(self, user_repository: IUserRepository, logger: Logger):
        self._user_repository = user_repository
        self._logger = logger

    async def get_user_by_id(self, user_id: str) -> User:
        try:
            user = await self._user_repository.find_by_id(user_id)
            if not user:
                raise NotFoundError(f"User {user_id} not found")
            return user
        except Exception as e:
            self._logger.error("Failed to get user", {"id": user_id, "error": str(e)})
            raise
```
{{/if}}

---

## 🔄 Arquitetura de Serviços

### Fluxo de Dados

```
┌─────────────┐
│   UI View   │
└──────┬──────┘
       │ User Action
       ▼
┌─────────────┐
│  Component  │ ← Signals/State
└──────┬──────┘
       │ Call Service
       ▼
┌─────────────┐
│   Service   │ ← Business Logic
└──────┬──────┘
       │ Query/Mutate
       ▼
┌─────────────┐
│ Repository  │ ← Data Access
└──────┬──────┘
       │ HTTP/SQL
       ▼
┌─────────────┐
│   API/DB    │
└─────────────┘
```

### Comunicação entre Componentes

{{#if STACK_PRINCIPAL contains "Angular"}}
- **Input Signals** - `input.required<T>()` para dados de entrada
- **Output Events** - `output<T>()` para eventos
- **Services** - Dependency Injection para shared state
- **Signals** - Cross-component reactivity
- **RxJS** - Complex async workflows
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
- **Props** - Dados de entrada (unidirectional)
- **Callbacks** - Eventos de volta para o pai
- **Context API** - Shared state global
- **Custom Hooks** - Lógica compartilhada
- **State Management** - Redux/Zustand para complex state
{{/if}}

### Injeção de Dependências

{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
// ✅ Constructor injection (padrão)
constructor(private readonly userService: UserService) {}

// ✅ Inject function (nova API)
private readonly userService = inject(UserService);

// ✅ Inject com token customizado
private readonly config = inject(CONFIG_TOKEN);
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
```typescript
// ✅ Context para DI
const ServiceContext = createContext<Service>(null!);

function Provider({ children }: { children: ReactNode }) {
  const service = useMemo(() => new Service(), []);
  return (
    <ServiceContext.Provider value={service}>
      {children}
    </ServiceContext.Provider>
  );
}
```
{{/if}}

---

## ⚡ Performance e Memory Management

### Práticas Críticas

{{#if STACK_PRINCIPAL contains "Angular"}}
1. **OnPush Change Detection** - Sempre usar `ChangeDetectionStrategy.OnPush`
2. **Signals** - Preferir Signals sobre Observables para estado simples
3. **TrackBy** - Sempre usar `trackBy` em `@for`
4. **Pure Pipes** - Usar pipes puros para transformações
5. **Lazy Loading** - Carregar features sob demanda
6. **Unsubscribing** - Usar `takeUntilDestroyed()` ou `async` pipe

```typescript
// ✅ Performance otimizada
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedComponent {
  users = signal<User[]>([]);

  // ✅ TrackBy em @for
  trackUser = (index: number, user: User) => user.id;

  // ✅ Computed é lazy
  activeCount = computed(() => this.users().filter(u => u.active).length);
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
1. **React.memo** - Memoizar componentes que não mudam frequentemente
2. **useMemo** - Memoizar valores computados caros
3. **useCallback** - Memoizar callbacks para filhos
4. **Code Splitting** - Lazy loading de rotas e componentes
5. **Virtualization** - Para listas grandes

```typescript
// ✅ Performance otimizada
export const UserList = memo(function UserList({ users }: Props) {
  const filtered = useMemo(() =>
    users.filter(u => u.active),
    [users]
  );

  const handleClick = useCallback((id: string) => {
    // ...
  }, []);

  return (
    <VirtualizedList items={filtered} renderItem={UserCard} />
  );
});
```
{{/if}}

### Cleanup Patterns

{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
// ✅ Auto-cleanup com effects
effect((onCleanup) => {
  const timer = setInterval(...);
  onCleanup(() => clearInterval(timer));
});

// ✅ Auto-cleanup com DestroyRef
destroyRef = inject(DestroyRef);
destroyRef.onDestroy(() => cleanup());
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
```typescript
// ✅ Cleanup em useEffect
useEffect(() => {
  const subscription = observable.subscribe(...);
  return () => subscription.unsubscribe();
}, []);
```
{{/if}}

---

## 🚫 Anti-Patterns

### O Que NÃO Fazer

{{#if STACK_PRINCIPAL contains "Angular"}}
| ❌ Anti-Pattern | ✅ Solução |
|-----------------|-------------|
| `any` em tipos | Usar interfaces/types |
| `*ngFor` sem `trackBy` | Usar `@for (item of items; track item.id)` |
| `Default` change detection | Usar `OnPush` |
| Subscribe manual | Usar `async` pipe ou `toSignal()` |
| ngOnChanges | Usar `computed()` ou signals |
| NgModules | Usar `standalone: true` |
| `ViewChild` | Usar `viewChild` com signals |
| Mutar signals diretamente | Usar `.update()` ou `.mutate()` |
| Services instanciados local | Injetar via DI |
| Lógica no template | Mover para componente/service |

```typescript
// ❌ Anti-patterns
@Component({
  template: `<div *ngFor="let item of items">{{ item }}</div>`
})
export class BadComponent {
  items: any[] = [];
  @ViewChild('elm') elm: ElementRef;

  ngOnInit() {
    this.service.data$.subscribe(data => this.items = data);
  }
}

// ✅ Correto
@Component({
  standalone: true,
  imports: [CommonModule],
  template: `@for (item of items(); track item.id) { {{item.name}} }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent {
  items = toSignal(this.service.data$, { initialValue: [] });
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
| ❌ Anti-Pattern | ✅ Solução |
|-----------------|-------------|
| `any` em tipos | Usar interfaces/types |
| Missing dependencies | Incluir todas as dependências |
| Props mutation | Nunca mutar props |
| Estado derivado em state | Usar `useMemo` |
| Funções no JSX | Usar `useCallback` |
| useEffect desnecessário | Usar lógica direta |
| Huge components | Dividir em menores |
| Prop drilling | Usar Context ou state mgmt |

```typescript
// ❌ Anti-patterns
function BadComponent({ items }: { items: Item[] }) {
  const [filtered, setFiltered] = useState(items.filter(...)); // ❌

  return (
    <div>
      {items.map(item => <div onClick={() => handleClick(item.id)}>...</div>)}
    </div>
  );
}

// ✅ Correto
function GoodComponent({ items }: { items: Item[] }) {
  const filtered = useMemo(() => items.filter(...), [items]);
  const handleClick = useCallback((id: string) => {...}, []);

  return (
    <div>
      {items.map(item => <ItemCard key={item.id} item={item} onClick={handleClick} />)}
    </div>
  );
}
```
{{/if}}

---

## 📚 Padrões Específicos por Stack

### Padrões de Cache

{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
// ✅ Cache com signals
export class CachedUserService {
  private cache = new Map<string, Signal<User>>();

  getUser(id: string): Signal<User | undefined> {
    if (!this.cache.has(id)) {
      const user = toSignal(this.http.get<User>(`/users/${id}`));
      this.cache.set(id, user);
    }
    return this.cache.get(id)!;
  }
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
```typescript
// ✅ Cache com React Query
const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => api.getUser(id),
    staleTime: 5 * 60 * 1000, // 5 min
  });
};
```
{{/if}}

### Padrões de Error Handling

{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
// ✅ Global error handler
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    if (error instanceof HttpErrorResponse) {
      // Handle HTTP errors
    } else if (error instanceof Error) {
      // Handle client errors
    }
    console.error('Error:', error);
  }
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
```typescript
// ✅ Error boundary
class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackError />;
    }
    return this.props.children;
  }
}
```
{{/if}}

---

## 🔍 Referências

- [Documentação Oficial {{STACK_PRINCIPAL}}](https://{{STACK_PRINCIPAL}}.dev)
- [Style Guide {{STACK_PRINCIPAL}}](https://{{STACK_PRINCIPAL}}.dev/guide/styleguide)

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 2.0.0
**Maintainer:** Equipe {{NOME_PROJETO}}
