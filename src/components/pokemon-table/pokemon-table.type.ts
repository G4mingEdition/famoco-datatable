// Libraries
import { RouteComponentProps } from 'react-router-dom';
// Types
import Pokemon from "../../types/pokemon.type";
import Characteristics from '../../types/characteristics.type';
import { SortDirection } from '@mui/material';

export interface Props extends RouteComponentProps {
    pokemons: Pokemon[],
    pokemonTableState: State | null,
    scrollTop: number,
    setPokemons: (pokemons: Pokemon[]) => Object,
    setCharacteristics: (characteristics: Characteristics | null) => Object,
    setPokemonTableState: (pokemonTableState: State | null) => Object,
    setScrollTop: (scrollTop: number) => object
}

export interface State {
    currentPage: number,
    elementsPerPage: number,
    sort: {
        sortBy: 'id' | 'name' | 'picture',
        sortDirection: SortDirection | undefined,
        direction: 'desc' | 'asc' | undefined
    }
}