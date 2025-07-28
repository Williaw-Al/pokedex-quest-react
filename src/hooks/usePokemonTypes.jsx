import { useState, useEffect } from 'react'
import axios from 'axios'

export const usePokemonTypes = (pokemon) => {
    const [typesList, setTypesList] = useState([])

    const getPokemonTypes = async () => {
        const types = pokemon.types.map(async (type) => {
            const response = await axios.get(type.type.url)

            return response.data
        })

        return types;
    }

    useEffect(() => {
        const fetchdata = async () => {
            const data = await getPokemonTypes()

            const typesPromises = await Promise.all(data)
            setTypesList(typesPromises)
        }

        fetchdata()
    }, []);

    return typesList
}