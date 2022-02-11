import { Component } from 'react';
// Assets
import OpenedPokeball from '../../assets/pictures/opened-pokeball.png';
import ClosedPokeball from '../../assets/pictures/closed-pokeball.png';
// Components
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
// Libraries
import { connect, ConnectedProps } from 'react-redux';
import { PokemonsState } from '../../redux/reducers/pokemonsReducer';
import { setPokemons } from '../../redux/actions/pokemonsActions';
// Services
import PokemonService from '../../services/pokemon.service';
// Styles
import './pokemon-table.css';
// Types
import { State } from './pokemon-table.type';
import IPokemons from '../../types/pokemons.type';
import IPokemon from '../../types/pokemon.type';

type Props = ConnectedProps<typeof connector>;

class PokemonTable extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            totalCount: 0,
            elementsPerPage: 50,
            pokemons: [],
            loadedPages: []
        }
    }

    render() {
        const { totalCount, pokemons } = this.state;
        return (
            <Paper>
                <TableContainer>
                    <Table sx={{ minWidth: 500 }} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Picture</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{this.renderRows(pokemons)}</TableBody>
                    </Table>
                </TableContainer>
                {totalCount > 0 &&
                    <TablePagination
                        colSpan={4} count={totalCount} rowsPerPage={50} page={1}
                        SelectProps={{
                            inputProps: { 'aria-label': 'rows per page', },
                            native: true,
                        }}
                        onPageChange={this.handleChangePage}
                        onRowsPerPageChange={this.handleChangeRowsPerPage}
                    />}
            </Paper>
        );
    }

    componentDidMount = () => {
        PokemonService.getAtPage(1, this.state.elementsPerPage).then((pokemons: IPokemons, ) => {
            this.props.setPokemons(pokemons.results);
            this.setState({ totalCount: pokemons.count, pokemons: pokemons.results, loadedPages: [1] });
        });
    }

    renderRows = (pokemons: IPokemon[]) => {
        return pokemons.map((pokemon: IPokemon, index: number) => (
            <TableRow key={index}>
                <TableCell style={{ paddingTop: 0, paddingBottom: 0 }}>
                    {index + 1}
                </TableCell>
                <TableCell style={{ paddingTop: 0, paddingBottom: 0 }}>
                    {pokemon.name}
                </TableCell>
                <TableCell style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <img src={pokemon.image} alt={`${index + 1}`} />
                </TableCell>
                <TableCell style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <Button title='View characteristics' onClick={() => this.openCharacteristics(pokemon.url)}>
                        <div className='pokeball'>
                            <img src={ClosedPokeball} />
                            <img className='hover' src={OpenedPokeball} />
                        </div>
                    </Button>
                </TableCell>
            </TableRow>
        ));
    }

    handleChangePage = () => console.log('changed');
    handleChangeRowsPerPage = () => console.log('changed');
    openCharacteristics = (url: string) => {
        console.log(this.props.pokemons);
        PokemonService.getCharacteristics(url).then(characteristics => {
            console.log(characteristics);
        });
    }
}

const mapStateToProps = (state: PokemonsState) => {
    return {
        pokemons: state.pokemons
    };
}

const mapDispatchToProps = {
    setPokemons
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(PokemonTable);