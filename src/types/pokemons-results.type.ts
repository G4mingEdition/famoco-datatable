// Types
import Pokemon from './pokemon.type';

export default interface PokemonsResults {
  data: {
    pokemons: {
      results: Pokemon[]
    }
  }
}