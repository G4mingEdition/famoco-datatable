// Actions
import { CharacteristicsAction, PokemonsAction, SET_CHARACTERISTICS, SET_POKEMONS } from '../actions/pokemonsActions'
import { PokemonTableAction, ScrollTopAction, SET_POKEMON_TABLE_STATE, SET_SCROLL_TOP } from '../actions/appActions'
// Types
import Pokemon from '../../types/pokemon.type'
import Characteristics from '../../types/characteristics.type'
import { State as PokemonTableState } from '../../components/pokemon-table/pokemon-table.type'

export interface PokemonsState {
    pokemons: Pokemon[],
    characteristics: Characteristics | null,
    pokemonTableState: PokemonTableState | null,
    scrollTop: number
}

const initialState = {
    pokemons: [],
    characteristics: null,
    pokemonTableState: null,
    scrollTop: 0
}

export const pokemonsReducer = (state: PokemonsState = initialState, action: PokemonsAction | CharacteristicsAction | PokemonTableAction | ScrollTopAction): PokemonsState => {
    switch (action.type) {
        case SET_POKEMONS: return { ...state, pokemons: action.payload }
        case SET_CHARACTERISTICS: return { ...state, characteristics: action.payload }
        case SET_POKEMON_TABLE_STATE: return { ...state, pokemonTableState: action.payload }
        case SET_SCROLL_TOP: return { ...state, scrollTop: action.payload }
        default: return state;
    }
}