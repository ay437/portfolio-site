import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import responsiveFonts from './responsiveFonts';

const theme = createMuiTheme({
  ...palette,
  spacing: 10,
  breakpoints: {
    values: {
      xs: 0,
      sm: 481,
      md: 767,
      lg: 997,
      xl: 1201,
    },
  },
});

export default responsiveFonts(theme);
