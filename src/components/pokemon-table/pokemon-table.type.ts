// Types
import Pokemon from "../../types/pokemon.type";

export interface State {
    totalCount: number,
    elementsPerPage: number,
    pokemons: Pokemon[],
    loadedPages: number[]
}