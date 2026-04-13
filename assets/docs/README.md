# SDD-Ueek - Guia Rapido

Bem-vindo ao **Spec Driven Development**! Esta pasta `.claude/` foi configurada automaticamente pelo `sdd-ueek` para dar superpoderes ao Claude Code no seu projeto.

---

## Estrutura

```
.claude/
├── agents/          6 agentes especializados (auto-ativados pelo Claude)
├── commands/        8 comandos que voce chama via /nome
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
| `/arquitetura` | Ver padroes, convencoes e exemplos do projeto |
| `/implementar` | Criar feature baseada em referencia existente |
| `/revisar` | Revisar codigo antes do commit |
| `/card` | Gerar User Story com Acceptance Criteria |
| `/pr` | Gerar descricao de Pull Request |
| `/doc` | Documentar componentes, servicos, APIs |
| `/debuggar` | Debugging sistatico com root cause analysis |
| `/explorar` | Explorar codebase, auditorias, analise de viabilidade |

### Agents (o Claude decide)

O Claude ativa automaticamente o agente certo quando detecta a necessidade. Voce nao precisa chamar diretamente.

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

## Primeiros passos

1. Abra o Claude Code neste projeto
2. Digite `/arquitetura` para ver os padroes do projeto
3. Use `/implementar` para criar sua primeira feature
4. Sempre use `/revisar` antes de commitar

Para exemplos detalhados e dicas avancadas, leia [COMO_USAR.md](COMO_USAR.md).
