---
name: apartir
description: Implementa nova feature baseada em feature de referência existente no projeto. Use para manter consistência e seguir padrões estabelecidos.
---

Quando chamar esse comando você deve OBRIGATORIAMENTE seguir este workflow de implementação:

## ETAPA 1: Análise da Feature de Referência

Use o agente **code-archaeologist** para analisar a feature de referência existente:

1. **Identificar a feature de referência** (pedir ao usuário qual feature similar já existe)
2. **Analisar estrutura completa**: componentes, serviços, models, routes, testes
3. **Extrair padrões**: convenções de nomenclatura, estrutura de arquivos, padrões de código
4. **Documentar decisões arquiteturais** tomadas na feature de referência

## ETAPA 2: Planejamento da Nova Feature

Com base na análise da feature de referência:

1. **Mapear similaridades**: O que deve ser igual à feature de referência
2. **Identificar diferenças**: O que é específico da nova feature
3. **Planejar estrutura**: Arquivos e pastas necessários
4. **Validar com usuário**: Apresentar plano antes de implementar

## ETAPA 3: Implementação Seguindo Padrões

Seguir EXATAMENTE os padrões da feature de referência:

1. **Criar estrutura de arquivos** idêntica à feature de referência
2. **Aplicar convenções de nomenclatura** do projeto
3. **Reutilizar padrões de código** (componentes, services, etc.)
4. **Seguir padrões de arquitetura** em `.claude/CONTEXT/PADROES_ARQUITETURA.md`

## ETAPA 4: Validação e Testes

1. **Verificar conformidade** com padrões do projeto
2. **Garantir consistência** com feature de referência
3. **Testar fluxos principais**
4. **Sugerir próximos passos** (revisão, PR, etc.)

---

## IMPORTANTE

- **SEMPRE** comece analisando uma feature de referência existente
- **NUNCA** invente novos padrões - use os existentes
- **CONSULTE** `.claude/CONTEXT/PADROES_ARQUITETURA.md` para validação
- **PERGUNTE** ao usuário se não houver feature de referência clara
