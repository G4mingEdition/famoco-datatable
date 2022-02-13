import { Component } from 'react';
// Components
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Chip, Divider, Grid, IconButton, LinearProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
// Libraries
import { connect } from 'react-redux';
import { PokemonsState } from '../../redux/reducers/reducer';
import { setCharacteristics } from '../../redux/actions/pokemonsActions';
// Styles
import './pokemon-characteristics.css';
// Types
import { Props, State } from './pokemon-characteristics.type';
import Type from '../../types/type.type';
import Characteristics from '../../types/characteristics.type';
import Stat from '../../types/stat.type';
import Ability from '../../types/ability.type';

const TYPE_COLORS: any = {
    bug: '#B1C12E',
    dark: '#4F3A2D',
    dragon: '#755EDF',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#823551D',
    fire: '#E73B0C',
    flying: '#A3B3F7',
    ghost: '#6060B2',
    grass: '#74C236',
    ground: '#D3B357',
    ice: '#A3E7FD',
    normal: '#C8C4BC',
    poison: '#934594',
    psychic: '#ED4882',
    rock: '#B9A156',
    steel: '#B5B5C3',
    water: '#3295F6'
};

class PokemonCharacteritics extends Component<Props, State> {
    render() {
        const { characteristics } = this.props;
        console.log(characteristics?.abilities)
        return (
            <>
                <Paper sx={{ overflow: 'hidden' }}>
                    {characteristics &&
                        <Grid container>
                            <Grid item xs={12} sx={{ padding: '10px' }}>
                                <Grid container>
                                    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton onClick={() => this.goBackToList()}>
                                            <ArrowBackIosNewIcon />
                                        </IconButton>
                                        <Chip label={characteristics?.order} style={{ marginLeft: '10px' }} />
                                    </Grid>
                                    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>{this.renderTypes(characteristics.types)}</Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ padding: '10px', backgroundColor: '#112852' }}>{this.renderCharacteristics(characteristics)}</Grid>
                            <Grid item xs={12} sx={{ padding: '10px' }}>
                                Data From <a href='https://pokeapi.co/' target='_blank' rel='noreferrer' style={{ color: '#FFCC00', fontWeight: 'bolder' }}>PokeAPI.co</a>
                            </Grid>
                        </Grid>}
                </Paper>
            </>
        );
    }

    componentDidMount = () => {
        if (!this.props.characteristics) this.props.history.push('/pokemons');
    }

    renderTypes = (types: Type[]) => {
        return types.map((type, index) => (
            <Chip label={type.type.name} sx={{ textTransform: 'capitalize', marginLeft: index ? '5px' : 'auto', backgroundColor: TYPE_COLORS[type.type.name] }} />
        ));
    }

    renderCharacteristics = (characteristics: Characteristics) => {
        const sprites = characteristics.sprites;
        return (
            <Grid container spacing={2} sx={{ padding: '0 25px 25px 25px' }}>
                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={sprites.front_default} alt='pokemon' style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={9}>
                    <h3 style={{ textTransform: 'capitalize' }}>{characteristics.name}</h3>
                    {this.renderStats(characteristics.stats)}
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ mt: '15px' }} />
                </Grid>
                <Grid item xs={6}>
                    <h3 style={{ textAlign: 'center' }}>Profile</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Chip label={<><span style={{ fontWeight: 'bolder' }}>Height:</span> {characteristics.height}</>} sx={{ width: '100%', mt: '10px' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Chip label={<><span style={{ fontWeight: 'bolder' }}>Weight:</span> {characteristics.weight}</>} sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ marginLeft: '10px' }}>
                        <h3 style={{ textAlign: 'center' }}>Alternatives forms</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, .15)', borderRadius: '10px' }}>
                            {sprites.front_female && <img src={sprites.front_female} alt='pokemon' title='Female' />}
                            {sprites.front_shiny && <img src={sprites.front_shiny} alt='pokemon' title='Shiny' />}
                            {sprites.front_shiny_female && <img src={sprites.front_shiny_female} alt='pokemon' title='Shiny female' />}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} style={{ paddingTop: 0 }}>
                    <div style={{ marginRight: '10px' }}>
                        <h3 style={{ textAlign: 'center' }}>Abilities</h3>
                        <Grid container spacing={2}>{this.renderAbilities(characteristics.abilities)}</Grid>
                    </div>
                </Grid>
            </Grid>
        );
    }

    renderStats = (stats: Stat[]) => {
        return stats.map((stat) => (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ minWidth: 130 }}>
                    <Typography variant='body2' color='text.secondary' sx={{ textTransform: 'capitalize', fontWeight: 'bolder' }}>
                        {stat.stat.name.replace('-', ' ')}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', mr: 2 }}>
                    <LinearProgress
                        variant='determinate' value={stat.base_stat <= 100 ? stat.base_stat : 100}
                        color={stat.stat.name === 'hp' ? 'error' : 'warning'} sx={{ height: 10, borderRadius: 5 }}
                    />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant='body2' color='text.secondary'>{`${Math.round(stat.base_stat)}%`}</Typography>
                </Box>
            </Box>
        ));
    }

    renderAbilities = (abilities: Ability[]) => {
        return abilities.map((ability) => (
            <Grid item xs={abilities.length > 2 ? 4 : 6}>
                <Chip label={ability.ability.name.replace('-', ' ')} sx={{ width: '100%', fontWeight: 'bolder', textTransform: 'capitalize' }} />
            </Grid>
        ));
    }

    goBackToList = () => {
        this.props.setCharacteristics(null);
        this.props.history.push('/pokemons');
    }
}

const mapStateToProps = (state: PokemonsState) => {
    return {
        characteristics: state.characteristics
    };
}

const mapDispatchToProps = {
    setCharacteristics
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCharacteritics);