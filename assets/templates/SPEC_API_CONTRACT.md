---
title: "Contratos de API - {{NOME_PROJETO}}"
version: "1.0.0"
author: "Equipe {{NOME_PROJETO}}"
created: "{{DATA_ATUAL}}"
updated: "{{DATA_ATUAL}}"
compatibility: "{{STACK_PRINCIPAL}}"
tags: ["spec", "api", "contract", "{{LINGUAGEM}}"]
status: "active"
api_version: "v1"
base_url: "[BASE_URL]"
---

# 🔌 Especificação de Contratos de API - {{NOME_PROJETO}}

> **Contratos de API detalhados** com endpoints, request/response schemas e exemplos.

---

## 📋 Visão Geral da API

### Informações Básicas

| Campo | Valor |
|-------|-------|
| **Nome** | {{NOME_PROJETO}} API |
| **Versão** | v1 |
| **Base URL** | `{{BASE_URL}}/api/v1` |
| **Protocolo** | HTTPS |
| **Formato** | JSON |
| **Autenticação** | Bearer Token (JWT) |
| **Rate Limiting** | 100 req/min |

### Controle de Versão

```
/api/v1/... - Versão atual (suportada)
/api/v2/... - Versão futura
```

---

## 🔐 Autenticação e Autorização

### Métodos de Autenticação

**Bearer Token (JWT):**
```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Endpoints de Auth

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/auth/login` | Login e obtenção de token |
| POST | `/auth/refresh` | Renovar token |
| POST | `/auth/logout` | Logout |
| GET | `/auth/me` | Informações do usuário atual |

### Login

**Request:**
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "roles": ["user"]
  }
}
```

**Response (401):**
```json
{
  "error": "INVALID_CREDENTIALS",
  "message": "Email ou senha incorretos"
}
```

---

## 📊 Endpoints

### Recurso: Users

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| GET | `/users` | Listar usuários | ✅ |
| GET | `/users/:id` | Obter usuário por ID | ✅ |
| POST | `/users` | Criar usuário | ✅ |
| PUT | `/users/:id` | Atualizar usuário | ✅ |
| DELETE | `/users/:id` | Excluir usuário | ✅ |
| PATCH | `/users/:id` | Atualização parcial | ✅ |

#### GET /users

**Descrição:** Lista usuários com paginação e filtros

**Query Parameters:**
| Param | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `page` | number | ❌ | Página (default: 1) |
| `pageSize` | number | ❌ | Itens por página (default: 20, max: 100) |
| `search` | string | ❌ | Busca por nome/email |
| `status` | string | ❌ | Filtro por status |
| `sort` | string | ❌ | Ordenação (ex: name,-createdAt) |

**Request:**
```http
GET /api/v1/users?page=1&pageSize=20&search=admin&status=active
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Admin User",
      "email": "admin@example.com",
      "status": "active",
      "role": "admin",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "total": 150,
    "page": 1,
    "pageSize": 20,
    "totalPages": 8
  }
}
```

**Response (401):**
```json
{
  "error": "UNAUTHORIZED",
  "message": "Token de autenticação inválido ou expirado"
}
```

#### POST /users

**Descrição:** Cria novo usuário

**Request:**
```http
POST /api/v1/users
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "SecurePass123!",
  "role": "user",
  "status": "active"
}
```

**Response (201):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "name": "New User",
  "email": "newuser@example.com",
  "role": "user",
  "status": "active",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

**Response (400):**
```json
{
  "error": "VALIDATION_ERROR",
  "message": "Dados de entrada inválidos",
  "details": [
    {
      "field": "email",
      "message": "Email já está em uso"
    },
    {
      "field": "password",
      "message": "Senha deve ter pelo menos 8 caracteres"
    }
  ]
}
```

#### PUT /users/:id

**Descrição:** Atualiza usuário completo

**Request:**
```http
PUT /api/v1/users/550e8400-e29b-41d4-a716-446655440000
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "role": "admin",
  "status": "active"
}
```

**Response (200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Updated Name",
  "email": "updated@example.com",
  "role": "admin",
  "status": "active",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-15T11:00:00Z"
}
```

**Response (404):**
```json
{
  "error": "NOT_FOUND",
  "message": "Usuário não encontrado"
}
```

---

## 📐 Contratos de Request/Response

### Schemas Compartilhados

#### UserSchema
```typescript
interface User {
  id: string;                    // UUID v4
  name: string;                  // Min: 3, Max: 100
  email: string;                 // Email válido
  status: 'active' | 'inactive'; // Status do usuário
  role: string;                  // Papel do usuário
  createdAt: string;             // ISO 8601 datetime
  updatedAt: string;             // ISO 8601 datetime
}
```

#### ErrorSchema
```typescript
interface ErrorResponse {
  error: string;           // Código do erro
  message: string;         // Mensagem descritiva
  details?: ValidationError[]; // Detalhes de validação
  stack?: string;          // Stack trace (apenas dev)
}

interface ValidationError {
  field: string;           // Campo com erro
  message: string;         // Mensagem do erro
  code?: string;           // Código do erro específico
}
```

#### PaginationMeta
```typescript
interface PaginationMeta {
  total: number;           // Total de registros
  page: number;            // Página atual
  pageSize: number;        // Itens por página
  totalPages: number;      // Total de páginas
}
```

---

## 📡 Códigos de Status

| Código | Significado | Quando Usar |
|--------|-------------|-------------|
| 200 | OK | Requisição bem-sucedida |
| 201 | Created | Recurso criado com sucesso |
| 204 | No Content | Requisição bem-sucedida sem conteúdo |
| 400 | Bad Request | Dados de entrada inválidos |
| 401 | Unauthorized | Não autenticado ou token inválido |
| 403 | Forbidden | Autenticado mas sem permissão |
| 404 | Not Found | Recurso não encontrado |
| 409 | Conflict | Recurso em conflito (ex: email duplicado) |
| 422 | Unprocessable Entity | Erro de validação |
| 429 | Too Many Requests | Rate limit excedido |
| 500 | Internal Server Error | Erro interno do servidor |

---

## 🚦 Rate Limiting

### Limites

| Tipo | Limite | Janela |
|------|--------|--------|
| **Anônimo** | 20 req | 1 minuto |
| **Autenticado** | 100 req | 1 minuto |
| **Admin** | 1000 req | 1 minuto |

### Headers

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

### Response (429)

```json
{
  "error": "RATE_LIMIT_EXCEEDED",
  "message": "Limite de requisições excedido. Tente novamente em X segundos.",
  "retryAfter": 30
}
```

---

## 🔄 Versionamento

### Estratégia

- **URL Versioning:** `/api/v1/`, `/api/v2/`
- **Deprecation:** Avisar 6 meses antes de remover
- **SUNSET Header:** Informar quando endpoint será removido

### Response com Sunset

```http
HTTP/1.1 200 OK
Sunset: Wed, 01 Jan 2025 00:00:00 GMT
Warning: 299 - "Endpoint is deprecated and will be removed on Jan 1, 2025"
```

---

## 📝 Exemplos de Uso

### TypeScript

```typescript
// ✅ Service com typing correto
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

interface UsersResponse {
  data: User[];
  meta: PaginationMeta;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = '/api/v1/users';

  getUsers(params: GetUsersParams): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.baseUrl, { params });
  }

  createUser(data: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.baseUrl, data);
  }

  updateUser(id: string, data: UpdateUserDto): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, data);
  }
}
```

### Fetch API

```typescript
// ✅ Exemplo com fetch
async function getUsers(page = 1, pageSize = 20) {
  const response = await fetch(`/api/v1/users?page=${page}&pageSize=${pageSize}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}
```

### cURL

```bash
# ✅ Listar usuários
curl -X GET "https://api.example.com/api/v1/users?page=1&pageSize=20" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json"

# ✅ Criar usuário
curl -X POST "https://api.example.com/api/v1/users" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New User",
    "email": "new@example.com",
    "password": "SecurePass123!",
    "role": "user"
  }'
```

---

## 🧪 Testes de API

### Exemplo de Teste

{{#if STACK_PRINCIPAL contains "Angular"}}
```typescript
describe('UserService', () => {
  it('should get users', waitForAsync(() => {
    const service = TestBed.inject(UserService);

    service.getUsers({ page: 1 }).subscribe(response => {
      expect(response.data).toBeDefined();
      expect(response.meta.total).toBeGreaterThan(0);
    });
  }));

  it('should handle validation error', waitForAsync(() => {
    const service = TestBed.inject(UserService);

    service.createUser({ email: 'invalid' }).subscribe({
      error: (error) => {
        expect(error.status).toBe(400);
        expect(error.error.details).toBeDefined();
      }
    });
  }));
});
```
{{/if}}

---

## 📚 Referências

- [OpenAPI/Swagger](link)
- [Regras de Negócio](./SPEC_BUSINESS_RULES.md)
- [Modelo de Dados](./SPEC_DATA_MODEL.md)
- [Workflows](./SPEC_WORKFLOW.md)

---

**Última atualização:** {{DATA_ATUAL}}
**Versão:** 1.0.0
**Maintainer:** Equipe {{NOME_PROJETO}}
