import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import style from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isError, isLoading } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  return (
    <>
      <h1 className={style.title}>
        {data && data.total} <b>Pokemons</b> for you to choose your favorite
      </h1>
      <input
        className={style.search}
        placeholder="Find your pokemon..."
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <div className={style.wrap}>
        {data &&
          data.pokemons.map((pokemon: PokemonsRequest) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              attack={pokemon.stats.attack}
              defense={pokemon.stats.defense}
              types={pokemon.types}
              image={pokemon.img}
            />
          ))}
      </div>
    </>
  );
};

export default Pokedex;
