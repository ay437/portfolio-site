import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import responsiveFonts from './responsiveFonts';

const theme = createMuiTheme({
  ...palette,
  spacing: 10,
  breakpoints: {
    values: {
      xs: 481,
      sm: 767,
      md: 997,
      lg: 1201,
      xl: 1441,
    },
  },
});

export default responsiveFonts(theme);
