---
title: "Criação de User Stories - {{NOME_PROJETO}}"
version: "2.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["agile", "user-stories", "{{LINGUAGEM}}"]
status: "active"
---

# 📋 Criação de User Stories - {{NOME_PROJETO}}

> **Metodologia estruturada para criar User Stories e cards** baseados em mudanças no código ou requisitos do {{NOME_PROJETO}}.

---

## 🎯 Objetivo

Criar cards bem estruturados baseados em:
- **Staged changes** - Mudanças preparadas para commit
- **Commits específicos** - Commits já realizados
- **Requisitos de negócio** - Features solicitadas
- **Bugs reportados** - Issues e defeitos

---

## 📝 Estrutura do Card

### Template Completo

```markdown
## **[TIPO] Título Específico da Funcionalidade**

### **User Story**

**Como** [persona]
**Eu quero** [ação/funcionalidade]
**Para que** [benefício de negócio]

### **Contexto**

[Descrição do contexto de negócio, por que isso é importante agora]

### **Acceptance Criteria**

✅ **AC1 - [Nome do Critério]**

**Dado** que [contexto/pré-condição]
**Quando** [ação/gatilho]
**Então** [resultado esperado]

✅ **AC2 - [Nome do Critério]**

**Dado** que [contexto/pré-condição]
**Quando** [ação/gatilho]
**Então** [resultado esperado]

### **Definition of Done**

- [ ] Funcionalidade implementada conforme AC
- [ ] Testes unitários escritos (>80% cobertura)
- [ ] Testes de integração escritos
- [ ] Code review aprovado
- [ ] Documentação atualizada
- [ ] Sem regressões
- [ ] Performance validada
- [ ] Accessibility verificada

### **Como Testar**

#### Cenário 1: [Nome]
**Passos:**
1. [Ação 1]
2. [Ação 2]
3. [Ação 3]

**Resultado Esperado:** [Descrição]

#### Cenário 2: [Nome]
**Passos:**
1. [Ação 1]
2. [Ação 2]

**Resultado Esperado:** [Descrição]

### **Arquivos Impactados**

| Arquivo | Mudança | Impacto |
| ------- | ------- | ------- |
| `path/to/file.ext` | Descrição | Alto/Médio/Baixo |
| `path/to/file.ext` | Descrição | Alto/Médio/Baixo |

### **Dependencies**

- [ ] [Card/Feature #ID] - Descrição da dependência
- [ ] [Card/Feature #ID] - Descrição da dependência

### **Notas Técnicas**

[Observações técnicas importantes para implementação]

### **Critério de Sucesso**

[Métricas ou critérios que definem sucesso da implementação]
```

---

## 👥 Personas do Projeto

### Personas Principais

{{#if STACK_PRINCIPAL contains "Angular"}}
| Persona | Papel | Foco | Necessidades |
|---------|-------|------|--------------|
| **Usuário Final** | Cliente do sistema | Usabilidade, funcionalidade | Interface intuitiva, respostas rápidas |
| **Administrador** | Gestor do sistema | Configuração, controle | Painel admin, relatórios |
| **Desenvolvedor** | Maintainer | Código limpo, documentação | Padrões claros, testes |
| **DevOps** | Deploy, infraestrutura | CI/CD, monitoramento | Builds estáveis, logs |
{{/if}}

### Exemplo de Persona Detalhada

```markdown
## Persona: Usuário Final - Maria

**Perfil:**
- Idade: 35 anos
- Profissão: Gerente de projetos
- Nível técnico: Intermediário
- Frequência de uso: Diária

**Objetivos:**
- Acessar informações rapidamente
- Realizar tarefas com mínimos cliques
- Ter feedback claro das ações

**Frustrações:**
- Interfaces lentas
- Mensagens de erro confusas
- Fluxos complexos

**Necessidades:**
- Interface responsiva
- Feedback visual imediato
- Ajuda contextual
```

---

## 📊 Matriz de Priorização

### RICE Score

| Critério | Peso (1-10) | Justificativa |
|----------|-------------|---------------|
| **Reach** (Alcance) | X | Quantos usuários impactados |
| **Impact** (Impacto) | X | Quanto impacto nos objetivos |
| **Confidence** (Confiança) | X | Quanta confiança na estimativa |
| **Effort** (Esforço) | X | Quanto esforço para implementar |

**Score Final:** (Reach × Impact × Confidence) / Effort = [Score]

### MoSCoW Method

| Categoria | Descrição | Quando usar |
|-----------|-----------|-------------|
| **Must Have** | Crítico para release | Bloqueador, core feature |
| **Should Have** | Importante mas não crítico | Alto valor, esforço médio |
| **Could Have** | Nice to have | Baixo valor, baixo esforço |
| **Won't Have** | Fora de escopo | Fora do roadmap |

---

## 🎨 Templates por Tipo de Mudança

### Feature Nova (`feat`)

```markdown
## **[FEAT] Adicionar [Funcionalidade]**

### **User Story**

Como [persona] eu quero [funcionalidade] para que [benefício]

### **Acceptance Criteria**

✅ **AC1 - [Funcionalidade Principal]**
Dado que [contexto]
Quando [ação]
Então [resultado]

✅ **AC2 - [Validação]**
Dado que [contexto]
Quando [input inválido]
Então [mensagem de erro]

✅ **AC3 - [Edge Case]**
Dado que [contexto]
Quando [condição especial]
Então [comportamento esperado]

### **Technical Considerations**

{{#if STACK_PRINCIPAL contains "Angular"}}
- [ ] Criar componente standalone
- [ ] Usar Signals para estado
- [ ] Implementar OnPush
- [ ] Adicionar testes
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
- [ ] Criar componente funcional
- [ ] Usar hooks apropriados
- [ ] Implementar memoização
- [ ] Adicionar testes
{{/if}}
```

### Bug Fix (`fix`)

```markdown
## **[FIX] Corrigir [Problema]**

### **Descrição do Bug**

[Descrição clara do problema]

**Passos para Reproduzir:**
1. [Ação 1]
2. [Ação 2]
3. [Ação 3]

**Comportamento Atual:** [O que acontece]
**Comportamento Esperado:** [O que deveria acontecer]

**Ambiente:**
- Stack: {{STACK_PRINCIPAL}}
- Versão: [Versão]
- Browser/OS: [Browser/OS]

### **Root Cause**

[Causa raiz identificada]

### **Fix**

[Descrição da solução]

### **Acceptance Criteria**

✅ **AC1 - Bug Corrigido**
Dado que [contexto do bug]
Quando [ações que reproduzem]
Então [bug não ocorre]

✅ **AC2 - Regressão Prevenida**
Dado que [contexto normal]
Quando [ações normais]
Então [comportamento normal mantido]
```

### Refactor (`refactor`)

```markdown
## **[REFACTOR] Melhorar [Código/Componente]**

### **Motivação**

[Por que refatorar?]

**Problemas Atuais:**
- [Problema 1]
- [Problema 2]

**Benefícios Esperados:**
- [Benefício 1]
- [Benefício 2]

### **Abordagem**

[Descrição da abordagem de refatoração]

### **Acceptance Criteria**

✅ **AC1 - Comportamento Mantido**
Dado que [contexto]
Quando [ações]
Então [mesmo resultado]

✅ **AC2 - Qualidade Melhorada**
- [ ] Complexidade reduzida
- [ ] Testabilidade melhorada
- [ ] Performance mantida ou melhorada

### **Riscos**

[Riscos identificados e mitigações]
```

### Performance (`perf`)

```markdown
## **[PERF] Otimizar [Componente/Feature]**

### **Problema de Performance**

[Métrica atual vs esperada]

**Métricas Atuais:**
- Load time: Xms
- Render time: Xms
- Bundle size: XKB

**Métricas Esperadas:**
- Load time: Yms
- Render time: Yms
- Bundle size: YKB

### **Abordagem de Otimização**

[Descrição da otimização proposta]

### **Acceptance Criteria**

✅ **AC1 - Métricas Atingidas**
Dado que [contexto]
Quando [medição]
Então [métricas esperadas alcançadas]

✅ **AC2 - Sem Regressão**
- [ ] Funcionalidade mantida
- [ ] Bugs não introduzidos
```

---

## 🔄 Regras de Priorização

### Quando Criar Um Card vs Múltiplos

**Crie um card quando:**
- Mudanças relacionadas logicamente
- Mesma feature/user story
- Pode ser testado junto
- Fit em um sprint

**Crie múltiplos cards quando:**
- Features independentes
- Diferentes user stories
- Testes separados
- Pode ser feito em paralelo

### Critérios para Segundo Card

| Critério | Sim, separar | Não, manter junto |
|----------|--------------|-------------------|
| **Mesma feature** | ❌ | ✅ |
| **Mesmo sprint** | ❌ | ✅ |
| **Depende de outro** | ❌ | ✅ |
| **Diferente persona** | ✅ | ❌ |
| **Diferente risco** | ✅ | ❌ |
| **Diferente prioridade** | ✅ | ❌ |
| **> 8 horas de esforço** | ✅ | ❌ |

---

## 📐 Definition of Ready

### Antes de Começar o Card

O card está pronto para desenvolvimento quando:

- [ ] **User Story** clara e completa
- [ ] **Acceptance Criteria** definidos
- [ ] **Critérios de Teste** documentados
- [ ] **Dependencies** identificadas
- [ ] **Design/Mockups** disponíveis (se aplicável)
- [ ] **APIs** documentadas (se aplicável)
- [ ] **Impacto** em outros módulos avaliado
- [ ] **Riscos** identificados e mitigações planejadas

---

## 🎯 Exemplos de Cards por Stack

{{#if STACK_PRINCIPAL contains "Angular"}}
### Angular: Novo Componente

```markdown
## **[FEAT] Criar UserListComponent**

### **User Story**

Como usuário final eu quero ver uma lista paginada de usuários para que possa gerenciar acessos.

### **Acceptance Criteria**

✅ **AC1 - Lista Exibida**
Dado que existem usuários cadastrados
Quando acesso a lista de usuários
Então vejo os usuários em formato de tabela com paginação

✅ **AC2 - Paginação Funciona**
Dado que existem mais de 20 usuários
Quando navego entre páginas
Então vejo os usuários corretos de cada página

✅ **AC3 - Filtro Funciona**
Dado que estou na lista de usuários
Quando digito um nome no filtro
Então vejo apenas usuários cujo nome contém o termo

### **Implementation**

```typescript
// src/app/features/users/components/user-list.component.ts
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  template: `
    <div class="user-list">
      <input [formControl]="searchFilter" placeholder="Buscar..." />
      <table mat-table [dataSource]="filteredUsers()">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let user">{{ user.name }}</td>
        </ng-container>
        <!-- more columns -->
      </table>
      <mat-paginator [length]="totalCount()" [pageSize]="10"></mat-paginator>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  private userService = inject(UserService);
  users = toSignal(this.userService.getUsers(), { initialValue: [] });
  searchFilter = FormControl<string>('');

  filteredUsers = computed(() =>
    this.users().filter(u =>
      u.name.includes(this.searchFilter.value)
    )
  );

  totalCount = computed(() => this.filteredUsers().length);
}
```

### **Tests**

```typescript
describe('UserListComponent', () => {
  it('displays users', () => {
    const users = signal([{ id: 1, name: 'Test' }]);
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentRef.setInput('users', users);

    expect(fixture.nativeElement.textContent).toContain('Test');
  });

  it('filters users', () => {
    const users = signal([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]);
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.componentRef.setInput('users', users);

    fixture.componentInstance.searchFilter.setValue('Alice');
    expect(fixture.componentInstance.filteredUsers()).toHaveLength(1);
  });
});
```
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
### React: Novo Hook

```markdown
## **[FEAT] Criar useUsers Hook**

### **User Story**

Como desenvolvedor eu quero um hook customizado para gerenciar usuários para que possa reutilizar lógica entre componentes.

### **Acceptance Criteria**

✅ **AC1 - Hook Funciona**
Dado que useUsers é chamado
Quando montado
Então retorna usuários, loading e error

✅ **AC2 - Cache Funciona**
Dado que useUsers foi chamado uma vez
Quando chamado novamente
Então usa cache sem nova requisição

### **Implementation**

```typescript
// src/hooks/useUsers.ts
export function useUsers(filters?: UserFilters) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getUsers(filters);
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [JSON.stringify(filters)]);

  return { users, loading, error };
}
```

### **Tests**

```typescript
describe('useUsers', () => {
  it('fetches users', async () => {
    const { result } = renderHook(() => useUsers());
    await waitFor(() => expect(result.current.users.length).toBeGreaterThan(0));
  });

  it('handles errors', async () => {
    const { result } = renderHook(() => useUsers());
    await waitFor(() => expect(result.current.error).toBeTruthy());
  });
});
```
```
{{/if}}

---

## 📊 Checklists Finais

### Antes de Submeter o Card

- [ ] Título claro e descritivo
- [ ] User story completa (Como/Quero/Para que)
- [ ] Acceptance Criteria específicos e mensuráveis
- [ ] Definition of Done completo
- [ ] Casos de teste documentados
- [ ] Arquivos impactados listados
- [ ] Dependencies identificadas
- [ ] Prioridade definida
- [ ] Esforço estimado
- [ ] Riscos documentados

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 2.0.0
**Maintainer:** Equipe {{NOME_PROJETO}}
