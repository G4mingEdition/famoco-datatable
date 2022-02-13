// Types
import { Dispatch } from "redux";
import { State as PokemonTableState } from "../../components/pokemon-table/pokemon-table.type";

export const SET_POKEMON_TABLE_STATE = 'SET_POKEMON_TABLE_STATE';
export const SET_SCROLL_TOP = 'SET_SCROLL_TOP';

export type PokemonTableAction = { type: typeof SET_POKEMON_TABLE_STATE, payload: PokemonTableState | null }
export type ScrollTopAction = { type: typeof SET_SCROLL_TOP, payload: number }

export const setPokemonTableState = (pokemonTableState: PokemonTableState | null) => async (dispatch: Dispatch<PokemonTableAction>) => {
    dispatch({ type: SET_POKEMON_TABLE_STATE, payload: pokemonTableState });
    return Promise.resolve();
}

export const setScrollTop = (scrollTop: number) => async (dispatch: Dispatch<ScrollTopAction>) => {
    dispatch({ type: SET_SCROLL_TOP, payload: scrollTop });
    return Promise.resolve();
}