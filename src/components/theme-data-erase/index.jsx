import { DataEraseButton } from "./style";

export const ThemeDataErase = () => {

    return (
        <DataEraseButton
            onClick={() => {
                localStorage.clear()
                window.location.reload()
            }}
        >Apagar dados salvos</DataEraseButton>

    );
};
