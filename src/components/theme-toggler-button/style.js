import styled from "styled-components";

export const ThemeVisual = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #E1B401;
    user-select: none;

    padding: 5px;
    height: 47px;
    width: 110px;

    border: 5px solid #234C8C;
    border-radius: 25px;

    cursor: pointer;
    transition: all ease-in-out 0.3s;
`

export const InputCheck = styled.input`
    position: absolute;
    appearance: none;
`

export const Img = styled.div`
    position: absolute;
    top: 0;
    left: ${({$toggler}) => $toggler === 'true' ? '64px' : '0px'};

    border: 2px solid #0ADB7B;
    border-radius: 50%;

    background-color: #AC03FD;
    background-image: url(${props => props.theme.toggleImage});
    background-repeat: no-repeat;
    width: 37px;
    height: 37px;

    transition: all ease-in-out 0.1s;

`

export const Sunmode = styled.p`
    color: #234C8C;
    font-weight: 600;
    margin-right: auto;
    font-size: 1.0rem;

    opacity: ${props => props.theme.toggleOpacity};
    width: ${props => props.theme.toggleOpacity};
`

export const Moonmode = styled.p`
    color: #234C8C;
    font-weight: 600;
    margin-left: auto;
    font-size: 1.2rem;

    opacity: ${props => props.theme.toggleOpacity2};
    width: ${props => props.theme.toggleOpacity2};
`