---
title: "Especificação de Workflows - {{NOME_PROJETO}}"
version: "1.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["spec", "workflow", "process", "{{LINGUAGEM}}"]
status: "active"
---

# 🔄 Especificação de Workflows - {{NOME_PROJETO}}

> **Especificação detalhada de workflows e processos** de negócio com estados, transições e handlers.

---

## 📋 Visão Geral

### Workflows Documentados

| Workflow | Descrição | Complexidade | Status |
|----------|-----------|--------------|--------|
| [Workflow 1] | [Descrição] | Alta/Média/Baixa | Ativo |
| [Workflow 2] | [Descrição] | Alta/Média/Baixa | Ativo |

---

## 🛒 Workflow: Order Processing

### Descrição

Processo completo de processamento de pedidos desde a criação até a entrega ou cancelamento.

### Fluxograma (Descrição Textual)

```
[Cliente] → (1) Criar Pedido → [PENDING]
                  ↓
           (2) Confirmar Pagamento
                  ↓
         ┌────────┴────────┐
         ↓                 ↓
    [PAYMENT_FAILED]   [CONFIRMED]
         ↓                 ↓
    (3) Cancelar    (4) Processar
         ↓                 ↓
    [CANCELLED]      [PROCESSING]
                            ↓
                       (5) Enviar
                            ↓
                        [SHIPPED]
                            ↓
                       (6) Entregar
                            ↓
                       [DELIVERED]
```

### Estados do Workflow

| Estado | Descrição | Final? | Auto-Transição |
|--------|-----------|--------|----------------|
| `PENDING` | Pedido criado, aguardando pagamento | ❌ | Sim (timeout) |
| `CONFIRMED` | Pagamento confirmado | ❌ | Não |
| `PROCESSING` | Em separação/produção | ❌ | Não |
| `SHIPPED` | Enviado ao cliente | ❌ | Não |
| `DELIVERED` | Entregue ao cliente | ✅ | Não |
| `CANCELLED` | Cancelado | ✅ | Não |
| `REFUNDED` | Reembolsado | ✅ | Não |

### Transições Possíveis

| De | Para | Gatilho | Condições |
|----|------|---------|-----------|
| `PENDING` | `CONFIRMED` | Pagamento confirmado | Pagamento OK |
| `PENDING` | `CANCELLED` | Cancelamento | Sem pagamento em 24h |
| `PENDING` | `CANCELLED` | Cancelamento manual | Usuário cancelou |
| `CONFIRMED` | `PROCESSING` | Iniciar processamento | Estoque OK |
| `CONFIRMED` | `CANCELLED` | Cancelamento | Usuário cancelou |
| `PROCESSING` | `SHIPPED` | Enviar pedido | Pronto para envio |
| `PROCESSING` | `CANCELLED` | Cancelamento | Usuário cancelou |
| `SHIPPED` | `DELIVERED` | Confirmar entrega | Cliente recebeu |
| `SHIPPED` | `CANCELLED` | Devolução | Devolução solicitada |
| `DELIVERED` | `REFUNDED` | Reembolso | Solicitação aprovada |

### Gatilhos (Triggers)

#### Trigger 1: Payment Confirmation
```typescript
interface PaymentConfirmedTrigger {
  type: 'PAYMENT_CONFIRMED';
  orderId: string;
  paymentId: string;
  amount: number;
  confirmedAt: Date;
}
```

#### Trigger 2: Shipment
```typescript
interface ShipmentTrigger {
  type: 'SHIPMENT';
  orderId: string;
  trackingCode: string;
  carrier: string;
  shippedAt: Date;
}
```

#### Trigger 3: Delivery
```typescript
interface DeliveryTrigger {
  type: 'DELIVERY';
  orderId: string;
  deliveredAt: Date;
  recipient?: string;
  photoUrl?: string;
}
```

### Handlers por Estado

#### Handler: PENDING
```typescript
class PendingOrderHandler implements OrderHandler {
  async handle(order: Order, trigger: OrderTrigger): Promise<OrderState> {
    // Auto-cancel após 24h sem pagamento
    const hoursSinceCreated = diffInHours(new Date(), order.createdAt);
    if (hoursSinceCreated > 24) {
      return OrderState.CANCELLED;
    }

    // Se pagamento confirmado
    if (trigger.type === 'PAYMENT_CONFIRMED') {
      return OrderState.CONFIRMED;
    }

    // Se cancelamento manual
    if (trigger.type === 'CANCEL_ORDER') {
      return OrderState.CANCELLED;
    }

    return OrderState.PENDING;
  }

  async onEnter(order: Order): Promise<void> {
    // Enviar email de pending
    await this.emailService.sendOrderPending(order);
  }

  async onExit(order: Order, nextState: OrderState): Promise<void> {
    // Registrar métricas
    await this.metricsService.recordTimeInPending(order);
  }
}
```

#### Handler: CONFIRMED
```typescript
class ConfirmedOrderHandler implements OrderHandler {
  async handle(order: Order, trigger: OrderTrigger): Promise<OrderState> {
    // Verificar estoque
    const stockOk = await this.inventoryService.checkStock(order.items);
    if (!stockOk) {
      await this.notificationService.notifyOutOfStock(order);
      return OrderState.CANCELLED;
    }

    // Iniciar processamento
    if (trigger.type === 'START_PROCESSING') {
      return OrderState.PROCESSING;
    }

    // Cancelamento
    if (trigger.type === 'CANCEL_ORDER') {
      return OrderState.CANCELLED;
    }

    return OrderState.CONFIRMED;
  }

  async onEnter(order: Order): Promise<void> {
    // Reservar estoque
    await this.inventoryService.reserveStock(order.items);

    // Notificar warehouse
    await this.warehouseService.notifyNewOrder(order);

    // Enviar email de confirmação
    await this.emailService.sendOrderConfirmed(order);
  }
}
```

#### Handler: SHIPPED
```typescript
class ShippedOrderHandler implements OrderHandler {
  async handle(order: Order, trigger: OrderTrigger): Promise<OrderState> {
    // Confirmar entrega
    if (trigger.type === 'DELIVERY') {
      return OrderState.DELIVERED;
    }

    // Devolução
    if (trigger.type === 'RETURN_REQUESTED') {
      return OrderState.CANCELLED;
    }

    return OrderState.SHIPPED;
  }

  async onEnter(order: Order): Promise<void> {
    // Enviar email com tracking
    await this.emailService.sendShippingConfirmation(order);

    // Notificar cliente via push
    await this.pushService.notifyShipping(order);

    // Iniciar tracking
    await this.trackingService.startTracking(order);
  }
}
```

### Notificações

| Evento | Canal | Template |
|--------|-------|----------|
| Pedido criado | Email | `order_pending` |
| Pagamento confirmado | Email, Push | `order_confirmed` |
| Enviado | Email, Push, SMS | `order_shipped` |
| Entregue | Email, Push | `order_delivered` |
| Cancelado | Email | `order_cancelled` |
| Reembolsado | Email | `order_refunded` |

### Exemplos de Código

{{#if STACK_PRINCIPAL contains "Angular"}}
#### Componente de Status
```typescript
@Component({
  selector: 'app-order-status',
  template: `
    <div class="order-status" [class]="statusClass()">
      <span class="status-icon">{{ statusIcon() }}</span>
      <span class="status-text">{{ statusText() }}</span>
    </div>
    <div class="progress-bar">
      @for (step of steps(); track step.state) {
        <div class="step"
             [class.active]="step.state === order().status"
             [class.completed]="step.index < currentStepIndex()">
          <span class="step-icon">{{ step.icon }}</span>
          <span class="step-label">{{ step.label }}</span>
        </div>
      }
    </div>
  `
})
export class OrderStatusComponent {
  order = input.required<Order>();

  readonly steps = signal([
    { state: 'PENDING', icon: '⏳', label: 'Pendente', index: 0 },
    { state: 'CONFIRMED', icon: '✅', label: 'Confirmado', index: 1 },
    { state: 'PROCESSING', icon: '📦', label: 'Processando', index: 2 },
    { state: 'SHIPPED', icon: '🚚', label: 'Enviado', index: 3 },
    { state: 'DELIVERED', icon: '🎉', label: 'Entregue', index: 4 },
  ]);

  readonly currentStepIndex = computed(() =>
    this.steps().findIndex(s => s.state === this.order().status)
  );

  readonly statusText = computed(() => {
    const status = this.order().status;
    const texts = {
      PENDING: 'Aguardando pagamento',
      CONFIRMED: 'Pagamento confirmado',
      PROCESSING: 'Em preparação',
      SHIPPED: 'Enviado',
      DELIVERED: 'Entregue',
      CANCELLED: 'Cancelado'
    };
    return texts[status];
  });
}
```
{{/if}}

---

## 👤 Workflow: User Registration

### Descrição

Processo de registro e ativação de novos usuários.

### Fluxograma

```
[Usuário] → (1) Registrar → [PENDING_VERIFICATION]
                  ↓
           (2) Verificar Email
                  ↓
         ┌────────┴────────┐
         ↓                 ↓
    [EXPIRED]         [ACTIVE]
         ↓                 ↓
    (3) Excluir      (4) Usar Sistema
```

### Estados

| Estado | Descrição | TTL |
|--------|-----------|-----|
| `PENDING_VERIFICATION` | Aguardando verificação de email | 24h |
| `ACTIVE` | Usuário ativo | - |
| `EXPIRED` | Verificação expirada | 7d |

### Transições

| De | Para | Gatilho | Ações |
|----|------|---------|-------|
| `PENDING_VERIFICATION` | `ACTIVE` | Email verificado | Ativar conta |
| `PENDING_VERIFICATION` | `EXPIRED` | TTL expirado | Marcar expirado |
| `EXPIRED` | - | Cleanup job | Deletar conta |

### Handlers

#### Handler: PENDING_VERIFICATION
```typescript
class PendingVerificationHandler implements UserHandler {
  async handle(user: User, trigger: UserTrigger): Promise<UserState> {
    if (trigger.type === 'EMAIL_VERIFIED') {
      // Gerar perfil inicial
      await this.profileService.createInitial(user);

      // Enviar email de boas-vindas
      await this.emailService.sendWelcome(user);

      return UserState.ACTIVE;
    }

    return UserState.PENDING_VERIFICATION;
  }

  async onEnter(user: User): Promise<void> {
    // Gerar token de verificação
    const token = this.generateToken();

    // Salvar token
    await this.tokenService.save(token, user.id, { ttl: '24h' });

    // Enviar email
    await this.emailService.sendVerificationEmail(user, token);
  }
}
```

---

## 🔄 Workflow: Password Reset

### Descrição

Processo de recuperação de senha.

### Fluxograma

```
[Usuário] → (1) Solicitar Reset → [RESET_PENDING]
                  ↓
           (2) Enviar Email com Token
                  ↓
           (3) Usar Token → [TOKEN_VALID]
                  ↓
           (4) Nova Senha → [PASSWORD_UPDATED]
                  ↓
           (5) Login com Nova Senha → [COMPLETED]
```

### Estados

| Estado | Descrição | TTL |
|--------|-----------|-----|
| `RESET_PENDING` | Token enviado | 1h |
| `TOKEN_VALID` | Token validado | 15min |
| `PASSWORD_UPDATED` | Senha atualizada | - |
| `COMPLETED` | Processo completo | - |

### Transições

| De | Para | Gatilho |
|----|------|---------|
| `RESET_PENDING` | `TOKEN_VALID` | Token válido |
| `RESET_PENDING` | `EXPIRED` | Token expirou (>1h) |
| `TOKEN_VALID` | `PASSWORD_UPDATED` | Nova senha definida |
| `PASSWORD_UPDATED` | `COMPLETED` | Login com nova senha |

---

## 🧪 Testes de Workflow

### Exemplo de Teste

```typescript
describe('Order Workflow', () => {
  describe('PENDING → CONFIRMED', () => {
    it('should transition to CONFIRMED on payment', async () => {
      const order = createOrder({ status: 'PENDING' });
      const trigger: PaymentConfirmedTrigger = {
        type: 'PAYMENT_CONFIRMED',
        orderId: order.id,
        paymentId: 'pay_123',
        amount: order.total,
        confirmedAt: new Date()
      };

      const newState = await workflow.handle(order, trigger);

      expect(newState).toBe('CONFIRMED');
      expect(order.status).toBe('CONFIRMED');
    });

    it('should send email on CONFIRMED', async () => {
      const order = createOrder({ status: 'PENDING' });
      const trigger = createPaymentTrigger();

      await workflow.handle(order, trigger);

      expect(emailService.send).toHaveBeenCalledWith(
        order.user.email,
        'order_confirmed',
        expect.any(Object)
      );
    });
  });

  describe('SHIPPED → DELIVERED', () => {
    it('should transition to DELIVERED on delivery', async () => {
      const order = createOrder({ status: 'SHIPPED' });
      const trigger: DeliveryTrigger = {
        type: 'DELIVERY',
        orderId: order.id,
        deliveredAt: new Date()
      };

      const newState = await workflow.handle(order, trigger);

      expect(newState).toBe('DELIVERED');
    });
  });
});
```

---

## 📊 Métricas e Monitoramento

### Métricas por Workflow

| Workflow | Métrica | Target | Alerta |
|----------|---------|--------|--------|
| Order Processing | Tempo em PENDING | < 30min | > 2h |
| Order Processing | Tempo até Shipping | < 24h | > 48h |
| User Registration | Taxa de Verificação | > 80% | < 60% |
| Password Reset | Taxa de Conclusão | > 90% | < 70% |

### SLA

| Workflow | SLA | Penalidade |
|----------|-----|------------|
| Order → Shipped | 24h | Crédito ao cliente |
| Support Response | 4h | Descontonuação |

---

## 📚 Referências

- [Regras de Negócio](./SPEC_BUSINESS_RULES.md)
- [Modelo de Dados](./SPEC_DATA_MODEL.md)
- [Contratos de API](./SPEC_API_CONTRACT.md)
- [Padrões Arquiteturais](./PADROES_ARQUITETURA.md)

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 1.0.0
**Maintainer:** Equipe {{NOME_PROJETO}}
