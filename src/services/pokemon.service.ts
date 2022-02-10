// Libraries
import axios from 'axios';
// Types
import IPokemonsResults from '../types/pokemons.type copy';

class PokemonService {
  getAtPage(page: number) {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) { pokemons(limit: $limit, offset: $offset) { count next previous status message results { url name image } } }`;
    const elementsPerPage = 20;
    const gqlVariables = {
      offset: 1 + (elementsPerPage * (page - 1)),
      limit: elementsPerPage,
    };

    return axios.post<IPokemonsResults>('https://graphql-pokeapi.graphcdn.app/', { query: gqlQuery, variables: gqlVariables })
      .then(response => {
        console.log(response.data.data)
        return (response.data.data.pokemons);
      })
      .catch(error => (error));
  }
}

export default new PokemonService();