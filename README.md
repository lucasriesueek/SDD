# SDD-Ueek - Spec Driven Development

> CLI tool para configurar AI-ready specs, agents e commands no Claude Code automaticamente.

## Instalacao Rapida

```bash
# Via npx (sem instalacao)
npx sdd-ueek init

# Ou instalar globalmente
npm install -g sdd-ueek
sdd-ueek init
```

O CLI detecta automaticamente sua stack (Angular, React, Node, Python, etc.), gera documentos de contexto personalizados e configura tudo na pasta `.claude/`.

---

## O que e o SDD

**Spec Driven Development (SDD)** e um kit de configuracao para Claude Code que transforma como a IA entende e trabalha no seu projeto.

Em vez de pedir coisas vagas ao Claude (`"crie um componente"`), voce usa **specs** e **commands** para garantir que cada linha de codigo siga os padroes do projeto.

### O que acontece apos instalar

O SDD-Ueek cria dentro de `.claude/`:

| O que | Quantidade | O que faz |
|-------|-----------|-----------|
| **Commands** | 8 | Skills que voce chama via `/nome` |
| **Agents** | 6 | Especialistas que o Claude usa automaticamente |
| **Templates de contexto** | 8 | Documentos personalizados para sua stack |

---

## Uso

### `sdd-ueek init`

Inicializa o SDD no projeto atual com deteccao automatica de stack.

```bash
sdd-ueek init                  # Instalacao interativa
sdd-ueek init -y               # Usar valores padrao
sdd-ueek init --stack angular  # Forcar stack Angular
sdd-ueek init --no-agents      # Nao instalar agentes
```

### `sdd-ueek list`

Lista os recursos disponiveis.

```bash
sdd-ueek list            # Lista tudo
sdd-ueek list stacks     # Stacks suportadas
sdd-ueek list templates  # Templates disponiveis
sdd-ueek list agents     # Agentes disponiveis
sdd-ueek list commands   # Commands disponiveis
```

---

## Commands disponiveis

Voce chama diretamente no Claude Code. Controle total.

| Command | O que faz |
|---------|----------|
| `/arquitetura` | Mostra padroes do projeto, convencoes e exemplos de codigo |
| `/implementar` | Cria feature nova baseada em uma referencia existente |
| `/revisar` | Revisa codigo antes do commit (seguranca, padroes, performance) |
| `/card` | Gera User Story com Acceptance Criteria |
| `/pr` | Gera descricao de Pull Request |
| `/doc` | Documenta componentes, servicos, APIs |
| `/debuggar` | Debugging sistematico com root cause analysis |
| `/explorar` | Exploracao de codebase, auditorias e analise de viabilidade |

---

## Agents disponiveis

O Claude ativa automaticamente quando detecta a necessidade.

| Agent | Quando o Claude usa |
|-------|-------------------|
| `code-archaeologist` | Analise de codigo legado e refatoracao |
| `debugger` | Bugs complexos e problemas de performance |
| `documentation-writer` | Quando voce pede para documentar algo |
| `frontend-specialist` | Trabalho com UI, componentes, Angular/React |
| `mobile-developer` | Projetos React Native ou Flutter |
| `explorer-agent` | Exploracao de codebase, auditorias arquiteturais e analise de viabilidade |

---

## Stacks suportadas

Angular 17+, React, Next.js, Vue, Node.js (Express/Fastify/NestJS), Python (FastAPI/Django), Go, Rust, .NET

---

## Fluxos recomendados

**Nova feature:**
```
/arquitetura → /implementar → /revisar → /pr
```

**Bug fix:**
```
/debuggar → /arquitetura → /revisar → /card
```

**Code review:**
```
/revisar → /arquitetura → /pr
```

---

## Para ir alem

- [COMO_USAR.md](COMO_USAR.md) - Guia completo com exemplos praticos e dicas avancadas
- [docs/ESTRUTURA.md](docs/ESTRUTURA.md) - Explicacao detalhada de cada arquivo
- [docs/PERSONALIZACAO.md](docs/PERSONALIZACAO.md) - Como criar commands e agents proprios

---

## Desenvolvimento

```bash
npm install       # Instalar dependencias
npm run dev       # Rodar em modo dev com tsx
npm run build     # Compilar com tsup
npm run test      # Rodar testes com vitest
npm link          # Criar link global para testar localmente
```

---

**Versao 2.1.0** | [npm](https://www.npmjs.com/package/sdd-ueek) | SDD Team
