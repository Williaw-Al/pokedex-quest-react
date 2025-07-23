import React, { useContext } from "react";
import { DataEraseButton } from "./style";
import { StorageContext } from "../../contexts/storage-context/storage-context";

export const ThemeDataErase = () => {
    const { clearStorage } = useContext(StorageContext);
    return (
        <DataEraseButton onClick={clearStorage}>
            Apagar dados salvos
        </DataEraseButton>
       
    );
};
