import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0A285F',
                    borderRadius: '10px'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0A285F',
                    textAlign: 'center'
                }
            }
        }
    }
});

export default theme;