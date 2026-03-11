---
name: debuggar
description: Debugging sistemático de bugs e problemas complexos. Use para investigar e resolver bugs, crashes, problemas de performance e comportamentos inesperados.
---

Quando chamar esse comando você deve OBRIGATORIAMENTE usar o agente **debugger** para investigação sistemática de bugs, seguindo o processo de 4 fases:

## ETAPA 1: Reproduzir o Bug

Antes de tudo, **SEMPRE** reproduza o bug:

1. **Coletar informações do usuário**:
   - O que deveria acontecer?
   - O que está acontecendo?
   - Passos para reproduzir?
   - Mensagens de erro?

2. **Reproduzir o bug**:
   - Seguir os passos exatos
   - Verificar se é reproduzível
   - Documentar o comportamento observado

## ETAPA 2: Isolar o Problema

Use o agente debugger para:

1. **Identificar a área afetada**: frontend, backend, database, etc.
2. **Adicionar logs estratégicos** para entender o fluxo
3. **Usar debugging tools** breakpoints, console.log, etc.
4. **Reduzir o escopo**: Isolar o mínimo código reproduzível

## ETAPA 3: Entender a Root Cause

Investigar a causa raiz:

1. **Analisar stack trace** (se houver)
2. **Verificar dados de entrada**
3. **Validar suposições** sobre o código
4. **Identificar o ponto exato** onde o comportamento diverge do esperado

## ETAPA 4: Fixar e Validar

Resolver e validar:

1. **Implementar a correção** mínima necessária
2. **Testar o fix** para confirmar que resolve o bug
3. **Verificar regressões** - nada mais quebrou?
4. **Adicionar testes** para prevenir recorrência

---

## IMPORTANTE

- **NUNCA** assuma a causa sem investigar
- **SEMPRE** reproduza o bug antes de tentar fixar
- **DOCUMENTE** o processo de debugging
- **CONSULTE** `.claude/CONTEXT/PADROES_ARQUITETURA.md` para padrões do projeto
- **PERGUNTE** ao usuário se não conseguir reproduzir o bug
