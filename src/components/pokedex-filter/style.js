import styled from "styled-components";

export const FilterTypeList = styled.ul`
    display: flex;
    justify-content: center;

    min-width: 300px;
    max-width: 1377px;
    margin-bottom: 20px;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};
`