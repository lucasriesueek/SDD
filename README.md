# SDD - Spec Driven Development

---

## Instalacao Rapida

1. Extraia o arquivo `.zip` do SDD na raiz do seu projeto
2. Abra o Claude Code na raiz do projeto
3. Peca ao Claude para executar o instalador com o caminho completo:
   ```
   Execute o arquivo INSTALAR_SDD.md que esta na pasta SDD/
   ```
   Ou fornea o caminho completo, por exemplo:
   ```
   C:\Users\seu-usuario\projeto\SDD\INSTALAR_SDD.md
   ```

O instalador detecta automaticamente sua stack (Angular, React, Node, Python, etc.), gera documentos de contexto personalizados e configura tudo na pasta `.claude/`.

---

## O que e o SDD

**Spec Driven Development (SDD)** e um kit de configuracao para Claude Code que transforma como a IA entende e trabalha no seu projeto.

Em vez de pedir coisas vagas ao Claude (`"crie um componente"`), voce usa **specs** e **commands** para garantir que cada linha de codigo siga os padroes do projeto.

### O que acontece apos instalar

O SDD cria dentro de `.claude/`:

| O que | Quantidade | O que faz |
|-------|-----------|-----------|
| **Commands** | 8 | Skills que voce chama via `/nome` |
| **Agents** | 6 | Especialistas que o Claude usa automaticamente |
| **Templates de contexto** | 8 | Documentos personalizados para sua stack |

---

## Commands disponiveis

Voce chama diretamente. Controle total.

| Command | O que faz |
|---------|----------|
| `/arquitetura` | Mostra padroes do projeto, convenções e exemplos de codigo |
| `/implementar` | Cria feature nova baseada em uma referencia existente |
| `/revisar` | Revisa codigo antes do commit (seguranca, padroes, performance) |
| `/card` | Gera User Story com Acceptance Criteria |
| `/pr` | Gera descricao de Pull Request |
| `/doc` | Documenta componentes, servicos, APIs |
| `/debuggar` | Debugging sistematico com root cause analysis |
| `/explorar` | Exploracao de codebase, auditorias e analise de viabilidade |

### Exemplo de uso

```
/implementar
Crie "gestao de produtos" seguindo o padrao de "gestao de clientes"
```

O Claude analisa a feature de referencia e replica os mesmos padroes na nova feature.

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

## Estrutura do pacote SDD

```
SDD/
├── INSTALAR_SDD.md          # Instalador automatico
├── COMO_USAR.md             # Guia completo de uso
├── README.md                # Este arquivo
├── VERSION.md               # Controle de versao
├── commands/                # 8 commands (/arquitetura, /implementar, etc.)
├── agents/                  # 6 agentes especializados
├── templates/               # 8 templates de contexto por stack
└── docs/                    # Documentacao adicional
    ├── ESTRUTURA.md         # Estrutura detalhada
    └── PERSONALIZACAO.md    # Como personalizar
```

---

## Stacks suportadas

O instalador detecta automaticamente e gera contexto especifico para:

Angular 17+, React, Next.js, Node.js (Express/Fastify/NestJS), Python (FastAPI/Django), .NET, Rust, Go

---

## Para ir alem

- [COMO_USAR.md](COMO_USAR.md) - Guia completo com exemplos praticos e dicas avancadas
- [docs/ESTRUTURA.md](docs/ESTRUTURA.md) - Explicacao detalhada de cada arquivo
- [docs/PERSONALIZACAO.md](docs/PERSONALIZACAO.md) - Como criar commands e agents proprios

---

**Versao 2.0.0** | SDD Team
