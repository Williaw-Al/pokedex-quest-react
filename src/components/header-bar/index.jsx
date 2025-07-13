import { Link } from 'react-router-dom'
import { ThemeTogglerButton } from '../theme-toggler-button'
import { ThemeDataErase } from '../theme-data-erase'
import { ScrollTopButton } from '../scroll-top-button/scroll'

import {
    Header,
    Logo
} from './style'

export const HeaderBar = () => {
    return (
        <Header>
            <Link to='/'>
                <Logo >
                    <img src='/src/assets/images/pokemon-logo.png' alt='Logo do Pokémon' />
                </Logo>
            </Link>
            <ThemeDataErase />
            <ThemeTogglerButton />
        </ Header>
    )
}