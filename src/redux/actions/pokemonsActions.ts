// Types
import Pokemon from "../../types/pokemon.type";
import Characteristics from "../../types/characteristics.type";
import { Dispatch } from "redux";

export const SET_POKEMONS = 'SET_POKEMONS';
export const SET_CHARACTERISTICS = 'SET_CHARACTERISTICS';

export type PokemonsAction = { type: typeof SET_POKEMONS, payload: Pokemon[] }
export type CharacteristicsAction = { type: typeof SET_CHARACTERISTICS, payload: Characteristics | null }

export const setPokemons = (pokemons: Pokemon[]) => async (dispatch: Dispatch<PokemonsAction>) => {
    dispatch({ type: SET_POKEMONS, payload: pokemons });
    return Promise.resolve();
}

export const setCharacteristics = (characteristics: Characteristics | null) => async (dispatch: Dispatch<CharacteristicsAction>) => {
    dispatch({ type: SET_CHARACTERISTICS, payload: characteristics });
    return Promise.resolve();
}