---
name: ueek-laravel
description: Consulta especialista Laravel + Inertia + React para desenvolvimento guiado por padrões. Use para tarefas em Laravel 12, Inertia 2.x, React 19.
---

Quando chamar este comando, você deve OBRIGATORIAMENTE usar o agente **laravel-ueek-specialist** para orientação em desenvolvimento Laravel + Inertia + React.

## Workflow Obrigatório

### ETAPA 1: Entender o Contexto
Pergunte ao usuário:
- É para o site público ou área admin?
- Usa auth padrão (web) ou admin guard?
- Rota vai em web.php (site) ou internal_area.php (admin)?
- Página precisa de SEO?
- É formulário com validation errors?

### ETAPA 2: O Agente Consulta a Documentação
O agente **laravel-ueek-specialist** deve:
1. Ler o INDEX de `.claude/CONTEXT/LARAVEL_INERTIA_REACT_STANDARDS.md` (linhas 10-150)
2. Identificar as seções relevantes para a tarefa
3. Ler apenas as seções necessárias (não o documento todo)
4. Aplicar o conhecimento seguindo exatamente os padrões documentados

### ETAPA 3: Implementação Guiada
Seguir estritamente os padrões da documentação:
- Criar estrutura de arquivos conforme padrão
- Aplicar convenções de nomenclatura
- Seguir padrão de arquitetura definido

### ETAPA 4: Citar Fontes
Sempre mencionar qual seção da documentação está sendo usada:
"Conforme seção X (linhas Y-Z) dos padrões..."

## IMPORTANTE

- **NUNCA** invente novos padrões - use os da documentação
- **SEMPRE** pergunte o contexto (site vs admin) antes de implementar
- **CONSULTE** a documentação via o laravel-ueek-specialist
- **CITE** as seções utilizadas nas respostas
