import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Exo 2', Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-clip: border-box;

        
        font-size: 67.5%;
        
    }
    
    html {
        background: url(${props => props.theme.siteBackgroundImage}) repeat fixed;
        background-color: ${props => props.theme.background};
    }

    body {
        margin-bottom: 40px;
        color: ${props => props.theme.color};
    }

    a {
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button{
        border: none;
        
        &:hover{
            cursor: pointer;
        }
    }

    img {
        width: 100%;
    }
`