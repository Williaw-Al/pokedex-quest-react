// PokedexListView.jsx
import React from "react";
import { PokemonCard } from "../pokemon-card";
import { Button } from "../button";
import { List, PokemonCards } from "./style";

export const PokedexList = ({ pokedexCards, onLoadMore, isFetching }) => {
  return (
    <List>
      <PokemonCards>
        {pokedexCards.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </PokemonCards>
      <Button onClick={onLoadMore}>
        {isFetching ? "Carregando..." : "Carregar Mais Pokémon"}
      </Button>
    </List>
  );
};
