import { createContext, useState } from "react";

export const FilterContext = createContext('')

export const FilterProvider = (props) => {
    const [filteredType, setFilteredType] = useState('')

    return (
        <FilterContext.Provider
            value={{ filteredType, setFilteredType }} >
            {props.children}
        </FilterContext.Provider>
    )
}