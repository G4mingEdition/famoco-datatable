import Pokemon from "./pokemon.type";

export default interface PokemonsAction {
    type: string,
    pokemons: Pokemon[]
  }