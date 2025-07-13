export const padNumber = (numberId) => {
    let id = "" + numberId
    let pad = "0000"
    let pokemonId = pad.substring(0, pad.length - id.length) + id

    return pokemonId
}