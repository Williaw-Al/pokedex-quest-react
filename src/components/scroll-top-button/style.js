import styled from "styled-components";

export const ToTopButton = styled.button`
    position: absolute;
    padding: 10px;
    top: 100vh;
    right: 10vw;

    width: 60px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: ${props => props.theme.cardBackground};
`