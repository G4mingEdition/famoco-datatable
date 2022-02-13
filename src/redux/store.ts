// Libraries
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { pokemonsReducer } from './reducers/reducer';

const middleware = [thunk];
export const store = createStore(pokemonsReducer, applyMiddleware(...middleware));