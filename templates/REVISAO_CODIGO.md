---
title: "Revisão de Código - {{NOME_PROJETO}}"
version: "2.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["code-review", "quality", "{{LINGUAGEM}}"]
status: "active"
---

# 🔍 Revisão de Código - {{NOME_PROJETO}}

> **Metodologia sistemática de revisão de código** para garantir qualidade, segurança e conformidade com os padrões do {{NOME_PROJETO}}.

---

## 📋 Metodologia de Análise

### 1. Análise de Staged Changes

```bash
# Ver mudanças staged
git diff --cached --stat

# Ver mudanças em detalhes
git diff --cached

# Inventário por tipo de arquivo
git diff --cached --name-only | grep "\.ts$" | wc -l   # TypeScript
git diff --cached --name-only | grep "\.spec\." | wc -l  # Testes
git diff --cached --name-only | grep "\.scss$" | wc -l  # Estilos
```

### 2. Checklist de Priorização

**Analisar nesta ordem:**

1. **🔴 Crítico** - Bugs, security issues, breaking changes
2. **🟡 Importante** - Performance, maintainability, testes
3. **🟢 Otimização** - Style, small improvements, documentation

---

## ✅ Checklist Arquitetural

### Conformidade com Padrões

- [ ] **Estrutura de Arquivos** - Segue a estrutura definida em `PADROES_ARQUITETURA.md`
- [ ] **Nomenclatura** - Segue convenções de nomenclatura
- [ ] **Separation of Concerns** - Componentes, services, models separados
- [ ] **DRY** - Código não duplicado, abstrações apropriadas
- [ ] **SOLID** - Princípios SOLID aplicados
- [ ] **Design Patterns** - Padrões apropriados utilizados

{{#if STACK_PRINCIPAL contains "Angular"}}
### Angular Específico

- [ ] **Standalone** - Componentes são `standalone: true`
- [ ] **OnPush** - `ChangeDetectionStrategy.OnPush` utilizado
- [ ] **Signals** - Signals usados para estado (não propriedades públicas)
- [ ] **New Control Flow** - `@if`, `@for` usados em vez de `*ngIf`, `*ngFor`
- [ ] **Typed Forms** - Forms completamente tipados
- [ ] **TrackBy** - `@for` com `track` definido
- [ ] **Immutability** - Signals não são mutados diretamente
- [ ] **Cleanup** - `DestroyRef` ou `takeUntilDestroyed` para cleanup
- [ ] **Input/Output** - `input()` e `output()` usados
- [ ] **No NgModules** - Componentes não usam NgModules
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
### React Específico

- [ ] **Components** - Functional components com hooks
- [ ] **Props** - Tipadas com interfaces/types
- [ ] **Dependencies** - Arrays de dependência corretos
- [ ] **Memoization** - `useMemo`, `useCallback`, `React.memo` apropriados
- [ ] **Keys** - Keys únicas e estáveis em lists
- [ ] **Cleanup** - Cleanup functions em `useEffect`
- [ ] **No Prop Mutation** - Props nunca são mutadas
- [ ] **State** - Estado local apropriado vs global
{{/if}}

---

## 🔒 Checklist de Segurança

### Proteção de Dados

- [ ] **Dados Sensíveis** - API keys, tokens, senhas não expostos
- [ ] **Sanitização** - Inputs sanitizados corretamente
- [ ] **XSS Prevention** - Templates escapados corretamente
- [ ] **CSRF Protection** - Tokens CSRF implementados
- [ ] **SQL Injection** - Queries parametrizadas
- [ ] **Auth** - Autenticação/autorização validadas
- [ ] **Logs** - Logs não contêm dados sensíveis (senhas, tokens)
- [ ] **Dependencies** - Sem vulnerabilidades conhecidas (check via `npm audit`)

### Exemplos de Problemas

```typescript
// ❌ INSEGURO - SQL Injection
query(`SELECT * FROM users WHERE id = ${userId}`)

// ✅ SEGURO - Query parametrizada
query(`SELECT * FROM users WHERE id = ?`, [userId])

// ❌ INSEGURO - Token exposto
console.log('Token:', authToken)

// ✅ SEGURO - Log sem dado sensível
console.log('Auth configured')

// ❌ INSEGURO - XSS possível
<div [innerHTML]="userInput"></div>

// ✅ SEGURO - Conteúdo escapado
<div>{{ userInput }}</div>
```

---

## ⚡ Checklist de Performance

### Otimizações

- [ ] **Lazy Loading** - Features/carregados sob demanda
- [ ] **Memoization** - Valores computados cacheados
- [ ] **Virtualization** - Listas grandes virtualizadas
- [ ] **Bundle Size** - Sem dependências desnecessárias
- [ ] **Network** - Requests agrupadas/minimizadas
- [ ] **Memory Leaks** - Subscriptions, listeners cleanup
- [ ] **Re-renders** - Evitar re-renders desnecessários

{{#if STACK_PRINCIPAL contains "Angular"}}
### Angular Performance

```typescript
// ❌ Performance ruim
@Component({
  template: `
    <div *ngFor="let item of items">{{ expensiveTransform(item) }}</div>
  `
})
export class BadComponent {
  items: Item[] = [];
  expensiveTransform(item: Item) {
    return heavyCalculation(item);
  }
}

// ✅ Performance otimizada
@Component({
  template: `
    @for (item of items(); track item.id) {
      <div>{{ item.transformed }}</div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent {
  items = signal<Item[]>([]);
  transformed = computed(() =>
    this.items().map(item => ({...item, transformed: heavyCalculation(item)}))
  );
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
### React Performance

```typescript
// ❌ Performance ruim
function BadComponent({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map(item => (
        <ExpensiveChild key={item.id} item={item} />
      ))}
    </div>
  );
}

// ✅ Performance otimizada
const GoodComponent = memo(function GoodComponent({ items }: { items: Item[] }) {
  return (
    <VirtualizedList
      items={items}
      renderItem={(item) => <ExpensiveChild key={item.id} item={item} />}
    />
  );
});
```
{{/if}}

---

## 🧪 Checklist de Testes

### Cobertura de Testes

- [ ] **Unit Tests** - Lógica coberta por testes unitários
- [ ] **Integration Tests** - Fluxos integrados testados
- [ ] **Edge Cases** - Casos de borda cobertos
- [ ] **Error Cases** - Erros tratados e testados
- [ ] **Mocking** - Dependências externas mockadas
- [ ] **Assertions** - Assertivas significativas

{{#if STACK_PRINCIPAL contains "Angular"}}
### Angular Testing

```typescript
// ✅ Teste de componente com signals
describe('UserListComponent', () => {
  it('displays users', () => {
    const users = signal([{ id: 1, name: 'Test' }]);
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentRef.setInput('users', users);

    expect(fixture.nativeElement.textContent).toContain('Test');
  });

  it('handles empty state', () => {
    const users = signal<User[]>([]);
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentRef.setInput('users', users);

    expect(fixture.nativeElement.textContent).toContain('No users found');
  });
});
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
### React Testing

```typescript
// ✅ Teste de hook customizado
describe('useUsers', () => {
  it('fetches users', async () => {
    const { result } = renderHook(() => useUsers());
    await waitFor(() => expect(result.current.users.length).toBeGreaterThan(0));
  });
});

// ✅ Teste de componente
describe('UserList', () => {
  it('renders users', () => {
    const users = [{ id: 1, name: 'Test' }];
    render(<UserList users={users} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```
{{/if}}

---

## 🚨 Detecção de Problemas

### Red Flags Específicas

{{#if STACK_PRINCIPAL contains "Angular"}}
| Red Flag | Problema | Solução |
|----------|----------|---------|
| `any` tipo | Perde type safety | Definir interface/type |
| `*ngFor` sem trackBy | Performance ruim | Usar `@for` com track |
| `ViewChild` legacy | Padrão antigo | Usar `viewChild` signal |
| `ngOnChanges` | Não necessário com signals | Usar `computed()` |
| `subscribe()` manual | Memory leak risk | Usar `async` ou `toSignal()` |
| NgModules | Arquitetura antiga | Usar standalone |
| Mutable signal update | Bug potencial | Usar `.update()` ou `.mutate()` |
| `setTimeout` | Race condition | Usar `effect()` com `DestroyRef` |
| Missing `OnPush` | CD desnecessário | Adicionar `OnPush` |
| Global services | Não singleton | Mover para `core/` |
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
| Red Flag | Problema | Solução |
|----------|----------|---------|
| `any` tipo | Perde type safety | Definir interface/type |
| Missing dependencies | Bug/stale closure | Adicionar ao array |
| Prop mutation | Bug/imutabilidade | Nunca mutar props |
| Missing key | Warning/performance | Adicionar key única |
| useEffect sem deps | Sempre executa | Adicionar array vazio |
| Estado derivado em state | Desincronização | Usar `useMemo` |
| Inline functions | Re-renders | Usar `useCallback` |
| Huge components | Difícil manutenção | Dividir |
| Prop drilling | Complexidade | Usar Context/state |
| Missing cleanup | Memory leak | Add return cleanup |
{{/if}}

### Comandos de Detecção

```bash
# Encontrar tipos 'any'
grep -r ":\s*any" src/

# Encontrar console.log
grep -r "console\.log" src/

# Encontrar TODO/FIXME
grep -r "TODO\|FIXME" src/

# Ver bundle size
npm run build -- --stats

# Check vulnerabilities
npm audit

# Lint
npm run lint
```

---

## 📊 Análise de Impacto

### Cross-Domain Impact

| Domínio Afetado | Verificar |
|-----------------|-----------|
| **Frontend** | Componentes, templates, estilos |
| **Backend** | APIs, services, repositories |
| **Database** | Migrations, schemas |
| **Performance** | Bundle size, load time, memory |
| **Security** | Auth, data validation, sanitization |
| **Tests** | Test coverage, test flakiness |
| **Documentation** | README, API docs, comments |

### Performance Impact

- **Frontend**: Bundle size impact, render performance
- **Backend**: Response time, database queries
- **Network**: API calls size, frequency

### Maintainability Impact

- **Complexity**: Cyclomatic complexity increased?
- **Dependencies**: New dependencies added?
- **Coupling**: Tight coupling introduced?
- **Technical Debt**: Code quality improved or degraded?

---

## 📝 Formato de Resposta

### Template de Revisão

```markdown
# 🔍 Revisão de Código - [Feature/Commit]

## 📊 Resumo

- **Arquivos alterados:** X
- **Linhas adicionadas:** +XXX
- **Linhas removidas:** -XXX
- **Tipo de mudança:** feat/fix/refactor/docs/test

## 🟢 Aprovações

✅ **Bons pontos:**
- Padrões arquiteturais seguidos
- Componentes com `OnPush`
- Testes adicionados
- Performance considerada

## 🟡 Melhorias Sugeridas

### [Arquivo]
**Issue:** Descrição do problema
**Sugestão:** Como melhorar

```typescript
// ❌ Atual
code atual

// ✅ Sugerido
code melhorado
```

## 🔴 Problemas Críticos

### [Arquivo]
**Issue:** Descrição crítica
**Risco:** Explicação do risco
**Correção:** Necessária antes do merge

## 📊 Score de Qualidade

| Critério | Score (1-5) | Observações |
|----------|-------------|-------------|
| Arquitetura | 5/5 | Segue padrões |
| Performance | 4/5 | Pequena otimização possível |
| Segurança | 5/5 | Sem issues |
| Testes | 3/5 | Adicionar testes de edge cases |
| Documentação | 4/5 | Adicionar JSDoc |

**Score Final:** 4.2/5

## ✅ Conclusão

**Status:** ✅ Aprovado com sugestões

**Próximos passos:**
1. Aplicar melhorias sugeridas (opcional)
2. Adicionar testes de edge cases
3. Adicionar JSDoc em funções públicas

---

**Revisor:** [Nome]
**Data:** [Data]
```

---

## 🎯 Priorização de Feedback

### Categorias de Mudança

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **Must Fix** | Bloqueia merge | Security bug, breaking change |
| **Should Fix** | Importante mas não bloqueia | Performance issue, missing test |
| **Consider** | Sugestão | Code style, alternative approach |
| **Nitpick** | Menor | Spacing, naming preference |

### Templates de Feedback

#### Must Fix
```markdown
🔴 **MUST FIX** - [Nome do arquivo]

**Problema:** [Descrição clara]
**Risco:** [Por que precisa ser corrigido]
**Solução:** [Como corrigir]
```

#### Should Fix
```markdown
🟡 **SHOULD FIX** - [Nome do arquivo]

**Problema:** [Descrição]
**Impacto:** [Impacto esperado]
**Sugestão:** [Sugestão de melhoria]
```

#### Consider
```markdown
🟢 **CONSIDER** - [Nome do arquivo]

**Observação:** [Descrição]
**Alternativa:** [Abordagem alternativa]
**Benefício:** [Benefício da alternativa]
```

---

## 📌 Sugestão de Commit Message

### Padrão de Commits

```
<tipo>(<escopo>): <descrição>

[opcional: corpo explicativo]

[opcional: footer com issues breaking changes]
```

### Tipos de Commit

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova funcionalidade | `feat(auth): add JWT refresh` |
| `fix` | Bug fix | `fix(user): prevent duplicate save` |
| `refactor` | Refatoração | `refactor(api): extract service layer` |
| `perf` | Performance | `perf(list): implement virtualization` |
| `test` | Testes | `test(user): add integration tests` |
| `docs` | Documentação | `docs(readme): add setup instructions` |
| `style` | Estilo | `style(component): format code` |
| `chore` | Tarefas | `chore(deps): update dependencies` |
| `ci` | CI/CD | `ci(github): add workflow` |

### Exemplos por Categoria

```bash
# Nova feature
git commit -m "feat(user-list): add pagination and filtering"

# Bug fix
git commit -m "fix(auth): resolve token expiration edge case"

# Refactor
git commit -m "refactor(component): extract logic to service"

# Performance
git commit -m "perf(list): implement trackBy for optimization"

# Test
git commit -m "test(api): add integration tests for endpoints"
```

---

## 🔧 Checklists por Tipo de Mudança

### Nova Feature (`feat`)

- [ ] Funcionalidade implementada
- [ ] Testes unitários adicionados
- [ ] Testes de integração adicionados
- [ ] Documentação atualizada
- [ ] Type safety mantida
- [ ] Sem regressões
- [ ] Performance impactada positivamente ou neutra

### Bug Fix (`fix`)

- [ ] Bug corrigido
- [ ] Teste adicionado para prevenir regressão
- [ ] Causa raiz identificada
- [ ] Soluções alternativas consideradas
- [ ] Side effects avaliados

### Refactor (`refactor`)

- [ ] Comportamento mantido
- [ ] Testes existentes passam
- [ ] Código mais limpo/maintainable
- [ ] Complexidade reduzida
- [ ] Padrões seguidos

### Performance (`perf`)

- [ ] Benchmark antes/depois
- [ ] Melhoria mensurável
- [ ] Sem regressões
- [ ] Complexidade justificada

---

## 📚 Referências

- [Documentação de Padrões](./PADROES_ARQUITETURA.md)
- [Documentação Oficial {{STACK_PRINCIPAL}}](https://{{STACK_PRINCIPAL}}.dev)
- [Clean Code Principles](https://github.com/ryanmcdermott/clean-code-javascript)

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 2.0.0
**Maintainer:** Equipe {{NOME_PROJETO}}
