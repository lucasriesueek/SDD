## 1. Introdução: O que é SDD

### O que é Spec Driven Development?

**Spec Driven Development (SDD)** é uma abordagem de desenvolvimento onde você **define specifications (specs)** primeiro, e depois usa a IA para **implementar seguindo essas specs**.

Diferente de abordagens tradicionais onde você dá instruções vagas à IA ("crie um componente de usuário"), com SDD você:
1. **Define padrões claros** de arquitetura
2. **Especifica regras de negócio** de forma estruturada
3. **Documenta contratos** de API e modelos de dados
4. **Usa commands/skills** para tarefas específicas

### Por que usar SDD no seu projeto?

| Benefício | Como Ajuda |
|-----------|------------|
| **Consistência** | Todo código segue os mesmos padrões |
| **Velocidade** | Commands executam tarefas complexas em segundos |
| **Qualidade** | Revisões automatizadas detectam problemas |
| **Documentação** | Sempre atualizada com o código |
| **Onboarding** | Novos devs entendem o projeto rapidamente |

### Benefícios Imediatos

Após instalar SDD, você terá:

- ✅ **7 commands** para tarefas comuns (`/arquitetura`, `/implementar`, `/revisar`, etc.)
- ✅ **5 agentes especializados** que a IA pode usar automaticamente
- ✅ **8 documentos de contexto** personalizados para sua stack
- ✅ **Padrões consistentes** em todo o projeto

---

## 2. Visão Geral da Estrutura

### Diagrama da Estrutura

```
SDD/ (Pacote de distribuição)
├── INSTALAR_SDD.md       # Script de instalação automática
├── COMO_USAR.md          # ← Você está aqui! Guia completo
├── VERSION.md            # Controle de versão
├── settings.json         # Configurações do Claude Code
│
├── commands/             # Commands/Skills (chamados via /nome)
│   ├── arquitetura.md
│   ├── card.md
│   ├── debuggar.md
│   ├── doc.md
│   ├── implementar.md
│   ├── pr.md
│   └── revisar.md
│
├── agents/               # Agentes especializados (auto-selecionados)
│   ├── code-archaeologist.md
│   ├── debugger.md
│   ├── documentation-writer.md
│   ├── frontend-specialist.md
│   └── mobile-developer.md
│
├── templates/            # Templates de documentos
│   ├── PADROES_ARQUITETURA.md
│   ├── REVISAO_CODIGO.md
│   ├── CRIAR_CARD_TASK.md
│   ├── PADROES_DE_PR.md
│   ├── SPEC_BUSINESS_RULES.md
│   ├── SPEC_API_CONTRACT.md
│   ├── SPEC_DATA_MODEL.md
│   └── SPEC_WORKFLOW.md
│
└── docs/                 # Documentação adicional
    ├── ESTRUTURA.md
    └── PERSONALIZACAO.md
```

### Resumo Rápido

| Pasta | Propósito | Quem decide usar |
|-------|-----------|-----------------|
| **commands/** | Skills que você chama via `/nome` | **Você** 💪 |
| **agents/** | Especialistas que a IA usa automaticamente | **Sistema Claude** 🤖 |
| **templates/** | Modelos de documentos para gerar no projeto | Script de instalação |
| **docs/** | Documentação sobre o próprio SDD | Você (lê diretamente) |

---
