---
name: iniciar-projeto
description: Inicializa o documento de padrões arquiteturais investigando o codebase. Use para descobrir e documentar os padrões específicos do projeto após a instalação do SDD.
---

Quando chamar esse comando você deve OBRIGATORIAMENTE seguir este workflow de investigação:

## ETAPA 1: Ler o Template de Investigação

1. Leia o arquivo `.claude/CONTEXT/PADROES_ARQUITETURA.md`
2. Verifique se o `status` é `investigation-pending`
3. Se já for `active`, informe o usuário que os padrões já foram inicializados

## ETAPA 2: Executar as Investigações

Siga as instruções de investigação definidas no template:
1. Anuncie o início da investigação ao usuário
2. Para cada seção de investigação:
   - Execute os comandos de investigação indicados (Grep, Glob, Read)
   - Apresente descobertas parciais ao usuário
   - Confirme se o usuário concorda com as descobertas

## ETAPA 3: Gerar o Documento Final

1. Compile todas as descobertas
2. Reescreva `.claude/CONTEXT/PADROES_ARQUITETURA.md`:
   - Remova as instruções de investigação
   - Mantenha apenas o documento final com as descobertas
   - Altere `status: investigation-pending` para `status: active`
3. Apresente o resumo final ao usuário

## IMPORTANTE

- **SEMPRE** use ferramentas (Grep, Glob, Read) para investigar o código
- **NUNCA** assuma padrões - descubra através do código real
- **APRESENTE** descobertas parciais a cada 20% de progresso
- **PERGUNTE** ao usuário sobre escolhas incomuns
- **DOCUMENTE** exemplos reais do código do projeto
