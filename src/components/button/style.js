import styled from "styled-components"

export const Butt = styled.button`
    font-size: 2rem;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.cardBackground};

    height: 50px;
    width: 100%;
    border: 1px solid aliceblue;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    border-radius: 10px;
    padding: 0 5px;

    transition: all ease-in-out 0.1s;
    &:hover {
        background-color: ${props => props.theme.cardBorder};
        font-size: 2.4rem;
    }

    &:green {
        color: green;
    }
`