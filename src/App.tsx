// Components
import PokemonTable from './components/pokemon-table/pokemon-table.component';
import PokemonCharacteritics from './components/pokemon-characteristics/pokemon-characteristics.component';
// Libraries
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
// Styles
import './App.css';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={props => <PokemonTable {...props} />} />
          <Route path='/characteristics' render={props => <PokemonCharacteritics {...props} />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
