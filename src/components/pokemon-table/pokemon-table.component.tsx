import { Component } from 'react';
// Assets
import OpenedPokeball from '../../assets/pictures/opened-pokeball.png';
import ClosedPokeball from '../../assets/pictures/closed-pokeball.png';
// Components
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
// Libraries
import { connect } from 'react-redux';
import { PokemonsState } from '../../redux/reducers/reducer';
import { setPokemons, setCharacteristics } from '../../redux/actions/pokemonsActions';
import { setPokemonTableState, setScrollTop } from '../../redux/actions/appActions';
// Services
import PokemonService from '../../services/pokemon.service';
// Styles
import './pokemon-table.css';
// Types
import { Props, State } from './pokemon-table.type';
import Pokemon from '../../types/pokemon.type';

class PokemonTable extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentPage: 0,
            elementsPerPage: 25,
            sort: {
                sortBy: 'id',
                sortDirection: 'asc',
                direction: 'asc'
            }
        }
    }

    render() {
        const { pokemons } = this.props;
        const { currentPage, elementsPerPage } = this.state;

        return (
            <>
                {this.renderDataTable(currentPage, elementsPerPage, pokemons)}
            </>
        );
    }

    componentDidMount = () => {
        if (!this.props.pokemons.length)
            PokemonService.getAll().then((pokemons: Pokemon[]) => this.props.setPokemons(pokemons));
        else if (this.props.pokemonTableState) {
            this.setState(this.props.pokemonTableState, () => {
                const table = document.getElementById('pokemon-table');
                if (table) table.scrollTop = this.props.scrollTop;
                this.props.setScrollTop(0);
            });
        }
    }

    renderDataTable = (currentPage: number, elementsPerPage: number, pokemons: Pokemon[]) => {
        const { sort } = this.state;

        return (
            <Paper>
                <TableContainer sx={{ height: '75vh', borderRadius: '10px' }} id='pokemon-table'>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell sortDirection={sort.sortBy === 'id' ? sort.sortDirection : false}>
                                    <TableSortLabel active={sort.sortBy === 'id'} direction={sort.sortBy === 'id' ? sort.direction : 'asc'} onClick={() => this.handleSort('id')}>
                                        ID
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sortDirection={sort.sortBy === 'name' ? sort.sortDirection : false}>
                                    <TableSortLabel active={sort.sortBy === 'name'} direction={sort.sortBy === 'name' ? sort.direction : 'asc'} onClick={() => this.handleSort('name')}>
                                        Name
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>Picture</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{pokemons.length > 0 && this.renderRows(currentPage, elementsPerPage, pokemons)}</TableBody>
                    </Table>
                </TableContainer>
                {pokemons.length > 0 &&
                    <TablePagination
                        component='div' count={pokemons.length} rowsPerPage={elementsPerPage} page={currentPage}
                        style={{ display: 'block', width: '100%', borderRadius: '0 0 10px 10px' }}
                        onPageChange={this.handleChangePage}
                        onRowsPerPageChange={this.handleChangeRowsPerPage}
                    />}
            </Paper>
        );
    }

    renderRows = (currentPage: number, elementsPerPage: number, pokemons: Pokemon[]) => {
        let rows: any[] = [];

        const { sort } = this.state;
        const pokemonsList: Pokemon[] = JSON.parse(JSON.stringify(pokemons));
        if (sort.direction) {
            if (sort.sortBy === 'id' && sort.direction === 'desc') pokemonsList.reverse();
            else if (sort.sortBy === 'name' && sort.direction === 'asc') pokemonsList.sort((a: Pokemon, b: Pokemon) => (a.name > b.name ? 1 : -1));
            else if (sort.sortBy === 'name' && sort.direction === 'desc') pokemonsList.sort((a: Pokemon, b: Pokemon) => (a.name < b.name ? 1 : -1));
        }
        let index = (elementsPerPage * currentPage);
        let limit = (currentPage + 1) * elementsPerPage;
        if (limit > pokemonsList.length) limit = pokemonsList.length;
        for (index; index < limit; index++) {
            const pokemon = pokemonsList[index];
            rows.push(
                <TableRow key={index}>
                    <TableCell style={{ paddingTop: 0, paddingBottom: 0, fontWeight: 'bolder' }}>
                        {pokemon.id}
                    </TableCell>
                    <TableCell style={{ paddingTop: 0, paddingBottom: 0, textTransform: 'capitalize' }}>
                        {pokemon.name}
                    </TableCell>
                    <TableCell style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <img src={pokemon.image} alt={`${index + 1}`} />
                    </TableCell>
                    <TableCell style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <Button title='View characteristics' onClick={() => this.openCharacteristics(pokemon.url)}>
                            <div className='pokeball'>
                                <img src={ClosedPokeball} alt='closed-pokemon' />
                                <img className='hover' src={OpenedPokeball} alt='opened-pokemon' />
                            </div>
                        </Button>
                    </TableCell>
                </TableRow>
            );
        }

        return rows;
    }

    handleChangePage = (event: unknown, newPage: number) => this.setState({ currentPage: newPage });
    handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { pokemons } = this.props;
        let currentPage = this.state.currentPage;
        const elementsPerPage = parseInt(event.target.value, 10);
        let limit = (currentPage + 1) * elementsPerPage;
        if (limit > pokemons.length) currentPage = Math.floor(pokemons.length / elementsPerPage);
        this.setState({ elementsPerPage, currentPage });
    }

    handleSort = (id: 'id' | 'name' | 'picture') => {
        const { sortBy, direction } = this.state.sort;
        const newDirection = ['asc', undefined].includes(direction) && sortBy === id ? 'desc' : 'asc';
        this.setState({ sort: { sortBy: id, sortDirection: newDirection, direction: newDirection } });
    }

    openCharacteristics = (url: string) => {
        const table = document.getElementById('pokemon-table');
        this.props.setScrollTop(table?.scrollTop || 0);
        PokemonService.getCharacteristics(url).then(characteristics => {
            this.props.setPokemonTableState(this.state);
            this.props.setCharacteristics(characteristics);
            this.props.history.push('/characteristics');
        });
    }
}

const mapStateToProps = (state: PokemonsState) => {
    return {
        pokemons: state.pokemons,
        pokemonTableState: state.pokemonTableState,
        scrollTop: state.scrollTop
    };
}

const mapDispatchToProps = {
    setPokemons,
    setCharacteristics,
    setPokemonTableState,
    setScrollTop
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTable);