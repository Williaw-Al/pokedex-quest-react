import styled from "styled-components";
import { device } from "../../styles/media-breakpoints";

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    min-height: 100px;
    margin-bottom: 25px;
    background: linear-gradient(to top, #000000, #101010, #AC03FD);

    @media ${device.mobileM}{
        flex-direction: column;
        justify-content: center;
        padding: 20px 0;
        gap: 20px;
    }

`

export const Logo = styled.div`
    width: 200px;
`