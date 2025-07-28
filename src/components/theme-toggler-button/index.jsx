import React, { useContext } from "react"
import { themes } from "../../contexts/theme-context/themes"
import { ThemeContext } from "../../contexts/theme-context/theme-context"

import {
    ThemeVisual,
    Img,
    Sunmode,
    Moonmode,
    InputCheck
} from "./style"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleInputCheckbox = () => {
        setTheme(() => {
            if (theme === themes.light) {
                localStorage.setItem('theme', JSON.stringify(themes.dark))
                return themes.dark
            } else {
                localStorage.setItem('theme', JSON.stringify(themes.light))
                return themes.light
            }
        })
    }

    return (
        <div>
            <InputCheck type="checkbox" name="teste" id="teste"
                onChange={() => {
                    handleInputCheckbox()
                }} />
            <label htmlFor="teste">
                <ThemeVisual>
                    <Img $toggler={theme.check} />
                    <Sunmode>Moonmode</Sunmode>
                    <Moonmode>Sunmode</Moonmode>
                </ThemeVisual>
            </label>
        </div>
    )
}