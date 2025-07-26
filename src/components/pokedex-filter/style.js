import styled from "styled-components";

export const FilterTypeList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px;
    font-size: 2rem;

    min-width: 300px;
    max-width: 1377px;
    margin-bottom: 20px;

    border: 1px solid aliceblue;
    border-radius: 15px 0px;
    box-shadow: 0 0 0 2px ${props => props.theme.cardBorder},
                0 0 0 3px aliceblue;
    background-color: ${props => props.theme.cardBackground};
`