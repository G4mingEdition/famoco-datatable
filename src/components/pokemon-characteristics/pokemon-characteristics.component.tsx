import { Component } from 'react';
// Libraries
import { connect } from 'react-redux';
import { PokemonsState } from '../../redux/reducers/pokemonsReducer';
import { setCharacteristics } from '../../redux/actions/pokemonsActions';
// Styles
import './pokemon-characteristics.css';
// Types
import { Props, State } from './pokemon-characteristics.type';

class PokemonCharacteritics extends Component<Props, State> {
    render() {
        return (
            <div>
                Hello
            </div>
        );
    }

    componentDidMount = () => {
        if (!this.props.characteristics) this.props.history.push('/');
        else console.log(this.props.characteristics);
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