// import axios from "axios";

// export const getPokemonTypes = async (pokemon) => {
//     const types = pokemon.types.map(async (type) => {
//         const response = await axios.get(type.type.url)
//         return response.data
//     })
    

//     const typesPromises = await Promise.all(types)
//     setAbilities(abilitiesPromises)

//     return types
// }