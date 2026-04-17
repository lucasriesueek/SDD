# SDD-Ueek - Guia Rapido

Bem-vindo ao **Spec Driven Development**! Esta pasta `.claude/` foi configurada automaticamente pelo `sdd-ueek` para dar superpoderes ao Claude Code no seu projeto.

---

## Estrutura

```
.claude/
├── agents/          7 agentes especializados (auto-ativados pelo Claude)
├── commands/        9 comandos que voce chama via /nome
├── CONTEXT/         Documentos de contexto personalizados para sua stack
├── settings.json    Configuracao do status line
├── README.md        Voce esta aqui
└── COMO_USAR.md     Guia completo com exemplos praticos
```

---

## Como usar

### Commands (voce controla)

Digite `/nome` no Claude Code e descreva o que precisa:

| Command | Para que serve |
|---------|---------------|
| `/criar-card` | Gerar User Story com Acceptance Criteria |
| `/criar-pr` | Gerar descricao de Pull Request |
| `/criar-doc` | Documentar componentes, servicos, APIs |
| `/diretrizes` | Ver diretrizes, padroes e exemplos do projeto |
| `/revisar` | Revisar codigo antes do commit |
| `/apartir` | Criar feature baseada em referencia existente |
| `/debuggar` | Debugging sistatico com root cause analysis |
| `/investigar` | Explorar codebase, auditorias, analise de viabilidade |
| `/ueek-laravel` | Especialista Laravel + Inertia + React |

### Agents (o Claude decide)

O Claude ativa automaticamente o agente certo quando detecta a necessidade. Voce nao precisa chamar diretamente.

---

## Fluxos recomendados

**Nova feature:**
```
/diretrizes → /apartir → /revisar → /criar-pr
```

**Bug fix:**
```
/debuggar → /diretrizes → /revisar → /criar-card
```

**Code review:**
```
/revisar → /diretrizes → /criar-pr
```

---

## Primeiros passos

1. Abra o Claude Code neste projeto
2. Digite `/diretrizes` para ver os padroes do projeto
3. Use `/apartir` para criar sua primeira feature
4. Sempre use `/revisar` antes de commitar

Para exemplos detalhados e dicas avancadas, leia [COMO_USAR.md](COMO_USAR.md).
