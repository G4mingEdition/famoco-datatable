// Types
import IPokemon from "./pokemon.type";

export default interface IPokemons {
  count: number,
  message: string,
  next: string,
  previous: string,
  results: IPokemon[],
  status: boolean
}