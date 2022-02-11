// Types
import Pokemon from "../../types/pokemon.type";

export const SET_POKEMONS = 'SET_POKEMONS';
export type Action = { type: typeof SET_POKEMONS, payload: Pokemon[] }

export const setPokemons = (pokemons: Pokemon[]): Action => ({
    type: SET_POKEMONS, payload: pokemons
});