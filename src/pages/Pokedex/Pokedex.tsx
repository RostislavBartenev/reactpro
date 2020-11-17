import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import style from './Pokedex.module.scss';
import useData from '../../hook/getData';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isError, isLoading } = useData('getPokemons', query, [searchValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  return (
    <>
      <h1 className={style.title}>
        {data.total} <b>Pokemons</b> for you to choose your favorite
      </h1>
      <input
        className={style.search}
        placeholder="Encuentra tu pokémon..."
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <div className={style.wrap}>
        {data.pokemons.map(
          (pokemon: {
            id: string;
            name: string;
            stats: { attack: string; defense: string };
            types: string[];
            img: string;
          }) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              attack={pokemon.stats.attack}
              defense={pokemon.stats.defense}
              types={pokemon.types}
              image={pokemon.img}
            />
          ),
        )}
      </div>
    </>
  );
};

export default Pokedex;
