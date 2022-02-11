// Libraries
import { createStore } from 'redux';
import { pokemonsReducer } from './reducers/pokemonsReducer';

export const store = createStore(pokemonsReducer)