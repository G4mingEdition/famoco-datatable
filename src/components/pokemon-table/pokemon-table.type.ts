// Libraries
import { RouteComponentProps } from 'react-router-dom';
import { CharacteristicsAction, PokemonsAction } from '../../redux/actions/pokemonsActions';
// Types
import Pokemon from "../../types/pokemon.type";
import Characteristics from '../../types/characteristics.type';

export interface Props extends RouteComponentProps {
    pokemons: Pokemon[],
    setPokemons: (pokemons: Pokemon[]) => PokemonsAction,
    setCharacteristics: (characteristics: Characteristics | null) => CharacteristicsAction
}

export interface State {
    totalCount: number,
    elementsPerPage: number,
    pokemons: Pokemon[],
    loadedPages: number[]
}