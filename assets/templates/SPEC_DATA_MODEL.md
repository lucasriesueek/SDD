---
title: "Modelo de Dados - {{NOME_PROJETO}}"
version: "1.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["spec", "data-model", "database", "{{LINGUAGEM}}"]
status: "active"
database: "[DATABASE_TYPE]"
---

# 🗄️ Especificação de Modelo de Dados - {{NOME_PROJETO}}

> **Especificação detalhada do modelo de dados** com entidades, relacionamentos, índices e patterns de acesso.

---

## 📊 Metadados

| Campo | Valor |
|-------|-------|
| **Database** | [PostgreSQL/MySQL/MongoDB/etc] |
| **ORM** | [TypeORM/Prisma/Mongoose/etc] |
| **Schema Version** | 1.0.0 |
| **Charset** | UTF-8 |
| **Timezone** | UTC |

---

## 📐 Diagrama ER (Descrição Textual)

### Entidades Principais

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│   User      │────────>│    Order     │<────────│   Product   │
│             │    1:N  │              │    N:1  │             │
└─────────────┘         └──────────────┘         └─────────────┘
       │                                                    │
       │ 1:N                                               │
       ▼                                                    ▼
┌─────────────┐                                    ┌─────────────┐
│   Address   │                                    │   Category  │
│             │                                    │             │
└─────────────┘                                    └─────────────┘
```

---

## 📋 Entidades

### User

**Descrição:** Representa um usuário do sistema

**Atributos:**

| Campo | Tipo | Nulável | Único | Default | Descrição |
|-------|------|---------|-------|---------|-----------|
| `id` | UUID | ❌ | ✅ | - | Identificador único |
| `name` | VARCHAR(100) | ❌ | ❌ | - | Nome completo |
| `email` | VARCHAR(255) | ❌ | ✅ | - | Email de contato |
| `password_hash` | VARCHAR(255) | ❌ | ❌ | - | Senha hasheada |
| `status` | ENUM | ❌ | ❌ | active | Status do usuário |
| `role` | VARCHAR(50) | ❌ | ❌ | user | Papel do usuário |
| `email_verified` | BOOLEAN | ❌ | ❌ | false | Email verificado |
| `last_login_at` | TIMESTAMP | ✅ | ❌ | - | Último login |
| `created_at` | TIMESTAMP | ❌ | ❌ | NOW | Data de criação |
| `updated_at` | TIMESTAMP | ❌ | ❌ | NOW | Data de atualização |

**Enum `status`:**
- `active` - Usuário ativo
- `inactive` - Usuário inativo
- `suspended` - Usuário suspenso
- `deleted` - Usuário excluído (soft delete)

**Enum `role`:**
- `admin` - Administrador
- `user` - Usuário comum
- `guest` - Convidado

{{#if STACK_PRINCIPAL contains "TypeScript"}}
**TypeScript Interface:**
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  status: 'active' | 'inactive' | 'suspended' | 'deleted';
  role: 'admin' | 'user' | 'guest';
  emailVerified: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role?: 'user';
}

interface UpdateUserDto {
  name?: string;
  status?: User['status'];
  role?: User['role'];
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "TypeORM"}}
**TypeORM Entity:**
```typescript
@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, name: 'password_hash' })
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: ['active', 'inactive', 'suspended', 'deleted'],
    default: 'active'
  })
  status: UserStatus;

  @Column({
    type: 'enum',
    enum: ['admin', 'user', 'guest'],
    default: 'user'
  })
  role: UserRole;

  @Column({ type: 'boolean', name: 'email_verified', default: false })
  emailVerified: boolean;

  @Column({ type: 'timestamp', name: 'last_login_at', nullable: true })
  lastLoginAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relations
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];
}
```
{{/if}}

{{#if STACK_PRINCIPAL contains "Prisma"}}
**Prisma Schema:**
```prisma
model User {
  id            String    @id @default(uuid())
  name          String    @db.VarChar(100)
  email         String    @unique @db.VarChar(255)
  passwordHash  String    @map("password_hash") @db.VarChar(255)
  status        UserStatus @default(ACTIVE)
  role          UserRole  @default(USER)
  emailVerified Boolean   @default(false) @map("email_verified")
  lastLoginAt   DateTime? @map("last_login_at")
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  orders    Order[]
  addresses Address[]

  @@map("users")
}

enum UserStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
  DELETED
}

enum UserRole {
  ADMIN
  USER
  GUEST
}
```
{{/if}}

---

### Order

**Descrição:** Representa um pedido do usuário

**Atributos:**

| Campo | Tipo | Nulável | Único | Default | Descrição |
|-------|------|---------|-------|---------|-----------|
| `id` | UUID | ❌ | ✅ | - | Identificador único |
| `user_id` | UUID | ❌ | ❌ | - | ID do usuário (FK) |
| `status` | ENUM | ❌ | ❌ | pending | Status do pedido |
| `total` | DECIMAL(10,2) | ❌ | ❌ | 0.00 | Valor total |
| `currency` | VARCHAR(3) | ❌ | ❌ | BRL | Moeda |
| `notes` | TEXT | ✅ | ❌ | - | Observações |
| `created_at` | TIMESTAMP | ❌ | ❌ | NOW | Data de criação |
| `updated_at` | TIMESTAMP | ❌ | ❌ | NOW | Data de atualização |

**Enum `status`:**
- `pending` - Pendente
- `confirmed` - Confirmado
- `processing` - Em processamento
- `shipped` - Enviado
- `delivered` - Entregue
- `cancelled` - Cancelado

{{#if STACK_PRINCIPAL contains "TypeScript"}}
**TypeScript Interface:**
```typescript
interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  total: number;
  currency: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  items?: OrderItem[];
  user?: User;
}

type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
```
{{/if}}

---

## 🔗 Relacionamentos

### User ↔ Order (One-to-Many)

**Descrição:** Um usuário pode ter múltiplos pedidos

**Foreign Key:** `orders.user_id → users.id`

**Cascata:**
- ** onDelete:** RESTRICT (não permite excluir usuário com pedidos)
- ** onUpdate:** CASCADE

### Order ↔ Product (Many-to-Many)

**Descrição:** Um pedido pode ter múltiplos produtos

**Tabela Junction:** `order_items`

**Atributos da Junction:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `order_id` | UUID | FK para orders |
| `product_id` | UUID | FK para products |
| `quantity` | INT | Quantidade do produto |
| `unit_price` | DECIMAL(10,2) | Preço unitário no momento |
| `subtotal` | DECIMAL(10,2) | Subtotal (quantity × unit_price) |

---

## 📇 Índices e Performance

### Índices por Tabela

#### Users
```sql
-- Índice único (já existe via unique constraint)
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Índice para busca por status
CREATE INDEX idx_users_status ON users(status);

-- Índice composto para listagem
CREATE INDEX idx_users_status_created ON users(status, created_at DESC);

-- Índice para busca textual (PostgreSQL)
CREATE INDEX idx_users_name_trgm ON users USING gin(name gin_trgm_ops);
```

#### Orders
```sql
-- Índice para buscas do usuário
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- Índice para status
CREATE INDEX idx_orders_status ON orders(status);

-- Índice composto para listagem comum
CREATE INDEX idx_orders_user_status ON orders(user_id, status, created_at DESC);
```

### Estratégias de Performance

| Operação | Índice | Estratégia |
|----------|--------|------------|
| Busca usuário por email | `idx_users_email` | B-Tree único |
| Listar usuários ativos | `idx_users_status_created` | B-Tree composto |
| Busca textual de nome | `idx_users_name_trgm` | GIN trigram |
| Pedidos do usuário | `idx_orders_user_status` | B-Tree composto |
| Analytics de pedidos | `idx_orders_created` | B-Tree |

---

## 🔄 Migration Patterns

### Estrutura de Migration

```bash
migrations/
├── 20240101000000-create-users-table.sql
├── 20240102000000-create-orders-table.sql
├── 20240103000000-create-order-items-table.sql
├── 20240104000000-add-indexes.sql
└── 20240105000000-seed-data.sql
```

### Exemplo de Migration SQL

```sql
-- 20240101000000-create-users-table.sql

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  role VARCHAR(50) NOT NULL DEFAULT 'user',
  email_verified BOOLEAN NOT NULL DEFAULT false,
  last_login_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Check constraints
ALTER TABLE users
  ADD CONSTRAINT chk_users_status
    CHECK (status IN ('active', 'inactive', 'suspended', 'deleted'));

ALTER TABLE users
  ADD CONSTRAINT chk_users_role
    CHECK (role IN ('admin', 'user', 'guest'));

-- Trigger para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### Rollback Migration

```sql
-- Rollback: 20240101000000-create-users-table.sql

DROP TRIGGER update_users_updated_at ON users;
DROP FUNCTION update_updated_at_column();
DROP TABLE users;
```

---

## 🎯 Data Access Patterns

### Repository Pattern

{{#if STACK_PRINCIPAL contains "TypeScript"}}
```typescript
// ✅ Repository interface
interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(filters: UserFilters): Promise<PaginatedResult<User>>;
  create(data: CreateUserDto): Promise<User>;
  update(id: string, data: UpdateUserDto): Promise<User>;
  delete(id: string): Promise<void>;
}

// ✅ Implementação com TypeORM
@Repository(User)
export class UserRepository implements IUserRepository {
  constructor(
    @DataSource() private readonly dataSource: DataSource
  ) {}

  async findById(id: string): Promise<User | null> {
    return this.dataSource
      .getRepository(User)
      .findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.dataSource
      .getRepository(User)
      .findOne({ where: { email } });
  }

  async findAll(filters: UserFilters): Promise<PaginatedResult<User>> {
    const { page = 1, pageSize = 20, status, search } = filters;

    const query = this.dataSource
      .getRepository(User)
      .createQueryBuilder('user');

    if (status) {
      query.andWhere('user.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(user.name ILIKE :search OR user.email ILIKE :search)',
        { search: `%${search}%` }
      );
    }

    const [data, total] = await query
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return {
      data,
      meta: { total, page, pageSize, totalPages: Math.ceil(total / pageSize) }
    };
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.dataSource.getRepository(User).create(data);
    return this.dataSource.getRepository(User).save(user);
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    await this.dataSource
      .getRepository(User)
      .update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.dataSource.getRepository(User).softDelete(id);
  }
}
```
{{/if}}

### Query Patterns

#### Query Básica
```sql
-- Busca por ID
SELECT * FROM users WHERE id = ?;

-- Busca por email
SELECT * FROM users WHERE email = ?;

-- Listagem com paginação
SELECT * FROM users
WHERE status = 'active'
ORDER BY created_at DESC
LIMIT 20 OFFSET 0;
```

#### Query com Joins
```sql
-- Pedidos do usuário com itens
SELECT
  o.*,
  json_agg(
    json_build_object(
      'id', oi.product_id,
      'name', p.name,
      'quantity', oi.quantity,
      'unit_price', oi.unit_price
    )
  ) as items
FROM orders o
LEFT JOIN order_items oi ON oi.order_id = o.id
LEFT JOIN products p ON p.id = oi.product_id
WHERE o.user_id = ?
GROUP BY o.id
ORDER BY o.created_at DESC;
```

#### Query Analytics
```sql
-- Pedidos por status
SELECT
  status,
  COUNT(*) as total,
  SUM(total) as revenue
FROM orders
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY status;
```

---

## 🧪 Testes de Data Layer

### Exemplo de Teste

{{#if STACK_PRINCIPAL contains "TypeScript"}}
```typescript
describe('UserRepository', () => {
  let repository: UserRepository;
  let dataSource: DataSource;

  beforeAll(async () => {
    dataSource = createTestDataSource();
    repository = new UserRepository(dataSource);
  });

  afterEach(async () => {
    await dataSource.query('TRUNCATE TABLE users CASCADE');
  });

  describe('create', () => {
    it('should create user with hashed password', async () => {
      const data: CreateUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      };

      const user = await repository.create(data);

      expect(user.id).toBeDefined();
      expect(user.passwordHash).not.toBe(data.password);
      expect(user.email).toBe(data.email);
    });

    it('should throw on duplicate email', async () => {
      const data: CreateUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      };

      await repository.create(data);

      await expect(repository.create(data))
        .rejects.toThrow('Duplicate entry');
    });
  });
});
```
{{/if}}

---

## 📚 Referências

- [Diagrama ER Completo](link)
- [Contratos de API](./SPEC_API_CONTRACT.md)
- [Regras de Negócio](./SPEC_BUSINESS_RULES.md)
- [Workflows](./SPEC_WORKFLOW.md)

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 1.0.0
**Maintainer:** Equipe {{NOME_PROJETO}}
