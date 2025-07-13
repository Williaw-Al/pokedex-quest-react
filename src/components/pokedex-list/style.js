import styled from "styled-components";
import { device } from "../../styles/media-breakpoints";

export const List = styled.section`
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;

`

export const PokemonCards = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 20px;
margin-bottom: 20px;

min-width: 300px;
max-width: 1377px;

@media ${device.tablet}{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
@media ${device.mobileS}{
        flex-direction: column;
    }    

`
