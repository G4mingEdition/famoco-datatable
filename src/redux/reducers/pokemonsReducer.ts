// Actions
import { Action, SET_POKEMONS } from '../actions/pokemonsActions'
// Types
import Pokemon from '../../types/pokemon.type'

export interface PokemonsState {
    pokemons: Pokemon[]
}

const initialState = {
    pokemons: []
}

export const pokemonsReducer = (state: PokemonsState = initialState, action: Action): PokemonsState => {
    switch (action.type) {
        case SET_POKEMONS: return { ...state, pokemons: action.payload }
        default: return state;
    }
}