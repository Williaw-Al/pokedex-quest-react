import React from 'react'
import { DataEraseButton } from './style'

export const ThemeDataErase = () => {

    return (
        <>
            <DataEraseButton
                onClick={() => {
                    localStorage.clear()
                }}
            >Apagar dados salvos</DataEraseButton>
        </>
    )
}