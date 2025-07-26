import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

import {
    Wrap, PokemonId,
    TypeImg,
    Sprite,
    InfoContainer,
    PokemonInfo,
    CardContainer,
    LevelSpellsContainer,
    AbilitiesContainer,
    TypesContainer,
    Number,
    Name,
    InfoHeader,
    PokemonHeader,
    InfoTitle,
    Ability,
    TableContainer,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Col1,
    Col2,
    AbilityDetails
} from './style'
import { padNumber } from "../../utils/pad-number"
import { Button } from "../button"

export const PokemonDetails = () => {

    const [abilities, setAbilities] = useState([])
    const [abilityDetailVisibility, setAbilityDetailVisibity] = useState(undefined)
    const [abilityText, setAbilityText] = useState('')
    const [testando, setTestando] = useState([])
    // const [moves, setMoves] = useState([])
    // const [name, setName] = useState('Olá')

    const { id } = useParams()

    const getPokemon = async () => {
        setAbilityDetailVisibity(undefined)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const abilitiess = response.data.abilities.map(async (ability) => {
            const response = await axios.get(ability.ability.url)
            return response.data
        })

        const abilitiesPromises = await Promise.all(abilitiess)
        setAbilities(abilitiesPromises)

        const types = response.data.types.map(async (type) => {
            const response = await axios.get(type.type.url)

            return response.data
        })

        const typesPromises = await Promise.all(types)
        setTestando(typesPromises)


        return response.data
    }

    const { data, isFetching, isError } = useQuery({
        queryKey: ['pakemon', id],
        queryFn: getPokemon,
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // refetchOnMount: false
    })

    if (isFetching) return (
        <Wrap>
            <InfoContainer>
                <PokemonId>Carregando</PokemonId>
            </InfoContainer>
        </Wrap>
    )

    if (isError) return <p>Algum erro ocorreu!</p>

    const spriteSource = data?.sprites?.other['official-artwork']?.front_default
    const levelUpSpells = data?.moves?.filter(move => move?.version_group_details[0]?.move_learn_method?.name === 'level-up')

    const pokemonId = padNumber(data.id)
    let previousPokemon = data.id
    previousPokemon--
    let nextPokemon = data.id
    nextPokemon++

    console.log('normal: ', levelUpSpells);
    const sortedLevelUpSpells = [...levelUpSpells].sort((a, b) => {
        const gameVersionA = a.version_group_details
        const levelA = gameVersionA[gameVersionA.length - 1].level_learned_at ?? Infinity;

        const gameVersionB = b.version_group_details
        const levelB = gameVersionB[gameVersionB.length - 1].level_learned_at ?? Infinity;
        return levelA - levelB;
    });
    console.log('sorted: ', sortedLevelUpSpells);

    return (
        <Wrap>
            <InfoContainer>
                <InfoHeader>
                    {data.id > 1 ? (
                        <Link to={`/pokedex/${previousPokemon}`}>
                            <PokemonHeader>
                                Anterior
                            </PokemonHeader>
                        </Link>
                    ) : (
                        <PokemonHeader>1º Pokemon</PokemonHeader>
                    )
                    }
                    <PokemonId>
                        <Number>Nº {pokemonId}</Number>
                        <Name>
                            {data?.name}
                        </Name>
                    </PokemonId>
                    <Link to={`/pokedex/${nextPokemon}`}>
                        <PokemonHeader>
                            Próximo
                        </PokemonHeader>
                    </Link>
                </InfoHeader>

                <PokemonInfo>
                    <CardContainer>
                        <Sprite>
                            <img src={spriteSource} alt={data?.name} />
                        </Sprite>
                        <TypesContainer>
                            {
                                testando.map((type, index) => {
                                    return (
                                        <div key={index}>
                                            <TypeImg src={type.sprites["generation-viii"]["brilliant-diamond-and-shining-pearl"].name_icon} alt={type.name} />
                                        </div>
                                    )
                                })
                            }
                        </TypesContainer>
                    </CardContainer>

                    <div>
                        <InfoTitle>Lista de Habilidades</InfoTitle>
                        <AbilitiesContainer>
                            {abilities.map((ability, index) => {
                                // console.log(ability);
                                return (
                                    <Ability key={index}
                                        onClick={() => {
                                            const teste = ability.effect_entries
                                            console.log('a array: ', teste);

                                            const result = teste.find(entry => entry.language.name === "en")
                                            

                                            if (abilityText == result.effect && abilityDetailVisibility === 'true') {
                                                setAbilityDetailVisibity(undefined)
                                            } else {
                                                setAbilityDetailVisibity('true')
                                            }

                                            setAbilityText(result.effect)

                                        }}>
                                        <h2>{ability?.name} </h2>
                                    </Ability>
                                )
                            })}
                        </AbilitiesContainer>
                        <AbilityDetails visible={abilityDetailVisibility}>
                            <p>
                                {abilityText}
                            </p>
                        </AbilityDetails>

                        <InfoTitle>Golpes Aprendidos por Nível</InfoTitle>
                        <LevelSpellsContainer>
                            <TableContainer>
                                <colgroup>
                                    <Col1 />
                                    <Col2 />
                                </colgroup>
                                <Thead>
                                    <Tr>
                                        <Th>Nível</Th>
                                        <Th>Habilidade</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {sortedLevelUpSpells.map((spell, index) => {
                                        const gameVersion = spell.version_group_details
                                        const level = gameVersion[gameVersion.length - 1].level_learned_at
                                        const spellName = spell?.move?.name

                                        return (
                                            <Tr key={index}>
                                                <Td>
                                                    {level}
                                                </Td>
                                                <Td>
                                                    {spellName}
                                                </Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </TableContainer>
                        </LevelSpellsContainer>
                    </div>
                </PokemonInfo>

                <Link to='/'>
                    <Button>
                        Voltar para o Home
                    </Button>
                </Link>

            </InfoContainer>

        </Wrap>
    )
}