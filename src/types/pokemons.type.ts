// Types
import Pokemon from "./pokemon.type";

export default interface Pokemons {
  count: number,
  message: string,
  next: string,
  previous: string,
  results: Pokemon[],
  status: boolean
}