# 🕹️ wsFrontend-Fabrica25.2 - Pokédex Next.js

Uma aplicação **Pokédex** desenvolvida com **Next.js 13** que consome a **PokeAPI** para listar, pesquisar, favoritar e visualizar detalhes dos Pokémon.

---

## 🚀 Funcionalidades

- **Listagem de Pokémon**: Exibe os 100 primeiros Pokémon da PokeAPI.  
- **Pesquisa em tempo real**: Filtro de Pokémon pelo nome.  
- **Detalhes individuais**: Página dedicada para cada Pokémon, com tipo, peso, imagem e ID.  
- **Favoritos**: Salve Pokémon no navegador usando `localStorage`, acessando-os pela página de favoritos.  
- **Design responsivo**: Estilização com CSS Modules e layout moderno.  

---

## 📂 Estrutura de Pastas

├─ app/
│ ├─ page.js # Página inicial com listagem e pesquisa
│ ├─ layout.js # Layout raiz (Navbar + Footer)
│ ├─ favoritos/page.js # Página de favoritos
│ ├─ pokemon/[pokemonId]/page.js # Página dinâmica de detalhes
│
├─ components/
│ ├─ Navbar.js
│ ├─ Footer.js
│ └─ Tabela.js
│
├─ styles/
│ ├─ globals.css
│ ├─ Navbar.module.css
│ ├─ Footer.module.css
│ ├─ Tabela.module.css
│ ├─ Pokemon.module.css
│ └─ favorito.css
│
└─ public/images/
└─ pokebola.png

yaml
Copiar código

---


---

## 🛠️ Tecnologias Utilizadas

- **Next.js 13** (App Router)  
- **React** (Hooks)  
- **CSS Modules**  
- **PokeAPI** para consumo de dados  

---

## 📦 Instalação e Uso

### Clone o repositório

```bash
git clone https://github.com/vitorgabrielregis/wsFrontend-Fabrica25.2.git

## 🌟 Destaques do Código

### Página inicial (`page.js`)
- Faz requisição para a **PokeAPI**.
- Envia os dados para o componente **Tabela**.

### Tabela de Pokémon (`Tabela.js`)
- Implementa **pesquisa em tempo real**.
- Botão de favoritos com persistência via **`localStorage`**.
- Exibe cada Pokémon com **nome**, **imagem** e **link de detalhes**.

### Página dinâmica (`pokemon/[pokemonId]/page.js`)
- Usa `generateStaticParams` para gerar páginas estáticas no build.
- Exibe informações detalhadas: **ID**, **tipo**, **peso** e **sprite**.

### Favoritos (`favoritos/page.js`)
- Lê os favoritos salvos no navegador.
- Lista os Pokémon selecionados pelo usuário.

---

## 🔗 Link do Projeto

[https://ws-frontend-fabrica25-2-jnq5.vercel.app/](https://ws-frontend-fabrica25-2-jnq5.vercel.app/)

