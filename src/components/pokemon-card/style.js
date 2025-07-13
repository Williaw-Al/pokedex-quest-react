import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    
    width: 140px;
    height: 230px;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;

    background-color: ${props => props.theme.cardBackground};

    transition: all ease-in-out 0.3s;

    &:hover{
        background-color: ${props => props.theme.cardBorder};
        cursor: pointer;
    } 
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: aliceblue;

    border-bottom: 2px solid ${props => props.theme.cardBorder};
    border-radius: 12px 0 0 0;
`

export const Sprite = styled.img`
    width: 100%;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2px;
`

export const IdText = styled.span`
    position: absolute;
    top: 0;
    right: 0;

    text-transform: uppercase;
    font-size: 1.0rem;
    font-weight: 700;
    color: ${props => props.theme.cardBackground};
`

export const Name = styled.h2`
    font-family: 'Orbitron', 'Exo 2', sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${props => props.theme.color};
`

export const TypeInfo = styled.div`
    align-self: center;
    width: 100px;
`

export const TypeImg = styled.img`
    width: 100%;
`
