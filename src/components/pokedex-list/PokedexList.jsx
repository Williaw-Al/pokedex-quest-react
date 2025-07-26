// PokedexListView.jsx
import React from "react";
import { PokemonCard } from "../pokemon-card";
import { Button } from "../button";
import { List, PokemonCards } from "./style";
import { useContext } from "react";
import { FilterContext } from "../../contexts/filter-context";
import { PokedexFilter } from "../pokedex-filter";

export const PokedexList = ({ pokedexCards, onLoadMore, isFetching }) => {
  const { filteredType } = useContext(FilterContext)

  const filteredPoxedex = pokedexCards.filter(poke => poke.types[0].type.name == filteredType || poke.types[1]?.type?.name == filteredType)

  return (
    <List>
      <PokemonCards>
        {
          filteredType != '' ?
            filteredPoxedex.map((pokemon, index) => (
              <PokemonCard pokemon={pokemon} key={index} />
            )) :
            pokedexCards.map((pokemon, index) => (
              <PokemonCard pokemon={pokemon} key={index} />
            ))
        }
      </PokemonCards>
      <PokedexFilter />
      <Button onClick={onLoadMore}>
        {isFetching ? "Carregando..." : "Carregar Mais Pokémon"}
      </Button>
    </List>
  );
};
