// Actions
import { CharacteristicsAction, PokemonsAction, SET_CHARACTERISTICS, SET_POKEMONS } from '../actions/pokemonsActions'
// Types
import Pokemon from '../../types/pokemon.type'
import Characteristics from '../../types/characteristics.type'

export interface PokemonsState {
    pokemons: Pokemon[],
    characteristics: Characteristics | null
}

const initialState = {
    pokemons: [],
    characteristics: null
}

export const pokemonsReducer = (state: PokemonsState = initialState, action: PokemonsAction | CharacteristicsAction): PokemonsState => {
    switch (action.type) {
        case SET_POKEMONS: return { ...state, pokemons: action.payload }
        case SET_CHARACTERISTICS: return { ...state, characteristics: action.payload }
        default: return state;
    }
}