// Components
import Home from './components/home/home.component';
import PokemonTable from './components/pokemon-table/pokemon-table.component';
import PokemonCharacteritics from './components/pokemon-characteristics/pokemon-characteristics.component';
// Libraries
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Grid, ThemeProvider } from '@mui/material';
// Styles
import './App.css';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', overflowX: 'hidden' }}>
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '25px 0' }}>
          <Grid item xs={6} sx={{ minWidth: '750px' }}>
            <HashRouter>
              <Switch>
                <Route path='/' exact render={props => <Home {...props} />} />
                <Route path='/pokemons' exact render={props => <PokemonTable {...props} />} />
                <Route path='/characteristics' render={props => <PokemonCharacteritics {...props} />} />
              </Switch>
            </HashRouter>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
