import { createContext, useState } from "react";
import { ThemeProvider as StyledProvider } from 'styled-components'
import { themes } from './themes'

export const ThemeContext = createContext()

const light = themes.light.name
const dark = themes.dark.name

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('theme'));

        if (localData?.name === light) return themes.light
        if (localData?.name === dark) return themes.dark
        return themes.light
    })

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <StyledProvider theme={theme}>
                {props.children}
            </StyledProvider>
        </ThemeContext.Provider>
    )
}