import { PokedexListContainer } from "../pokedex-list";
import { Main } from './style'

export const HomePokedex = () => {
    try {

    } catch (error) {
        console.error('Aconteceu um erro:', error);
    }

    return (
        <Main>
            <PokedexListContainer />
        </Main>
    )
}