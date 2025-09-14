'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './favorito.css';



export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavoritos(favoritosSalvos);

    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      const allPokemons = data.results.map((poke, index) => ({
        id: index + 1,
        name: poke.name,
      }));
      setPokemons(allPokemons.filter(p => favoritosSalvos.includes(p.id)));
    };

    fetchPokemons();
  }, []);

  return (
  <div className="container">
    <h1 className="titulo">Pokémons Favoritos</h1>
    <Link href="/" className="voltar">← Voltar</Link>

    <div className="grid">
      {pokemons.length === 0 ? (
        <p className="mensagem">Nenhum Pokémon favoritado.</p>
      ) : (
        pokemons.map((pokemon) => (
          <div key={pokemon.id} className="card">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <p>#{pokemon.id} - {pokemon.name}</p>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
          </div>
        ))
      )}
    </div>
  </div>
);
}
