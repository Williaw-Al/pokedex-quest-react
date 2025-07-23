import { Link, useLocation } from 'react-router-dom'
import { ThemeTogglerButton } from '../theme-toggler-button'
import { ThemeDataErase } from '../theme-data-erase'
import { ScrollTopButton } from '../scroll-top-button/scroll'

import {
    Header,
    Logo
} from './style'

export const HeaderBar = () => {
    const location = useLocation()

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault() // Evita a navegação padrão do Link
            window.location.reload()
        }
        // Se estiver em outro caminho, o Link funciona normalmente
    }

    return (
        <Header>
            <Link to='/' onClick={handleLogoClick}>
                <Logo>
                    <img src='/src/assets/images/pokemon-logo.png' alt='Logo do Pokémon' />
                </Logo>
            </Link>
            <ThemeDataErase />
            <ThemeTogglerButton />
        </Header>
    )
}
