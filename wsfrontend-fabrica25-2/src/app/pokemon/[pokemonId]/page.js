//Criar um arquivo com [] significa que o nome do arquivo é dinâmico, pode ser qualquer coisa
//Nesse caso, o nome do arquivo é pokemonid, que é o id do pokemon que quero buscar
//Que o id vem da rota da URL
// Gera os caminhos de build (substitui getStaticPaths)
import Image from 'next/image';
import styles from '../../styles/Pokemon.module.css';


export async function generateStaticParams() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const data = await res.json();

  return data.results.map((_, index) => ({
    pokemonId: (index + 1).toString(),
  }));
}

async function getPokemon(pokemonId) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!res.ok) throw new Error('Pokémon não encontrado');
  return res.json();
}

//Componente da página
export default async function PokemonPage({ params }) {
  const pokemon = await getPokemon(params.pokemonId);

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_name}>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={160}
        height={160}
      />
      <div>
        <h2>Número: </h2>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h2>Tipo: </h2>
        <div className={styles.pokemon_types}>
          {pokemon.types.map((item, index) => (
           <span key={index}className={`${styles.pokemon_type} ${styles['type_' + item.type.name]}`}>
            {item.type.name}</span>

          ))}
        </div>
      </div>
      <div className={styles.pokemon_data}>
        <div >
          <h3>Peso: </h3>
          <p>{pokemon.weight / 10} Kg</p>
        </div>
      </div>
    </div>
  );
}
