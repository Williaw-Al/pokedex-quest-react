import { createContext, useState, useCallback } from "react";

export const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
    const [storageVersion, setStorageVersion] = useState(0);

    const clearStorage = useCallback(() => {
        localStorage.clear();
        setStorageVersion((prev) => prev + 1);
    }, []);

    const updateStorage = useCallback((key, value) => {
        localStorage.setItem(key, value);
        setStorageVersion((prev) => prev + 1);
    }, []);

    return (
        <StorageContext.Provider
            value={{ storageVersion, clearStorage, updateStorage }}
        >
            {children}
        </StorageContext.Provider>
    );
};
