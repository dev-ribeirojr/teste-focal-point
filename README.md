# Gerenciamento de Tarefas

## Descrição

Este projeto é uma aplicação de gerenciamento de tarefas que permite aos usuários criar, excluir e marcar tarefas como concluídas. A aplicação também fornece feedback visual por meio de toasts para as ações realizadas.

## Funcionalidades

- **Criar Tarefas**
- **Excluir Tarefas** 
- **Concluír Tarefas**

## Detalhes

- **Excluir Tarefa:** ao excluir uma tarefa é atualizado uma propriedade "deleted" que é um booleando, não excluindo de fato a tarefa, pois assim é possível um histórico.
- **Feedback Visual:** Utilizei o React hot toast para informar o usuário sobre os resultados das ações.

## Tecnologias Utilizadas

- Next JS
- TypeScript
- Zustand
- Sass SCSS
- Local Storage
- React Hot Toast
- React Icons

## Observações
  o nome no titulo e a data no header está fixo, então não se assuste!!!

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/dev-ribeirojr/teste-focal-point.git
   
2. Navegue até a pasta onde clonou o repositório e instale as dependências:
   ```bash
   npm install
   
3. Rode o projeto:
   ```bash
   npm run dev
   
4. Por padrão acesse em:
   [http://localhost:3000](http://localhost:3000)

