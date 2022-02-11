// Types
import Pokemon from "../../types/pokemon.type";
import Characteristics from "../../types/characteristics.type";

export const SET_POKEMONS = 'SET_POKEMONS';
export const SET_CHARACTERISTICS = 'SET_CHARACTERISTICS';

export type PokemonsAction = { type: typeof SET_POKEMONS, payload: Pokemon[] }
export type CharacteristicsAction = { type: typeof SET_CHARACTERISTICS, payload: Characteristics | null }

export const setPokemons = (pokemons: Pokemon[]): PokemonsAction => ({
    type: SET_POKEMONS, payload: pokemons
});

export const setCharacteristics = (characteristics: Characteristics | null): CharacteristicsAction => ({
    type: SET_CHARACTERISTICS, payload: characteristics
});