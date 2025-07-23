import { useState } from "react"
import { FilterTypeList } from "./style"
import axios from "axios"

export const PokedexFilter = () => {
    const [typeList, setTypeList] = useState([])

    const getAllTypes = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/type/')
        return response.data.results
    }

    setTypeList(getAllTypes)

    return (
        <FilterTypeList>
            {
                typeList.map((id, type) => {
                    return( 
                        <li key={id}>{type.name}</li>
                    )
                })
            }
        </FilterTypeList>
    )
}