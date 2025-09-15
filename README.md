🕹️ wsFrontend-Fabrica25.2
Pokédex Next.js
Uma aplicação Pokédex desenvolvida com Next.js 13 que consome a PokeAPI para listar, pesquisar, favoritar e visualizar detalhes dos Pokémon.

🚀 Funcionalidades
Listagem de Pokémon: exibe os 100 primeiros Pokémon da PokeAPI.
Pesquisa em tempo real: filtro de Pokémon pelo nome.
Detalhes individuais: página dedicada para cada Pokémon, com tipo, peso, imagem e ID.
Favoritos: salve Pokémon no navegador usando localStorage, acessando-os pela página de favoritos.
Design responsivo: estilização com CSS Modules e layout moderno.
📂 Estrutura de Pastas
├─ app/ │ ├─ page.js # Página inicial com listagem e pesquisa │ ├─ layout.js # Layout raiz (Navbar + Footer) │ ├─ favoritos/page.js # Página de favoritos │ ├─ pokemon/[pokemonId]/page.js # Página dinâmica de detalhes │ ├─ components/ │ ├─ Navbar.js │ ├─ Footer.js │ └─ Tabela.js │ ├─ styles/ │ ├─ globals.css │ ├─ Navbar.module.css │ ├─ Footer.module.css │ ├─ Tabela.module.css │ ├─ Pokemon.module.css │ └─ favorito.css │ └─ public/images/ └─ pokebola.png

🛠️ Tecnologias Utilizadas
Next.js 13 (App Router)
React (Hooks)
CSS Modules
PokeAPI para consumo de dados
📦 Instalação e Uso
Clone o repositório
git clone https://github.com/vitorgabrielregis/wsFrontend-Fabrica25.2.git

🛠️ Instalação
Instale as dependências
npm install
npm run dev

🌟 Destaques do Código
Página inicial (page.js)
Faz requisição para a PokeAPI e envia os dados para o componente Tabela.
Tabela de Pokémon (Tabela.js)
Implementa pesquisa em tempo real.
Botão de favoritos com persistência via localStorage.
Exibe cada Pokémon com nome, imagem e link de detalhes.
Página dinâmica (pokemon/[pokemonId]/page.js)
Usa generateStaticParams para gerar páginas estáticas no build.
Exibe informações detalhadas: ID, tipo, peso e sprite.
Favoritos (favoritos/page.js)
Lê os favoritos salvos no navegador.
Lista os Pokémon selecionados pelo usuário.
Link do projeto: https://ws-frontend-fabrica25-2-jnq5.vercel.app/
