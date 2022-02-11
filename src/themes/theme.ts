import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiTableFooter: {
            styleOverrides: {
                root: {
                    left: 0,
                    bottom: 0,
                    zIndex: 2,
                    position: 'sticky'
                }
            }
        }
    }
});

export default theme;