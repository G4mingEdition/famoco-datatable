import { Component } from 'react';
// Services
import PokemonService from '../services/pokemon.service';
import IPokemon from '../types/pokemon.type';
// Types
import IPokemons from '../types/pokemons.type';

interface IProps {}
interface IState {
    totalCount: number,
    pokemons: IPokemon[],
    loadedPages: number[]
}

class PokemonList extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            totalCount: 0,
            pokemons: [],
            loadedPages: [],
        }
    }

    render() {
        const { totalCount, pokemons } = this.state;
        return (<>
            <div>{`${pokemons.length}/${totalCount}`}</div>
            <div>{pokemons.map((pokemon: IPokemon) => <img src={pokemon.image} alt={pokemon.name} onClick={() => console.log(pokemon.url)} />)}</div>
        </>);
    }

    componentDidMount = () => {
        PokemonService.getAtPage(1).then((pokemons: IPokemons) => this.setState({ totalCount: pokemons.count, pokemons: pokemons.results, loadedPages: [1] }));
    }
}

export default PokemonList;