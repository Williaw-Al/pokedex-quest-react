import { createContext, useState } from "react";
import { ThemeProvider as StyledProvider } from 'styled-components';
import { themes } from './themes';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Lê o tema salvo no localStorage, se houver
    const savedThemeName = localStorage.getItem('theme');

    const getInitialTheme = () => {
        if (savedThemeName === themes.light.name) return themes.light;
        if (savedThemeName === themes.dark.name) return themes.dark;
        return themes.light; // padrão: light
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Sempre que mudar o tema, salva no localStorage
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme.name);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            <StyledProvider theme={theme}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
};