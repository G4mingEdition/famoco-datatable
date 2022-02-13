import { Component } from 'react';
// Assets
import PokemonLogo from '../../assets/pictures/pokemon.png';
// Components
import { Button, Paper } from '@mui/material';
// Styles
import './home.css';
// Types
import { Props, State } from './home.type';

class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <Paper style={{ padding: '25px', marginBottom: '20px' }}>
                    <img src={PokemonLogo} alt='Pokemon' style={{ display: 'block', width: '45%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px' }} />
                    <p>
                        Pokémon are creatures of all shapes and sizes who live in the wild or alongside their human partners (called “Trainers”).
                        During their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon.
                        Hundreds of known Pokémon inhabit the Pokémon universe, with untold numbers waiting to be discovered!
                    </p>
                    <p>
                        This list represents the order of Pokémon in the National Pokédex.
                        Kanto region Pokémon appear first (001 to 151).
                    </p>
                    <Button
                        size='large' color='warning' variant='contained' sx={{ display: 'block', ml: 'auto', mr: 'auto' }}
                        onClick={() => this.props.history.push('/pokemons')}
                    >
                        Access to list
                    </Button>
                </Paper>
            </>
        );
    }
}

export default Home;