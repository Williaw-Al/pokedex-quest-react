import { Link } from 'react-router-dom';
import { padNumber } from "../../utils/pad-number";

import {
    CardContainer, ImgContainer, InfoContainer,
    Sprite, IdText, Name, TypeInfo,
    TypeImg,
} from './style'
import { usePokemonTypes } from "../../hooks/usePokemonTypes";

export const PokemonCard = ({ pokemon }) => {
    const pokemonId = padNumber(pokemon.id)
    const pokemonTypes = usePokemonTypes(pokemon)
    const spriteSource = pokemon.sprites.other['official-artwork'].front_default
    
    return (
        <Link to={`/pokedex/${pokemon.id}`}>
            <CardContainer>
                <ImgContainer>
                    <Sprite src={spriteSource} alt={pokemon.name} />
                </ImgContainer>

                <InfoContainer>
                    <IdText>{pokemonId}</IdText>
                    <Name>{pokemon.name}</Name>
                    <TypeInfo>
                        {
                            pokemonTypes.map((type, index) => {
                                return (
                                    <div key={index}>
                                        <TypeImg src={type.sprites["generation-viii"]["brilliant-diamond-and-shining-pearl"].name_icon} alt={type.name} />
                                    </div>
                                )
                            })
                        }
                    </TypeInfo>
                </InfoContainer>
            </CardContainer>
        </Link>
    )
}