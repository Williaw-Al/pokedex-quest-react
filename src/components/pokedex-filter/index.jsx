import { useContext, useEffect, useState } from "react"
import { FilterTypeList } from "./style"
import axios from "axios"
import { FilterContext } from "../../contexts/filter-context"

export const PokedexFilter = () => {
    const [typeList, setTypeList] = useState([])
    const { filteredType, setFilteredType } = useContext(FilterContext)

    const getAllTypes = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/type/')
        const res = await response.data
        return res
    }

    const handleChange = (e) => {
        setFilteredType(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            const types = await getAllTypes();
            setTypeList(types.results)
        }

        fetchData()
    }, []);

    return (
        <FilterTypeList>
            <h2>Filtre por tipo</h2>

            <select onChange={handleChange} value={filteredType}>
                <option value="">Selecione uma Opção</option>
                {
                    typeList.length > 1 ?
                        typeList.map((type, index) => {

                            return (
                                <option key={index} value={type.name}>
                                    {type.name}
                                </option>
                            )
                        })
                        : console.log('Nada Ocorreu')

                }
                <option value="">Todos</option>
            </select>

        </FilterTypeList>
    )
}