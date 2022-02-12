// Libraries
import { RouteComponentProps } from 'react-router-dom';
// Types
import Pokemon from "../../types/pokemon.type";
import Characteristics from '../../types/characteristics.type';
import { SortDirection } from '@mui/material';

export interface Props extends RouteComponentProps {
    pokemons: Pokemon[],
    setPokemons: (pokemons: Pokemon[]) => Object,
    setCharacteristics: (characteristics: Characteristics | null) => Object
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