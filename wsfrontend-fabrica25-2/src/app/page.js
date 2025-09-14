import Tabela from './components/Tabela'; 

export default async function Home() {
  const maxPokemons = 100;
  const api = 'https://pokeapi.co/api/v2/pokemon';

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return (
    <div>
      <div style={{textAlign: 'center', margin: '20px 0'}}>
        <h1>Explore o mundo Pokémon</h1>
      </div>
      <Tabela pokemons={data.results} />
    </div>
  );
}