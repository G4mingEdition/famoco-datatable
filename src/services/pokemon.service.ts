// Libraries
import axios from 'axios';
import PokemonsResults from '../types/pokemons-results.type';
// Types

class PokemonService {
  getAll() {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) { pokemons(limit: $limit, offset: $offset) { results { id url name image } } }`;
    const gqlVariables = { offset: 0, limit: 151 };

    return axios.post<PokemonsResults>('https://graphql-pokeapi.graphcdn.app/', { query: gqlQuery, variables: gqlVariables })
      .then(response => (response.data.data.pokemons.results))
      .catch(error => (error));
  }

  getCharacteristics(url: string) {
    return axios.get(url)
      .then(response => (response.data))
      .catch(error => (error));
  }
}

export default new PokemonService();