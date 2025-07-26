import styled from "styled-components";
import { font } from '../../styles/generic-styles'
import { device } from "../../styles/media-breakpoints";


export const Wrap = styled.main`
    min-height: 100vh;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InfoHeader = styled.div`
    display: grid;
    width: 300px;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin-bottom: 30px;

    @media ${device.tablet}{
        display: flex;
        flex-direction: column;
        height: 200px;
        gap: 10px;
    }    
`

export const PokemonHeader = styled.button`
    width: 200px;
    max-height: 100px;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 0;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};

    transition: all ease-in-out 0.3s;

    &:hover {
        background-color: ${props => props.theme.cardBorder};
    }

    @media ${device.tablet}{
        width: 300px;
    }
`

export const PokemonId = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 25px;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};

    font-size: 5.0rem;

    @media ${device.tablet}{
        min-width: 300px;
    }

`

export const Number = styled.span`
    font-size: 2.0rem;
`

export const Name = styled.h1`
    font-family: ${font.title}, sans-serif;
    text-transform: uppercase;
    hyphens: none;
`

export const PokemonInfo = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 20px;

    font-size: 3.5rem;

    @media ${device.tablet}{
        flex-direction: column;
        align-items: center;
    }  

    @media ${device.mobileM}{
        padding: 10px;
    }   
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 250px;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};
`

export const Sprite = styled.div`
    width: 200px;
    background-color: aliceblue;

    border-bottom: 2px solid ${props => props.theme.cardBorder};
    border-radius: 12px 0 0 0;
`

export const TypesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;

    width: 100%;
`

export const TypeImg = styled.img`
    width: 80px;
    `

export const AbilitiesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;

    margin-bottom: 10px;

    @media ${device.mobileM}{
        display: flex;
        flex-direction: column;
    }    
    `

export const LevelSpellsContainer = styled.div`
    overflow-y: scroll;
    padding: 5px;
    width: 500px;
    height: 200px;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};

    @media ${device.mobileM}{
        width: 100%;
    }   
`

export const InfoTitle = styled.h3`
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};
`

export const Ability = styled.button`
    padding: 10px;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};

    transition: all ease-in-out 0.3s;

    &:hover {
        background-color: ${props => props.theme.cardBorder};
    }
`

export const TableContainer = styled.table`
    width: 100%;
    table-layout: fixed;
    white-space: nowrap;

    text-transform: capitalize;
`

export const Thead = styled.thead`
    font-size: 3rem;
`

export const Tr = styled.tr`
`

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`

export const Tbody = styled.tbody`
    font-size: 2.5rem;
`

export const Td = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
`

export const Col1 = styled.col`
    width: 20%;
`
export const Col2 = styled.col`
    width: 60%;
`

export const AbilityDetails = styled.div`
    max-width: 500px;
    height: ${({ visible }) => visible ? 'fit-content' : '0'};
    margin-bottom: 10px;
    padding: ${({ visible }) => visible ? '10px' : '0'};
    color: ${({ visible }) => visible ? 'inherit' : 'transparent'};
    overflow: hidden;

    border: 2px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};

    transition: height visibility ease-in-out 0.3s;
`