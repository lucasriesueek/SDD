# Diretrizes e Padrões PHP + Laravel + Inertia + React

> **Versão:** 1.0.0
> **Baseado em:** base-project-ai-oriented
> **Stack:** Laravel 12.0 + React 19 + Inertia 2.x + TypeScript 5.7 + Tailwind 4.0
> **Última atualização:** 2026-04-17

---

## ÍNDICE DETALHADO

> **Navegação Precisa:** Este índice lista todas as seções com suas linhas de início e fim. Use-o para localizar rapidamente o que precisa no documento de 2012 linhas.

### 1. Visão Geral e Filosofia (linhas 26-44)
- [1.1 Princípios Fundamentais](#princípios-fundamentais) (linhas 28-35)
- [1.2 Filosofia de Design](#filosofia-de-design) (linhas 36-44)

### 2. Estrutura de Diretórios (linhas 45-166)
- [2.1 Estrutura Backend](#estrutura-de-diretórios) (linhas 47-84)
- [2.2 Estrutura Frontend](#estrutura-de-diretórios) (linhas 85-166)

### 3. Backend - Laravel (linhas 167-758)
- [3.1 Controllers](#controllers) (linhas 169-304)
  - [3.1.1 Organização](#organização) (linhas 171-192)
  - [3.1.2 Estrutura de um Controller](#estrutura-de-um-controller) (linhas 193-223)
  - [3.1.3 Tipos de Retorno](#tipos-de-retorno) (linhas 224-249)
  - [3.1.4 Controllers que Processam Formulários](#controllers-que-processam-formulários) (linhas 250-304)
- [3.2 Models](#models) (linhas 305-374)
  - [3.2.1 Estrutura Base](#estrutura-base) (linhas 307-366)
  - [3.2.2 Regras para Models](#regras-para-models) (linhas 367-374)
- [3.3 Rotas](#rotas) (linhas 375-475)
  - [3.3.1 Estrutura de Arquivos](#estrutura-de-arquivos) (linhas 377-416)
  - [3.3.2 Nomenclatura de Rotas](#nomenclatura-de-rotas) (linhas 417-436)
  - [3.3.3 Configuração (bootstrap/app.php)](#configuração-bootstrapappphp) (linhas 437-475)
- [3.4 Helpers](#helpers) (linhas 476-600)
  - [3.4.1 ApiResponse (OBRIGATÓRIO)](#apiresponse-obrigatório-para-respostas-json) (linhas 478-550)
  - [3.4.2 Utilities](#utilities) (linhas 551-600)
- [3.5 Middleware](#middleware) (linhas 601-663)
  - [3.5.1 HandleInertiaRequests (OBRIGATÓRIO)](#handleinertiarequests-obrigatório) (linhas 603-636)
  - [3.5.2 Middleware de Autenticação Customizado](#middleware-de-autenticação-customizado) (linhas 637-663)
- [3.6 Migrations](#migrations) (linhas 664-706)
  - [3.6.1 Estrutura Padrão](#estrutura-padrão) (linhas 666-698)
  - [3.6.2 Regras para Migrations](#regras-para-migrations) (linhas 699-706)
- [3.7 Configuração de Auth](#configuração-de-auth) (linhas 707-758)
  - [3.7.1 Múltiplos Guards](#múltiplos-guards) (linhas 709-758)

### 4. Frontend - React + Inertia (linhas 759-1226)
- [4.1 Componentes](#componentes) (linhas 761-930)
  - [4.1.1 Organização de Arquivos](#organização-de-arquivos) (linhas 763-788)
  - [4.1.2 Estrutura de um Componente UI](#estrutura-de-um-componente-ui) (linhas 789-831)
  - [4.1.3 Regras para Componentes UI](#regras-para-componentes-ui) (linhas 832-841)
  - [4.1.4 Componentes de Formulário](#componentes-de-formulário) (linhas 842-877)
  - [4.1.5 Layouts](#layouts) (linhas 878-930)
- [4.2 Páginas (Inertia)](#páginas-inertia) (linhas 931-982)
  - [4.2.1 Estrutura de uma Página](#estrutura-de-uma-página) (linhas 933-973)
  - [4.2.2 Regras para Páginas](#regras-para-páginas) (linhas 974-982)
- [4.3 Formulários](#formulários) (linhas 983-1114)
  - [4.3.1 Com React Hook Form + Zod (OBRIGATÓRIO)](#com-react-hook-form--zod-obrigatório) (linhas 985-1103)
  - [4.3.2 Regras para Formulários](#regras-para-formulários) (linhas 1104-1114)
- [4.4 Contexts](#contexts) (linhas 1115-1157)
  - [4.4.1 Toast Context (OBRIGATÓRIO)](#toast-context-obrigatório) (linhas 1117-1157)
- [4.5 Hooks Customizados](#hooks-customizados) (linhas 1158-1183)
  - [4.5.1 useClickOutside](#useclickoutside) (linhas 1160-1177)
  - [4.5.2 Regras para Hooks](#regras-para-hooks) (linhas 1178-1183)
- [4.6 Tipos TypeScript](#tipos-typescript) (linhas 1184-1226)
  - [4.6.1 Estrutura de Types](#estrutura-de-types) (linhas 1186-1226)

### 5. Autenticação e Autorização (linhas 1227-1285)
- [5.1 Múltiplos Guards](#múltiplos-guards-1) (linhas 1229-1285)
  - [5.1.1 Configuração](#configuração) (linhas 1231-1246)
  - [5.1.2 Middleware de Autenticação](#middleware-de-autenticação) (linhas 1247-1265)
  - [5.1.3 Uso em Rotas](#uso-em-rotas) (linhas 1266-1273)
  - [5.1.4 Uso no Frontend](#uso-no-frontend) (linhas 1274-1285)

### 6. Tratamento de Erros e Respostas (linhas 1286-1339)
- [6.1 Backend](#backend-1) (linhas 1288-1308)
  - [6.1.1 Sempre usar ApiResponse](#sempre-usar-apiresponse) (linhas 1290-1308)
- [6.2 Frontend](#frontend-1) (linhas 1309-1339)
  - [6.2.1 Tratamento de Erros API](#tratamento-de-erros-api) (linhas 1311-1339)

### 7. SEO e Metadados (linhas 1340-1416)
- [7.1 Componente SeoApplication (OBRIGATÓRIO)](#componente-seoapplication-obrigatório) (linhas 1342-1381)
- [7.2 Uso Obrigatório](#uso-obrigatório) (linhas 1382-1399)
- [7.3 Backend - Preparar SEO](#backend---preparar-seo) (linhas 1400-1416)

### 8. Estilização e Design System (linhas 1417-1512)
- [8.1 Tailwind CSS v4](#tailwind-css-v4) (linhas 1419-1501)
  - [8.1.1 Configuração (app.css)](#configuração-appcss) (linhas 1421-1501)
- [8.2 Regras de Estilização](#regras-de-estilização) (linhas 1502-1512)

### 9. Validação e Formulários (linhas 1513-1545)
- [9.1 Backend - Validação](#backend---validação) (linhas 1515-1523)
- [9.2 Frontend - Validação](#frontend---validação) (linhas 1524-1545)

### 10. Regras Obrigatórias e Restrições (linhas 1546-1595)
- [10.1 ❌ NUNCA FAZER](#️-nunca-fazer) (linhas 1548-1580)
- [10.2 ✅ SEMPRE FAZER](#-sempre-fazer) (linhas 1581-1595)

### 11. Configurações e Ferramentas (linhas 1596-1736)
- [11.1 TypeScript](#typescript) (linhas 1598-1620)
- [11.2 Vite](#vite) (linhas 1621-1648)
- [11.3 ESLint](#eslint) (linhas 1649-1680)
- [11.4 Laravel Pint](#laravel-pint) (linhas 1681-1688)
- [11.5 Dependências Principais](#dependências-principais) (linhas 1689-1736)
  - [11.5.1 Backend (composer.json)](#backend-composerjson) (linhas 1691-1707)
  - [11.5.2 Frontend (package.json)](#frontend-packagejson) (linhas 1708-1736)

### 12. Scripts Composer e NPM (linhas 1737-1784)
- [12.1 Composer Scripts](#composer-scripts) (linhas 1739-1765)
- [12.2 NPM Scripts](#npm-scripts) (linhas 1766-1784)

### 13. Checklists (linhas 1785-1826)
- [13.1 Ao Criar uma Nova Página](#ao-criar-uma-nova-página) (linhas 1787-1796)
- [13.2 Ao Criar um Novo Componente UI](#ao-criar-um-novo-componente-ui) (linhas 1797-1806)
- [13.3 Ao Criar um Formulário](#ao-criar-um-formulário) (linhas 1807-1816)
- [13.4 Ao Criar uma Migration](#ao-criar-uma-migration) (linhas 1817-1826)

### 14. Convenções de Nomenclatura (linhas 1827-1895)
- [14.1 Backend](#backend-2) (linhas 1829-1836)
- [14.2 Frontend](#frontend-2) (linhas 1837-1895)

### 15. Padrões de Código (linhas 1896-1926)
- [15.1 PHP](#php) (linhas 1898-1872)
- [15.2 TypeScript](#typescript-1) (linhas 1873-1926)

### 16. Debugging e Logs (linhas 1927-1944)
- [16.1 Backend](#backend-3) (linhas 1929-1912)
- [16.2 Frontend](#frontend-3) (linhas 1913-1927)

### 17. Performance (linhas 1945-1954)
- [17.1 Backend](#backend-4) (linhas 1947-1935)
- [17.2 Frontend](#frontend-4) (linhas 1936-1944)

### 18. Segurança (linhas 1955-1964)
- [18.1 Backend](#backend-5) (linhas 1957-1955)
- [18.2 Frontend](#frontend-5) (linhas 1956-1964)

### 19. Testes (linhas 1965-1996)
- [19.1 Backend (PHPUnit)](#backend-phpunit) (linhas 1967-1978)
- [19.2 Frontend (Vitest)](#frontend-vitest) (linhas 1979-1996)

### 20. Referências (linhas 1997-2012)

---

## Visão Geral e Filosofia

### Princípios Fundamentais

Este projeto segue uma arquitetura **monolítica moderna** com separação clara de responsabilidades:

- **Backend (Laravel):** Responsável por lógica de negócios, validações, autenticação e banco de dados
- **Frontend (React + Inertia):** Responsável por UI, UX e interações, sem APIs REST tradicionais
- **Comunicação:** Inertia.js como bridge - não há APIs JSON endpoints para o frontend

### Filosofia de Design

1. **Separação de Contextos:** Site (público) vs Admin (interno) são contextos isolados
2. **Componentização UI:** Bibliotecas separadas por contexto (`site/ui` vs `admin/ui`)
3. **Type Safety:** TypeScript obrigatório em todo frontend
4. **Simplicidade:** Evitar sobrecamadas e abstrações desnecessárias

---

## Estrutura de Diretórios

```
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Controller.php                 # Controller base (abstrato)
│   │   │   ├── Site/                          # Controllers do site público
│   │   │   │   └── HomeController.php
│   │   │   └── InternalArea/                  # Controllers da área interna
│   │   │       └── Admin/
│   │   │           ├── DashboardAdminController.php
│   │   │           └── LoginAdminController.php
│   │   ├── Helpers/                           # Classes auxiliares
│   │   │   ├── ApiResponse.php                # Padronizador de respostas JSON
│   │   │   └── Utilities.php                  # Funções utilitárias
│   │   └── Middleware/
│   │       ├── HandleInertiaRequests.php      # Middleware Inertia
│   │       └── AuthAdminGate.php              # Guard de autenticação admin
│   ├── Models/
│   │   ├── User.php                           # Model padrão Laravel
│   │   └── Admin.php                          # Model customizado admin
│   └── Providers/
│       └── AppServiceProvider.php             # Service provider principal
│
├── routes/
│   ├── web.php                                # Rotas públicas (site)
│   ├── internal_area.php                      # Rotas protegidas (admin)
│   └── console.php                            # Rotas de console
│
├── resources/
│   ├── css/
│   │   └── app.css                            # Estilos globais (Tailwind v4)
│   ├── js/
│   │   ├── app.tsx                            # Entry point client-side
│   │   ├── ssr.tsx                            # Entry point server-side
│   │   ├── components/
│   │   │   ├── global/                        # Componentes compartilhados
│   │   │   │   └── seo-application/
│   │   │   │       └── SeoApplication.tsx
│   │   │   ├── site/                          # Componentes do site
│   │   │   │   ├── layout/                    # Layouts site
│   │   │   │   │   ├── SiteLayout.tsx
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   └── Container.tsx
│   │   │   │   └── ui/                        # UI components site
│   │   │   │       ├── display/               # Badge, Icon, Tooltip
│   │   │   │       ├── feedback/              # Alert, Skeleton, Spinner
│   │   │   │       ├── form/                  # Input, Label, Select, etc
│   │   │   │       ├── interaction/           # Button, Toggle, etc
│   │   │   │       ├── layout/                # Collapsible, Sidebar
│   │   │   │       └── navigation/            # Breadcrumb, Dropdown, etc
│   │   │   └── admin/                         # Componentes do admin
│   │   │       ├── layout/
│   │   │       │   └── AdminLayout.tsx
│   │   │       └── ui/                        # UI components admin
│   │   │           ├── form/
│   │   │           ├── interaction/
│   │   │           └── feedback/
│   │   ├── contexts/
│   │   │   └── use_toast.tsx                  # Context para toasts
│   │   ├── hooks/                             # Custom React hooks
│   │   │   ├── useClickOutside.ts
│   │   │   ├── useEventListener.ts
│   │   │   ├── useIsomorphicLayoutEffect.ts
│   │   │   ├── usePrefersReducedMotion.ts
│   │   │   └── useResize.ts
│   │   ├── lib/                               # Bibliotecas utilitárias
│   │   │   ├── api.ts                         # Cliente axios configurado
│   │   │   └── utils.ts                       # Função cn() para classes
│   │   ├── pages/                             # Páginas Inertia
│   │   │   ├── site/
│   │   │   │   └── home/
│   │   │   │       └── page.tsx
│   │   │   └── internal-area/
│   │   │       └── admin/
│   │   │           ├── dashboard/
│   │   │           │   └── page.tsx
│   │   │           └── login/
│   │   │               └── page.tsx
│   │   └── types/                             # TypeScript types
│   │       ├── index.ts                       # Types exportados
│   │       ├── global.d.ts                    # Augmentations globais
│   │       ├── IAdmin.ts
│   │       ├── ISeoData.ts
│   │       └── toast_types.ts
│   └── views/
│       └── app.blade.php                      # Root template Inertia
│
├── database/
│   ├── migrations/
│   │   ├── 0001_01_01_000000_create_users_table.php
│   │   ├── 2026_03_11_000001_create_admins_table.php
│   │   └── ...
│   ├── factories/
│   │   ├── UserFactory.php
│   │   └── AdminFactory.php
│   └── seeders/
│       └── DatabaseSeeder.php
│
├── tests/
│   ├── Feature/
│   │   └── Auth/
│   └── Unit/
│
├── config/
│   ├── app.php
│   ├── auth.php
│   ├── inertia.php
│   └── ...
│
├── composer.json                              # Dependências PHP
├── package.json                               # Dependências Node
├── vite.config.ts                             # Config Vite
├── tsconfig.json                              # Config TypeScript
├── pint.json                                  # Config Pint (Laravel Pint)
└── eslint.config.js                           # Config ESLint
```

---

## Backend - Laravel

### Controllers

#### Organização

**NUNCA misturar controllers de diferentes contextos:**

```php
// ❌ ERRADO - Controller misturando contextos
class MixedController extends Controller
{
    public function index() {} // Site
    public function adminDashboard() {} // Admin
}

// ✅ CORRETO - Separado por contexto
// app/Http/Controllers/Site/HomeController.php
namespace App\Http\Controllers\Site;
class HomeController extends Controller {}

// app/Http/Controllers/InternalArea/Admin/DashboardAdminController.php
namespace App\Http\Controllers\InternalArea\Admin;
class DashboardAdminController extends Controller {}
```

#### Estrutura de um Controller

```php
<?php

namespace App\Http\Controllers\InternalArea\Admin;

use App\Http\Controllers\Controller;
use App\Http\Helpers\Utilities;
use Inertia\Inertia;
use Inertia\Response;

class DashboardAdminController extends Controller
{
    public function index(): Response
    {
        // 1. Preparar SEO data (OBRIGATÓRIO)
        $seo_data = Utilities::getSeoSimple(
            'Dashboard',
            'Navegue no gestor de conteúdo do projeto.',
            true // incluir nome do app
        );

        // 2. Retornar render Inertia com SEO
        return Inertia::render('internal-area/admin/dashboard/page', [
            'seoData' => $seo_data,
        ])->withViewData($seo_data);
    }
}
```

#### Tipos de Retorno

```php
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\JsonResponse;

// Página Inertia
public function index(): Response
{
    return Inertia::render('page/path', ['props' => 'value']);
}

// Redirect
public function store(): RedirectResponse
{
    return redirect()->route('name');
}

// JSON (para AJAX/Inertia)
public function ajax(): JsonResponse
{
    return ApiResponse::success($data, 'message');
}
```

#### Controllers que Processam Formulários

```php
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class LoginAdminController extends Controller
{
    public function store(Request $request): JsonResponse|RedirectResponse
    {
        try {
            // 1. Validar
            $credentials = $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required', 'string'],
            ]);

            // 2. Processar
            if (!Auth::guard('admin')->attempt($credentials, $request->boolean('remember'))) {
                // 3. Retornar erro apropriado
                if ($request->expectsJson()) {
                    return ApiResponse::error('Credenciais inválidas', 422, [
                        'email' => ['As credenciais fornecidas estão incorretas.']
                    ]);
                }
                return back()->withErrors(['email' => 'As credenciais...']);
            }

            // 4. Sucesso
            $request->session()->regenerate();

            if ($request->expectsJson()) {
                return ApiResponse::success([
                    'redirect' => route('admin.dashboard')->getTargetUrl(),
                ], 'Login realizado com sucesso!');
            }

            return redirect()->route('admin.dashboard');

        } catch (ValidationException $e) {
            if ($request->expectsJson()) {
                return ApiResponse::validationError($e->errors());
            }
            throw $e;
        } catch (\Exception $e) {
            Log::error('Erro no login', ['exception' => $e]);
            if ($request->expectsJson()) {
                return ApiResponse::fromException($e);
            }
            return back()->with('error', 'Erro interno.');
        }
    }
}
```

### Models

#### Estrutura Base

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasFactory;

    /**
     * SEMPRE definir fillable explicitamente
     * NUNCA usar guarded: true
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'status',
    ];

    /**
     * Sempre esconder campos sensíveis
     */
    protected $hidden = [
        'id',
        'password',
    ];

    /**
     * PHP 8.3+: usar cast() method
     * Laravel 12+: 'hashed' para passwords
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'status'   => 'boolean',
        ];
    }

    /**
     * Usar booted() para eventos de modelo
     */
    protected static function booted(): void
    {
        static::creating(function (Admin $admin): void {
            if (empty($admin->public_id)) {
                $admin->public_id = (string) Str::uuid();
            }
        });
    }
}
```

#### Regras para Models

1. **NUNCA usar `guarded: true`** - Sempre usar `$fillable`
2. **Sempre esconder `password`** em `$hidden`
3. **Usar `hashed` cast** para passwords (Laravel 12+)
4. **Usar `booted()`** para eventos, não `boot()` overriding
5. **Usar PHP 8.3+ return types** em todos métodos

### Rotas

#### Estrutura de Arquivos

```php
<?php

// routes/web.php - Rotas PÚBLICAS (site)
use App\Http\Controllers\Site\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('site.home');
Route::get('/sobre-nos', [HomeController::class, 'index'])->name('site.about');
Route::get('/contato', [HomeController::class, 'index'])->name('site.contact');
```

```php
<?php

// routes/internal_area.php - Rotas PROTEGIDAS (admin)
use App\Http\Controllers\InternalArea\Admin\DashboardAdminController;
use App\Http\Controllers\InternalArea\Admin\LoginAdminController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    // Redirecionamento de root
    Route::get('/', function () {
        return redirect()->route('admin.dashboard');
    })->name('index');

    // Rotas públicas (auth)
    Route::get('/login', [LoginAdminController::class, 'index'])->name('login');
    Route::post('/login', [LoginAdminController::class, 'store'])->name('login.store');
    Route::get('/logout', [LoginAdminController::class, 'destroy'])->name('logout');

    // Rotas protegidas
    Route::middleware('auth.internal_area')->group(function () {
        Route::get('/inicio', [DashboardAdminController::class, 'index'])->name('dashboard');
    });
});
```

#### Nomenclatura de Rotas

**SEMPRE usar prefixo por contexto:**

```php
// Site
Route::get('/', [HomeController::class, 'index'])->name('site.home');
Route::get('/produtos', [ProductController::class, 'index'])->name('site.products.index');

// Admin
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/produtos', [ProductAdminController::class, 'index'])->name('products.index');
});

// API (se houver)
Route::prefix('api')->name('api.')->group(function () {
    Route::get('/products', [ApiProductController::class, 'index'])->name('products.index');
});
```

#### Configuração de Rotas (bootstrap/app.php)

```php
<?php

use App\Http\Middleware\AuthAdminGate;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function () {
            // Carregar rotas adicionais
            Route::middleware('web')
                ->group(base_path('routes/internal_area.php'));
        },
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Middleware web padrão
        $middleware->web(append: [
            HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        // Aliases customizados
        $middleware->alias([
            'auth.internal_area' => AuthAdminGate::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })
    ->create();
```

### Helpers

#### ApiResponse (OBRIGATÓRIO para respostas JSON)

```php
<?php

namespace App\Http\Helpers;

use Illuminate\Support\MessageBag;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class ApiResponse
{
    public static function success(
        $data = [],
        string $message = 'Operação efetuada com sucesso',
        int $code = Response::HTTP_OK
    ) {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    public static function error(
        string $message = 'Erro interno da aplicação',
        int $code = Response::HTTP_INTERNAL_SERVER_ERROR,
        $errors = []
    ) {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ], $code);
    }

    public static function fromException(
        Throwable $exception,
        string $message = 'Erro interno da aplicação',
        int $code = Response::HTTP_INTERNAL_SERVER_ERROR
    ) {
        return self::error($message, $code, [
            'exception' => $exception->getMessage()
        ]);
    }

    public static function validationError(
        $errors,
        string $message = 'Falha na validação dos dados fornecidos.'
    ) {
        if ($message === 'Falha na validação dos dados fornecidos.'
            && $errors instanceof MessageBag
            && $errors->isNotEmpty()) {
            $message = $errors->first();
        }

        return self::error($message, Response::HTTP_UNPROCESSABLE_ENTITY, $errors);
    }

    public static function rateLimitExceeded(
        string $message,
        int $retryAfterSeconds
    ): \Illuminate\Http\JsonResponse {
        return response()->json([
            'success' => false,
            'message' => $message,
            'retry_after' => $retryAfterSeconds,
        ], Response::HTTP_TOO_MANY_REQUESTS);
    }
}
```

#### Utilities

```php
<?php

namespace App\Http\Helpers;

use Illuminate\Support\Str;

class Utilities
{
    /**
     * Gerar dados SEO simples
     */
    public static function getSeoSimple(
        $title,
        $description,
        $with_app_name = false
    ) {
        if ($with_app_name) {
            $title = $title . ' | ' . config('app.name');
        }

        return [
            'title' => $title,
            'description' => $description,
        ];
    }

    /**
     * Slugify string
     */
    public static function friendlyUrl($var)
    {
        return Str::slug($var);
    }

    /**
     * Converter número brasileiro para float
     */
    public static function convertToDouble($number)
    {
        if (stripos($number, ',') !== false) {
            return str_replace(",", ".", str_replace(".", "", $number));
        }
        return $number;
    }
}
```

### Middleware

#### HandleInertiaRequests (OBRIGATÓRIO)

```php
<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user'  => $request->user(),
                'admin' => Auth::guard('admin')->user(),
            ],
        ];
    }
}
```

#### Middleware de Autenticação Customizado

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthAdminGate
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! Auth::guard('admin')->check()) {
            return redirect()->guest(route('admin.login'));
        }

        Auth::shouldUse('admin');

        return $next($request);
    }
}
```

### Migrations

#### Estrutura Padrão

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->uuid('public_id')->unique()->index(); // ID público
            $table->string('name');
            $table->string('email')->unique()->index();
            $table->string('password');
            $table->enum('role', ['superadmin', 'editor'])->default('editor');
            $table->boolean('status')->default(true);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
```

#### Regras para Migrations

1. **Sempre criar método `down()`** para rollback
2. **Usar `public_id` UUID** para referências externas (não expor `id` interno)
3. **Indexar campos usados em buscas** e foreign keys
4. **Usar tipos apropriados**: `enum()` para valores fixos, `boolean()` para flags
5. **Nomes de tabelas no plural**, models no singular

### Configuração de Auth

#### Múltiplos Guards

```php
<?php

// config/auth.php

return [
    'defaults' => [
        'guard' => env('AUTH_GUARD', 'web'),
        'passwords' => env('AUTH_PASSWORD_BROKER', 'users'),
    ],

    'guards' => [
        'web' => [
            'driver'   => 'session',
            'provider' => 'users',
        ],
        'admin' => [
            'driver'   => 'session',
            'provider' => 'admins',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model'  => App\Models\User::class,
        ],
        'admins' => [
            'driver' => 'eloquent',
            'model'  => App\Models\Admin::class,
        ],
    ],

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => env('AUTH_PASSWORD_RESET_TOKEN_TABLE', 'password_reset_tokens'),
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800),
];
```

---

## Frontend - React + Inertia

### Componentes

#### Organização de Arquivos

```
components/
├── global/           # Compartilhado entre site e admin
│   └── seo-application/
│       └── SeoApplication.tsx
├── site/             # Específico do site
│   ├── layout/
│   │   ├── SiteLayout.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── ui/           # Componentes UI do site
│       ├── display/
│       ├── feedback/
│       ├── form/
│       ├── interaction/
│       ├── layout/
│       └── navigation/
└── admin/            # Específico do admin
    ├── layout/
    │   └── AdminLayout.tsx
    └── ui/           # Componentes UI do admin
```

#### Estrutura de um Componente UI

```typescript
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-none disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-site-primary text-white hover:bg-site-primary-hover': variant === 'default',
          'border border-site-primary bg-white text-site-primary hover:bg-site-primary/5': variant === 'outline',
          // ... outras variantes
        },
        {
          'h-9 px-4 py-2': size === 'default',
          'h-8 px-3': size === 'sm',
          'h-10 px-6': size === 'lg',
          'size-9': size === 'icon',
        },
        className
      )}
      {...props}
    />
  );
}

export { Button };
```

#### Regras para Componentes UI

1. **NUNCA misturar componentes site/admin** - Contextos separados
2. **SEMPRE usar `data-slot`** para debugging e testes
3. **Usar `cn()` helper** para mesclar classes
4. **Componentes devem ser headless** quando possível (usar @base-ui/react)
5. **Usar Tailwind classes** inline, não CSS modules
6. **Usar `variant` prop** para estilos alternativos
7. **Usar `size` prop** para tamanhos alternativos

#### Componentes de Formulário

```typescript
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
}

function Input({ className, type, error, ...props }: InputProps) {
  return (
    <div data-slot="input-wrapper" className="flex flex-col gap-1">
      <input
        type={type}
        data-slot="input"
        data-invalid={error ? '' : undefined}
        className={cn(
          'flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          'data-[invalid]:border-red-400 data-[invalid]:focus:border-red-400 data-[invalid]:focus:ring-red-100',
          className
        )}
        {...props}
      />
      {error && (
        <p data-slot="input-error" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export { Input };
```

#### Layouts

**SiteLayout:**

```typescript
import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
```

**AdminLayout:**

```typescript
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <div data-slot="admin-layout" className="flex min-h-screen flex-col">
      <header data-slot="admin-header" className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-lg font-bold text-gray-900">UEEK Admin</span>
          {title && <span className="text-sm text-gray-500">{title}</span>}
        </div>
      </header>
      <main data-slot="admin-main" className="flex-1 p-6">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}
```

### Páginas (Inertia)

#### Estrutura de uma Página

```typescript
import { usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

import AdminLayout from '@/components/admin/layout/AdminLayout';
import type { PageProps } from '@/types';
import { ISeoData } from '@/types/ISeoData';
import SeoApplication from '@/components/global/seo-application/SeoApplication';

interface IProps {
  seoData: ISeoData;
}

export default function Dashboard({ seoData }: IProps) {
  const { auth } = usePage<PageProps>().props;

  return (
    <AdminLayout title="Dashboard">
      <SeoApplication
        title={seoData.title}
        description={seoData.description}
      />
      <div data-slot="admin-dashboard">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Painel</h1>
          <p className="mt-1 text-sm text-gray-500">
            Bem-vindo, {auth.admin?.name}.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-600">Conteúdo aqui.</p>
        </div>
      </div>
    </AdminLayout>
  );
}
```

#### Regras para Páginas

1. **SEMPRE tipar props** com interface `IProps`
2. **SEMPRE incluir `seoData`** nos props
3. **SEMPRE usar `SeoApplication`** como primeiro filho
4. **Usar `data-slot`** no container principal
5. **Usar `usePage<PageProps>()`** para acessar dados compartilhados
6. **Usar `route()` do ziggy** para gerar URLs

### Formulários

#### Com React Hook Form + Zod (OBRIGATÓRIO)

```typescript
import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { route } from 'ziggy-js';
import { z } from 'zod';

import { Input } from '@/components/admin/ui/form/input';
import { Label } from '@/components/admin/ui/form/label';
import { Button } from '@/components/admin/ui/interaction/button';
import { api } from '@/lib/api';
import { useToast } from '@/contexts/use_toast';

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string().trim().min(1, 'A senha é obrigatória'),
});

type FormData = z.infer<typeof formSchema>;

export default function Login() {
  const { showLoadingToast, updateLoadingToast } = useToast();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return;

    const loadingToastId = showLoadingToast({
      title: 'Verificando credenciais...',
      message: 'Aguarde enquanto verificamos seus dados de acesso.',
      visible: true,
    });

    try {
      const response = await api.post(route('admin.login.store'), data);

      updateLoadingToast(loadingToastId, {
        type: 'success',
        title: 'Login realizado com sucesso!',
        message: 'Redirecionando para o painel...',
        visible: true,
      });

      setTimeout(() => {
        window.location.href = response.data.data.redirect;
      }, 1000);
    } catch (error) {
      if (isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message as string | undefined;
        const fieldErrors = error.response?.data?.errors as
          | Record<string, string[]>
          | undefined;

        if (status === 422 && fieldErrors) {
          if (fieldErrors.email?.[0]) {
            setError('email', { message: fieldErrors.email[0] });
          }
          if (fieldErrors.password?.[0]) {
            setError('password', { message: fieldErrors.password[0] });
          }
        }

        updateLoadingToast(loadingToastId, {
          type: 'alert',
          title: 'Falha no login',
          message: message ?? 'Não foi possível fazer login.',
          visible: true,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="email">E-mail</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="admin@exemplo.com.br"
              error={errors.email?.message}
              disabled={isSubmitting}
            />
          )}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </Button>
    </form>
  );
}
```

#### Regras para Formulários

1. **SEMPRE usar React Hook Form**
2. **SEMPRE usar Zod para validação**
3. **SEMPRE usar `Controller`** para inputs controlled
4. **SEMPRE tratar erros 422** e setar no form
5. **SEMPRE mostrar loading toast** durante submit
6. **SEMPRE usar `noValidate`** no form
7. **Usar `api.post()`** para submissão
8. **Usar `window.location.href`** para redirect após sucesso

### Contexts

#### Toast Context (OBRIGATÓRIO)

```typescript
import { useToast } from '@/contexts/use_toast';

export default function MyComponent() {
  const { showLoadingToast, updateLoadingToast, showToast } = useToast();

  const handleAction = async () => {
    // Toast de loading
    const id = showLoadingToast({
      title: 'Processando...',
      message: 'Aguarde enquanto processamos sua solicitação.',
      visible: true,
    });

    try {
      await someAsyncOperation();

      // Atualiza para sucesso
      updateLoadingToast(id, {
        type: 'success',
        title: 'Sucesso!',
        message: 'Operação concluída.',
        visible: true,
      });
    } catch (error) {
      // Atualiza para erro
      updateLoadingToast(id, {
        type: 'alert',
        title: 'Erro',
        message: 'Não foi possível completar a operação.',
        visible: true,
      });
    }
  };

  return <button onClick={handleAction}>Action</button>;
}
```

### Hooks Customizados

#### useClickOutside

```typescript
import { useClickOutside } from '@/hooks/useClickOutside';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
}
```

#### Regras para Hooks

1. **Hooks devem ser reutilizáveis**
2. **Usar tipos TypeScript apropriados**
3. **Documentar com JSDoc** quando complexo

### Tipos TypeScript

#### Estrutura de Types

```typescript
// resources/js/types/index.ts
export type { PageProps, Page } from '@inertiajs/core';
export type { IAdmin } from './IAdmin';
export type { User } from './index';

// resources/js/types/IAdmin.ts
export interface IAdmin {
  public_id: string;
  name: string;
  email: string;
  role: 'superadmin' | 'editor';
  status: boolean;
}

// resources/js/types/ISeoData.ts
export interface ISeoData {
  title: string;
  description: string;
  keywords?: string;
}

// resources/js/types/global.d.ts
declare module '@inertiajs/core' {
  export interface InertiaConfig {
    sharedPageProps: {
      name: string;
      auth: {
        user: User | null;
        admin: IAdmin | null;
      };
      [key: string]: unknown;
    };
  }
}
```

---

## Autenticação e Autorização

### Múltiplos Guards

#### Configuração

```php
// config/auth.php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
    'admin' => [
        'driver' => 'session',
        'provider' => 'admins',
    ],
],
```

#### Middleware de Autenticação

```php
// app/Http/Middleware/AuthAdminGate.php
class AuthAdminGate
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! Auth::guard('admin')->check()) {
            return redirect()->guest(route('admin.login'));
        }

        Auth::shouldUse('admin');

        return $next($request);
    }
}
```

#### Uso em Rotas

```php
Route::middleware('auth.internal_area')->group(function () {
    // Rotas protegidas
});
```

#### Uso no Frontend

```typescript
import { usePage } from '@inertiajs/react';

const { auth } = usePage<PageProps>().props;
// auth.user - usuário do guard 'web'
// auth.admin - usuário do guard 'admin'
```

---

## Tratamento de Erros e Respostas

### Backend

#### Sempre usar ApiResponse

```php
// Sucesso
return ApiResponse::success($data, 'Mensagem de sucesso');

// Erro
return ApiResponse::error('Mensagem de erro', 400);

// Erro de validação
return ApiResponse::validationError($errors, 'Mensagem');

// Exceção
return ApiResponse::fromException($e);

// Rate limit
return ApiResponse::rateLimitExceeded('Muitas tentativas', $retryAfter);
```

### Frontend

#### Tratamento de Erros API

```typescript
try {
  const response = await api.post(route('endpoint'), data);
} catch (error) {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data?.message;
    const fieldErrors = error.response?.data?.errors;

    // Tratar por status
    switch (status) {
      case 422:
        // Erro de validação
        break;
      case 429:
        // Rate limit
        break;
      case 500:
        // Erro interno
        break;
    }
  }
}
```

---

## SEO e Metadados

### Componente SeoApplication (OBRIGATÓRIO)

```typescript
import { Head } from '@inertiajs/react';

interface IProps {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  indexAndFollow?: boolean;
}

export default function SeoApplication({
  title,
  description,
  image = '',
  keywords = '',
  indexAndFollow = true
}: IProps) {
  const defaultImage = `${typeof window !== 'undefined' ? window.location.origin : ''}/assets/images/background/image-seo.png`;
  const imageUrl = image || defaultImage;

  return (
    <Head>
      <title>{title}</title>
      <meta head-key="robots" name="robots" content={indexAndFollow ? 'index, follow' : 'noindex, nofollow'} />
      <meta head-key="description" name="description" content={description} />

      <meta head-key="og:title" property='og:title' content={title} />
      <meta head-key="og:description" property='og:description' content={description} />
      <meta head-key="og:image" property='og:image' content={imageUrl} />

      {keywords && <meta head-key="keywords" name="keywords" content={keywords} />}
      <link head-key="canonical" rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
    </Head>
  );
}
```

### Uso Obrigatório

**TODAS as páginas devem usar SeoApplication:**

```typescript
export default function Page({ seoData }: IProps) {
  return (
    <Layout>
      <SeoApplication
        title={seoData.title}
        description={seoData.description}
      />
      {/* Conteúdo */}
    </Layout>
  );
}
```

### Backend - Preparar SEO

```php
// No controller
$seo_data = Utilities::getSeoSimple(
    'Título da Página',
    'Descrição da página',
    true // incluir nome do app
);

return Inertia::render('page/path', [
    'seoData' => $seo_data,
])->withViewData($seo_data);
```

---

## Estilização e Design System

### Tailwind CSS v4

#### Configuração (app.css)

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@source '../views';
@source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';

@theme {
  /* Site Colors */
  --color-site-primary: var(--color-site-primary);
  --color-site-primary-hover: var(--color-site-primary-hover);

  /* Admin Colors */
  --color-admin-primary: var(--color-admin-primary);
  --color-admin-primary-hover: var(--color-admin-primary-hover);

  --font-sans: var(--font-primary), ui-sans-serif, system-ui, sans-serif;
  --radius-default: var(--radius-default);
}

@layer base {
  :root {
    /* Site */
    --color-site-primary: #f97316;
    --color-site-primary-hover: #ea580c;

    /* Admin */
    --color-admin-primary: #111827;
    --color-admin-primary-hover: #374151;

    /* Typography */
    --font-primary: 'Inter';
    --radius-default: 0.375rem;

    /* Spacing */
    --site-default-lateral-padding-mobile: 1rem;
    --site-default-lateral-padding-desktop: 5rem;
  }

  body {
    @apply bg-white text-gray-900 antialiased;
  }

  button,
  a {
    @apply cursor-pointer;
  }

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px var(--color-site-primary);
    transition: box-shadow 300ms ease 100ms;
  }
}

@layer utilities {
  .link-underline {
    position: relative;
  }

  .link-underline::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-site-primary);
    transition: width 0.3s ease;
  }

  .link-underline:hover::after,
  .link-underline:focus-visible::after,
  .link-underline.active::after {
    width: 100%;
  }
}
```

### Regras de Estilização

1. **Usar variáveis CSS** para cores do tema
2. **Separar cores site/admin** com prefixo
3. **Usar `@layer base`** para reset e estilos globais
4. **Usar `@layer utilities`** para utilidades customizadas
5. **SEMPRE usar classes Tailwind**, não CSS inline
6. **Usar `data-slot`** para seleção em testes

---

## Validação e Formulários

### Backend - Validação

```php
$request->validate([
    'email' => ['required', 'email'],
    'password' => ['required', 'string', 'min:8'],
]);
```

### Frontend - Validação

```typescript
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z
    .string()
    .trim()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .regex(/[A-Z]/, 'A senha deve conter ao menos uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter ao menos um número'),
});
```

---

## Regras Obrigatórias e Restrições

### ❌ NUNCA FAZER

1. **NUNCA misturar contextos site/admin**
   - Componentes UI não devem ser compartilhados
   - Controllers não devem misturar lógica de contextos diferentes

2. **NUNCA usar `guarded: true`** em Models
   - Sempre usar `$fillable` explícito

3. **NUNCA expor `id` interno** da tabela
   - Usar `public_id` (UUID) para referências externas

4. **NUNCA usar `any` sem motivo** no TypeScript
   - Sempre tipar corretamente

5. **NUNCA fazer APIs REST tradicionais** para o frontend
   - Usar Inertia - o Laravel retorna views Inertia

6. **NUNCA usar CSS inline** ou styled-components
   - Usar Tailwind classes

7. **NUNCA submeter formulários** sem loading feedback
   - Sempre usar toast de loading

8. **NUNCA esquecer SEO** em páginas públicas
   - Sempre usar `SeoApplication`

9. **NUNCA usar `window.location`** para navegação normal
   - Usar `<Link>` do Inertia ou `router.visit()`

10. **NUNCA fazer lógica de negócio** no frontend
    - Validar no backend é obrigatório

### ✅ SEMPRE FAZER

1. **SEMPRE tipar props** dos componentes React
2. **SEMPRE usar `data-slot`** nos elementos principais
3. **SEMPRE tratar erros 422** nos formulários
4. **SEMPRE usar `ApiResponse`** para respostas JSON
5. **SEMPRE usar `Utilities::getSeoSimple()`** para SEO
6. **SEMPRE usar `cn()` helper** para classes CSS
7. **SEMPRE usar Zod** para validação frontend
8. **SEMPRE usar React Hook Form** para formulários
9. **SEMPRE separar componentes** por contexto (site/admin)
10. **SEMPRE usar migrations** para alterações no DB

---

## Configurações e Ferramentas

### TypeScript

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitAny": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./resources/js/*"]
    },
    "jsx": "react-jsx"
  }
}
```

### Vite

```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
  ],
  esbuild: {
    jsx: 'automatic',
  },
});
```

### ESLint

```javascript
export default [
  js.configs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  ...typescript.configs.recommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  prettier,
];
```

### Laravel Pint

```json
{
  "preset": "laravel"
}
```

### Dependências Principais

#### Backend (composer.json)

```json
{
  "require": {
    "php": "^8.2",
    "inertiajs/inertia-laravel": "^2.0",
    "laravel/framework": "^12.0",
    "tightenco/ziggy": "^2.6"
  },
  "require-dev": {
    "laravel/pint": "^1.24",
    "phpunit/phpunit": "^11.5.50"
  }
}
```

#### Frontend (package.json)

```json
{
  "dependencies": {
    "@base-ui/react": "^1.0.0",
    "@hookform/resolvers": "^5.2.2",
    "@inertiajs/react": "^2.3.7",
    "@tailwindcss/vite": "^4.1.11",
    "axios": "^1.13.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.475.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.71.2",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.0.1",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.2",
    "vite": "^7.0.4",
    "ziggy-js": "^2.6.2",
    "zod": "^4.3.6"
  }
}
```

---

## Scripts Composer e NPM

### Composer Scripts

```json
{
  "scripts": {
    "setup": [
      "composer install",
      "@php -r \"file_exists('.env') || copy('.env.example', '.env');\"",
      "@php artisan key:generate",
      "@php artisan migrate --force",
      "npm install",
      "npm run build"
    ],
    "dev": [
      "Composer\\Config::disableProcessTimeout",
      "npx concurrently \"php artisan serve\" \"npm run dev\""
    ],
    "lint": [
      "pint --parallel"
    ],
    "test": [
      "@php artisan test"
    ]
  }
}
```

### NPM Scripts

```json
{
  "scripts": {
    "build": "vite build",
    "build:ssr": "vite build && vite build --ssr",
    "dev": "vite",
    "format": "prettier --write resources/",
    "format:check": "prettier --check resources/",
    "lint": "eslint . --fix",
    "lint:check": "eslint .",
    "types:check": "tsc --noEmit"
  }
}
```

---

## Checklists

### Ao Criar uma Nova Página

- [ ] Criar controller no namespace apropriado (`Site` ou `InternalArea`)
- [ ] Preparar `seoData` com `Utilities::getSeoSimple()`
- [ ] Criar rota com nome apropriado (`site.*` ou `admin.*`)
- [ ] Criar página em `resources/js/pages/`
- [ ] Usar `SeoApplication` como primeiro componente
- [ ] Tipar props com interface `IProps`
- [ ] Usar layout apropriado (`SiteLayout` ou `AdminLayout`)

### Ao Criar um Novo Componente UI

- [ ] Criar no contexto apropriado (`site/ui` ou `admin/ui`)
- [ ] Usar `data-slot` no elemento principal
- [ ] Tipar props corretamente
- [ ] Usar `cn()` helper para classes
- [ ] Usar Tailwind classes (não CSS inline)
- [ ] Suportar variantes quando apropriado
- [ ] Exportar nomeado (não default)

### Ao Criar um Formulário

- [ ] Criar schema Zod para validação
- [ ] Usar React Hook Form
- [ ] Usar `Controller` para inputs
- [ ] Tratar erros 422 do backend
- [ ] Mostrar loading toast durante submit
- [ ] Usar `api` do axios
- [ ] Fazer redirect com `window.location.href` após sucesso

### Ao Criar uma Migration

- [ ] Criar método `up()` e `down()`
- [ ] Usar `public_id` (UUID) para IDs externos
- [ ] Indexar campos usados em buscas
- [ ] Usar tipos apropriados (`enum`, `boolean`)
- [ ] Nome de tabela no plural

---

## Convenções de Nomenclatura

### Backend

- **Controllers:** `{Nome}Controller` (ex: `HomeController`, `DashboardAdminController`)
- **Models:** Singular (ex: `User`, `Admin`)
- **Migrations:** `YYYY_MM_DD_HHMMSS_descrição_table` (ex: `2026_03_11_000001_create_admins_table.php`)
- **Rotas:** Prefixo por contexto (`site.home`, `admin.dashboard`)
- **Views:** lowercase com hífens (`internal-area/admin/dashboard/page`)

### Frontend

- **Componentes:** PascalCase (`Button.tsx`, `AdminLayout.tsx`)
- **Arquivos:** lowercase com hífens ou underscores (`use-click-outside.ts`)
- **Diretórios:** lowercase (`site/ui`, `internal-area/admin`)
- **Props:** camelCase (`onClick`, `errorMessage`)
- **Types:** PascalCase com prefixo `I` (`IUser`, `ISeoData`)
- **Interfaces:** PascalCase (`PageProps`, `ButtonProps`)

---

## Padrões de Código

### PHP

```php
// Use PHP 8.2+ features
public function index(): Response
{
    // Typed properties
    private readonly string $name;

    // Constructor promotion
    public function __construct(
        private readonly Service $service
    ) {}

    // Match expression
    $result = match ($value) {
        'a' => 'Alpha',
        'b' => 'Beta',
        default => 'Other',
    };
}
```

### TypeScript

```typescript
// Use type imports para tipos
import type { ComponentProps } from 'react';
import type { PageProps } from '@/types';

// Use interfaces para objetos, type para unions
interface IProps {
  title: string;
  description: string;
}

type ButtonVariant = 'default' | 'outline' | 'ghost';

// Use generics apropriados
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Debugging e Logs

### Backend

```php
use Illuminate\Support\Facades\Log;

// Log de informação
Log::info('Tentativa de login', ['email' => $email]);

// Log de warning
Log::warning('Múltiplas tentativas falhadas', ['ip' => $ip]);

// Log de erro
Log::error('Erro ao processar pagamento', ['exception' => $e]);
```

### Frontend

```typescript
// Use console.log moderadamente
console.log('Debug:', data);

// Para debugging de componentes
useEffect(() => {
  console.log('Component mounted', props);
}, []);
```

---

## Performance

### Backend

1. **Usar eager loading** para relacionamentos
2. **Cache** de dados frequentemente acessados
3. **Indexar** colunas usadas em WHERE e JOIN
4. **Usar `select()`** para apenas colunas necessárias

### Frontend

1. **Code splitting** por página (Inertia já faz)
2. **Lazy loading** de componentes pesados
3. **Usar `React.memo`** para componentes que não precisam re-renderizar
4. **Evitar renders desnecessários** com `useMemo` e `useCallback`

---

## Segurança

### Backend

1. **Validação SEMPRE** no backend
2. **Sanitizar inputs** do usuário
3. **Usar CSRF** (Laravel já inclui)
4. **Rate limiting** para rotas sensíveis
5. **Hash de passwords** com `hashed` cast
6. **Não expor IDs internos**

### Frontend

1. **Nunca confiar apenas** em validação frontend
2. **Sanitizar HTML** ao renderizar user content
3. **Usar HTTPS** em produção
4. **Proteger contra XSS** (React já escapa por padrão)

---

## Testes

### Backend (PHPUnit)

```php
tests/
├── Feature/
│   └── Auth/
│       ├── LoginTest.php
│       └── RegistrationTest.php
└── Unit/
    └── UserTest.php
```

### Frontend (Vitest)

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Button } from '@/components/site/ui/interaction/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

---

## Referências

- [Laravel 12.x Documentation](https://laravel.com/docs/12.x)
- [Inertia.js](https://inertiajs.com/)
- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Ziggy](https://ziggy.dev/)
- [@base-ui/react](https://base-ui.com.react/)

---

**Este documento é o padrão oficial de desenvolvimento.**
**Qualquer divergência deve ser discutida com a equipe de arquitetura.**
