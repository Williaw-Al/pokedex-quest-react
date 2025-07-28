# Poxédex - React - DevQuest

Lista de pokemon, utilizando a API pública do 👉🏽 <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>.  
Desafio proposto no curso de programação full-stack **Devquest**, do **Dev em Dobro**.

## 🛠 Tecnologias

- **HTML**, **CSS**, **Javascript**
- **Vite** + **React**
- **Styled-components**
- **React-Router-Dom**
- **React-Query**
- **Axios**

## 🧩 Atividade Proposta 🧩

Criar uma **Home Page** de listagem de alguns pokemons, utilizando a api do **PokéAPI**, e uma página interna, de detalhes do pokemon.  
A home deve apresentar uma listagem com **10 pokemons iniciais**, com um botão **"Carregar mais"** abaixo dela, que busca mais 10 pokemons da API e adiciona na listagem atual.  
⚠️ Foi introduzido também, um **filtro** para os pokemon.

Cada pokemon com sua **imagem e nome**, podendo ser **clicável**, levando o usuário para sua página, com os seguintes detalhes:

- **Imagem do pokemon**
- **Nome**
- **Lista de movimentos do pokemon** (`moves`)
- **Lista de habilidades do pokemon** (`abilities`): a lista de habilidades, com o nome e o texto descritivo da dela.
- **Tipo do pokemon** (`type`)

No topo da tela, um botão para **alternar de cor**, entre **tema claro e tema escuro** (`light/dark`).

### ✅ Requisitos do desafio:

- Aplicação devendo ser **Single Page Application (SPA)**;
- Utilizar **React.js** para o desenvolvimento da aplicação;
- Utilizar **Context API** para criação do Theme Toggler;
- Utilizar **styled-components** para estilização dos componentes (legado);
- Utilizar **react-router-dom** para a navegação entre as páginas;

## 🎮 Uso da Aplicação 🎮

### Home

No **cabeçalho**, temos **3 botões importantes**:  
🔹 a **logo**,  
🔹 o botão de **"apagar dados salvos"**  
🔹 e a **troca de tema**.

- A **logo** volta para a página inicial, ou, caso o usuário já esteja nela, simplesmente atualiza a página;
- O botão **"apagar dados salvos"** também atualiza a página, porém **limpa todo o cache de dados salvos**, voltando a lista e o tema para valores padrão;
- O botão de tema possui **duas fases**:  
  ☀️ **Sunmode**, para o tema claro  
  🌙 **Moonmode**, para o tema escuro  
  Mudando o **background do site** e as **cores primárias e secundárias**.

Para acessar as **informações detalhadas** de um pokemon, simplesmente aperte no **card** de um deles.

O botão de **filtro** vai pegar o tipo escolhido do usuário e analisar os pokémon da página.  
Aqui tem dois pontos que talvez eu faça no futuro:
- Um seria **alertar o usuário**, quando não há nenhum pokémon com aquele tipo carregado;
- Por enquanto, se o usuário aperta **"Carregar mais Pokemon"**, com uma filtragem ativa, **o filtro é zerado**.  
  Senão pode acontecer de **nada ser gerado**. Mas seria interessante ele poder ficar ativo.

Por fim, o botão de **"Carregar mais Pokemon"**, onde busca os próximos 10 da API.  
⚠️ Tem certos **"bugs" ao ser utilizado com o filtro**.

### Detalhes do Pokemon

Logo acima, pode **navegar para os ids próximos** do pokemon.

Na lista de **habilidades**, cada uma é **clicável**, apresentando uma **descrição da mesma**.

Logo abaixo, encontramos uma **tabela** listando as habilidades do pokemon.

Um botão para **voltar à página inicial**, por conveniência, também está lá.  
Facilitando o entendimento da página. Nem todos precisam saber que a logo faz a mesma coisa.

## 🔥 Desafios e Obstáculos

Como **primeiro projeto utilizando o React**, muito tempo foi gasto nos conceitos e prática.  
Sempre que parava em algo, era uma luta para entender.

> 🔧 O cabeçalho já chegou a ser **móvel**, fixado na tela.  
> Mas isso apresentou problemas para mim, principalmente no quesito de **design**, então optei por retirá-lo.

Muito da estilização no **styled-components**, vai ser levada como experiência, já que o mesmo foi descontinuado.

⚠️ O filtro de pokemon foi algo que quase desisti.  
E mesmo agora, ele é bastante **rudimentar**.  
Ele vai filtrar os pokemon já carregados, mas não possui suporte para ser utilizado junto ao **"Carregar mais Pokemon"**, já que este busca os próximos 10 pokémon de maneira geral, e não do tipo especificado.  
Minha ideia foi **resetar o valor do filtro**, quando utilizar o botão, assim, o usuário sempre terá algo novo para ver, invés de "nada acontecer".

🔥 Mas o **maior obstáculo foi mental**.  
A ajuda de outros, sejam os mentores ou colegas, foi **essencial** para ganhar do projeto.  
Mesmo com muita coisa pra melhorar, o fato dele estar **entregável e usável**, é algo que me orgulho.

## 🦉 Finalizando

Ainda tem muita coisa pra melhorar, principalmente com alguns componentes possuindo **muitas tarefas atribuídas**, **serviços** (chamadas de API) e **organização geral**.  
O que mais precisa é o `pokemon-details`, onde **tudo está embutido em um único componente**.

De resto, esse projeto me ajudou muito para **entender os conceitos** que envolvem uma aplicação, além de me mostrar a importância do **trabalho em equipe** e da **comunicação**.

Se motivem e busquem apoio.  
💬 É sempre bom ter alguém do lado!

**Até mais, nos vemos no próximo código 🦉**
