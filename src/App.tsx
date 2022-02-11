// Components
import PokemonTable from './components/pokemon-table/pokemon-table.component';
import PokemonCharacteritics from './components/pokemon-characteristics/pokemon-characteristics.component';
// Libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
// Styles
import './App.css';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonTable />} />
          <Route path='/characteristics' element={<PokemonCharacteritics />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
