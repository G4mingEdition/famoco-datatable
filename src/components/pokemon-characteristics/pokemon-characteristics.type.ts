// Types
import Pokemon from "../../types/pokemon.type";

export interface Props { }
export interface State {
    totalCount: number,
    pokemons: Pokemon[],
    loadedPages: number[]
}