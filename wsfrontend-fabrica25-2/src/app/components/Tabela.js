'use client';
import { useState, useEffect } from "react";
import Image from "next/image";  
import Link from "next/link";
import styles from '../styles/Tabela.module.css';

export default function Tabela({ pokemons }) {
  const [search, setSearch] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    if (favoritosSalvos) {
      setFavoritos(JSON.parse(favoritosSalvos))
    }
  },[])

   useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  //Filtrar os pokémons pelo nome digitado (case insensitive)
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.tabela}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Pesquisar Pokémon..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: "10px 18px",
            borderRadius: "20px",
            border: "2px solid #144668ff",
            outline: "none",
            fontSize: "1rem",
            marginBottom: "10px",
            width: "60%",
            maxWidth: "320px",
            boxShadow: "0 2px 8px rgba(255,214,0,0.10)"
          }}
        />
         
      </div>
      <div className={styles.pokemonList}>

        {/* Mensagem quando nenhum Pokémon é encontrado */}
        {filteredPokemons.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#fff", fontWeight: "bold" }}>
            Nenhum Pokémon encontrado.
          </div>
        )}
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.id} className={styles.card}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              width={120}
              height={120}
            />
            <div className={styles.nome}>
              #{pokemon.id} - {pokemon.name}
              <br/>
             <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
            </div>
             <button onClick={() => toggleFavorito(pokemon.id)}
             aria-label={favoritos.includes(pokemon.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                style={{
              marginTop: 8,
              background: "transparent",
              border: "none",
              
              fontSize: "1.5rem",
              color: favoritos.includes(pokemon.id) ? "#f5f10cff" : "#000000ff",
              padding: "4px 8px",
              
              
  }}
  onMouseEnter={e => {
    e.currentTarget.style.color = "#ff0505ff"; // amarelo claro no hover
  }}
  onMouseLeave={e => {
    e.currentTarget.style.color = favoritos.includes(pokemon.id) ? "#fc0505ff" : "#527d99ff";
  }}
>
  {favoritos.includes(pokemon.id) ? '★' : '☆'}
</button>

          </div>
        ))}
      </div>
    </div>
  );
}