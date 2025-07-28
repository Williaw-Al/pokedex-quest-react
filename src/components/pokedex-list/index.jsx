// PokedexListContainer.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PokedexList } from "./PokedexList";
import { PokedexFilter } from "../pokedex-filter";
import { FilterContext } from "../../contexts/filter-context";

export const PokedexListContainer = () => {
    const [pokedexCards, setPokedexCards] = useState([]);
    const [offset, setOffset] = useState(0);
    const { filteredType, setFilteredType } = useContext(FilterContext)
    const storedList = +localStorage.getItem("pokemonList") || 0;
    const limit = 10 + storedList;

    const getPokemonProfile = async () => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&?offset=${offset}`
        );

        const pokemonPromises = response.data.results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
        });

        const pokemonList = await Promise.all(pokemonPromises);

        setPokedexCards(() => [...pokemonList]);
        return pokemonList;
    };

    const list = useQuery({
        queryKey: ["pokemon", offset, limit],
        queryFn: getPokemonProfile,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    const handleLoadMore = () => {
        if (list.isFetching) return;
        localStorage.setItem(
            "pokemonList",
            +localStorage.getItem("pokemonList") + 10
        );
        setOffset((prev) => prev + limit);
        setFilteredType('');
    };

    if (list.isLoading && pokedexCards.length === 0)
        return <p>Carregando...</p>;
    if (list.isError) return <p>Um erro aconteceu</p>;

    return (
        <PokedexList
            pokedexCards={pokedexCards}
            onLoadMore={handleLoadMore}
            isFetching={list.isFetching}
        />
    );
};
