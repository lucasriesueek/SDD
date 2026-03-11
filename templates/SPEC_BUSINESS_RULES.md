---
title: "Especificação de Regras de Negócio - {{NOME_PROJETO}}"
version: "1.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["spec", "business-rules", "{{LINGUAGEM}}"]
status: "active"
domain: "[DOMÍNIO DE NEGÓCIO]"
---

# 📋 Especificação de Regras de Negócio - {{NOME_PROJETO}}

> **Especificação detalhada de regras de negócio** em formato estruturado para LLMs entenderem e implementarem corretamente.

---

## 📊 Metadados

| Campo | Valor |
|-------|-------|
| **Domínio** | [DOMÍNIO] |
| **Contexto** | [CONTEXTO DE NEGÓCIO] |
| **Stakeholders** | [LISTA DE STAKEHOLDERS] |
| **Prioridade** | [Alta/Média/Baixa] |
| **Complexidade** | [Alta/Média/Baixa] |
| **Status** | [Rascunho/Em Revisão/Aprovado] |

---

## 🎯 Glossário de Termos

| Termo | Definição |
|-------|-----------|
| `[Termo 1]` | [Definição clara] |
| `[Termo 2]` | [Definição clara] |
| `[Termo 3]` | [Definição clara] |

---

## 📜 Regras de Negócio

### RN001 - [Nome da Regra]

**Descrição:**
[Descrição clara da regra de negócio]

**Prioridade:** [Alta/Média/Baixa]
**Status:** [Ativa/Inativa]

#### Formato Given/When/Then

```gherkin
Dado que [pré-condição/contexto]
E [outras pré-condições]
Quando [ação/gatilho ocorre]
Então [resultado esperado deve ocorrer]
E [outros resultados esperados]
```

#### Exemplos

**Cenário 1: [Descrição do cenário]**
```gherkin
Dado que usuário está logado
E usuário tem permissão de admin
Quando usuário clica em "Excluir"
Então sistema deve solicitar confirmação
E usuário clicar em confirmar
Então registro é excluído do banco
E sistema exibe mensagem de sucesso
```

**Cenário 2: [Descrição do cenário alternativo]**
```gherkin
Dado que usuário está logado
E usuário NÃO tem permissão de admin
Quando usuário tenta acessar página de admin
Então sistema deve redirecionar para página de acesso negado
E sistema deve registrar tentativa de acesso não autorizado
```

#### Validação Técnica

{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
// ✅ Implementação da validação
export function validateBusinessRule(context: Context): ValidationResult {
  if (!context.user?.permissions.includes('admin')) {
    return {
      valid: false,
      error: 'USER_NOT_AUTHORIZED',
      message: 'Usuário não tem permissão para esta ação'
    };
  }

  if (context.record?.isLocked) {
    return {
      valid: false,
      error: 'RECORD_LOCKED',
      message: 'Registro está bloqueado para edição'
    };
  }

  return { valid: true };
}

// ✅ Uso no componente
@Component({
  template: `
    @if (canDelete()) {
      <button (click)="delete()">Excluir</button>
    }
  `
})
export class UserListComponent {
  canDelete = computed(() =>
    validateBusinessRule({
      user: this.currentUser(),
      record: this.selectedRecord()
    }).valid
  );
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
```typescript
// ✅ Implementação do hook customizado
export function useBusinessRule(rule: BusinessRule) {
  return (context: Context) => {
    if (!context.user?.permissions.includes('admin')) {
      return {
        valid: false,
        error: 'USER_NOT_AUTHORIZED',
        message: 'Usuário não tem permissão para esta ação'
      };
    }
    return { valid: true };
  };
}

// ✅ Uso no componente
export function UserListComponent() {
  const canDelete = useBusinessRule('DELETE_USER');

  return (
    <div>
      {canDelete(context) && (
        <button onClick={handleDelete}>Excluir</button>
      )}
    </div>
  );
}
```
{{/if}}

---

### RN002 - [Nome da Regra]

**Descrição:**
[Descrição clara da regra de negócio]

**Prioridade:** [Alta/Média/Baixa]
**Status:** [Ativa/Inativa]

#### Formato Given/When/Then

```gherkin
Dado que [pré-condição]
Quando [ação]
Então [resultado]
```

#### Validação Técnica

[Código de validação específico para a regra]

---

## 🚫 Invariantes

> **Invariantes** são regras que NUNCA podem ser violadas, independentemente das circunstâncias.

### INV001 - [Nome do Invariante]

**Descrição:**
[Descrição clara do invariante]

**Verificação:**
[Mecanismo técnico que garante o invariante]

**Exemplo:**
```typescript
// ✅ Invariante: Saldo nunca pode ser negativo
export class Account {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  debit(amount: number): void {
    if (this._balance - amount < 0) {
      throw new BusinessRuleViolationError(
        'BALANCE_CANNOT_BE_NEGATIVE',
        'Saldo não pode ficar negativo'
      );
    }
    this._balance -= amount;
  }
}
```

### INV002 - [Nome do Invariante]
...

---

## 🔍 Casos de Borda

### CB001 - [Nome do Caso de Borda]

**Descrição:**
[Descrição do caso de borda]

**Cenário:**
```gherkin
Dado que [condição incomum]
Quando [ação]
Então [comportamento esperado]
```

**Tratamento:**
[Mecanismo técnico de tratamento]

### CB002 - [Nome do Caso de Borda]
...

---

## ✅ Validações de Negócio

### Validação 1 - [Nome]

**Campo:** [Nome do campo]
**Regra:** [Descrição da regra]
**Mensagem de Erro:** [Mensagem para o usuário]

**Implementação:**
{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
// ✅ Validator customizado
export function businessRuleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null; // Deixar required validator lidar
    }

    // Regra de negócio
    if (value.length < 3) {
      return {
        businessRule: {
          message: 'Valor deve ter pelo menos 3 caracteres'
        }
      };
    }

    return null;
  };
}

// ✅ Uso no reactive form
this.form = this.fb.group({
  fieldName: ['', [Validators.required, businessRuleValidator()]]
});
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
```typescript
// ✅ Schema de validação
import { z } from 'zod';

export const businessSchema = z.object({
  fieldName: z.string()
    .min(1, 'Campo obrigatório')
    .min(3, 'Valor deve ter pelo menos 3 caracteres')
    .refine(
      (value) => value.startsWith('PREFIX'),
      'Valor deve começar com PREFIX'
    ),
});

// ✅ Uso com React Hook Form
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(businessSchema)
});
```
{{/if}}

---

## 🧪 Testes de Regras de Negócio

### Teste Unitário 1 - [Nome]

**Regra Testada:** [RNxxx]
**Cenário:** [Descrição]

{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
describe('BusinessRule: RN001', () => {
  it('should allow deletion when user has admin permission', () => {
    const context = {
      user: { permissions: ['admin'] },
      record: { isLocked: false }
    };

    const result = validateBusinessRule(context);

    expect(result.valid).toBe(true);
  });

  it('should deny deletion when user lacks admin permission', () => {
    const context = {
      user: { permissions: ['user'] },
      record: { isLocked: false }
    };

    const result = validateBusinessRule(context);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('USER_NOT_AUTHORIZED');
  });

  it('should deny deletion when record is locked', () => {
    const context = {
      user: { permissions: ['admin'] },
      record: { isLocked: true }
    };

    const result = validateBusinessRule(context);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('RECORD_LOCKED');
  });
});
```
{{/if}}

{{#if STACK_PRINCIPAL contains "React"}}
```typescript
describe('BusinessRule: RN001', () => {
  it('should allow deletion when user has admin permission', () => {
    const context = {
      user: { permissions: ['admin'] },
      record: { isLocked: false }
    };

    const result = validateBusinessRule(context);

    expect(result.valid).toBe(true);
  });

  it('should deny deletion when user lacks admin permission', () => {
    const context = {
      user: { permissions: ['user'] },
      record: { isLocked: false }
    };

    const result = validateBusinessRule(context);

    expect(result.valid).toBe(false);
    expect(result.error).toBe('USER_NOT_AUTHORIZED');
  });
});
```
{{/if}}

---

## 📊 Matriz de Rastreabilidade

| Regra | Requisito | Componente | Teste | Status |
|-------|-----------|------------|-------|--------|
| RN001 | REQ-001 | UserListComponent | TC-001 | ✅ |
| RN002 | REQ-002 | AuthService | TC-002 | ✅ |
| RN003 | REQ-003 | OrderService | TC-003 | ⏳ |

---

## 🔄 Workflow de Atualização

### Quando Atualizar

- Novas regras de negócio definidas
- Regras existentes modificadas
- Bugs em validações descobertos
- Novos requisitos de negócio

### Processo

1. Criar PR com alterações
2. Atualizar casos de teste
3. Atualizar documentação de API
4. Revisar com stakeholders
5. Aprovar e merge

---

## 📚 Referências

- [Documento de Requisitos](link)
- [Documentação de API](./SPEC_API_CONTRACT.md)
- [Modelo de Dados](./SPEC_DATA_MODEL.md)
- [Workflows](./SPEC_WORKFLOW.md)

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 1.0.0
**Aprovado por:** [Nome/Role]
**Revisor:** [Nome]
