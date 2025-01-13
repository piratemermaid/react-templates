import { createTheme } from '@mui/material';
import { grey, purple, teal } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: teal[500],
    },
    secondary: {
      main: purple[500],
    },
    action: {
      disabled: grey[500],
    },
  },
});
