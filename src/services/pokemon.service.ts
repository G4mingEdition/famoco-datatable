// Libraries
import axios from 'axios';
// Types
import IPokemonsResults from '../types/pokemons-results.type';

class PokemonService {
  getAtPage(page: number, elementsPerPage: number) {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) { pokemons(limit: $limit, offset: $offset) { count next previous status message results { url name image } } }`;
    const gqlVariables = {
      offset: 1 + (elementsPerPage * (page - 1)),
      limit: elementsPerPage,
    };

    return axios.post<IPokemonsResults>('https://graphql-pokeapi.graphcdn.app/', { query: gqlQuery, variables: gqlVariables })
      .then(response => (response.data.data.pokemons))
      .catch(error => (error));
  }

  getCharacteristics(url: string) {
    return axios.get(url)
      .then(response => (response.data))
      .catch(error => (error));
  }
}

export default new PokemonService();