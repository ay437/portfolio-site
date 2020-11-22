import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import responsiveFonts from './responsiveFonts';

const theme = createMuiTheme({
  ...palette,
  spacing: 10,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1440,
    },
  },
});

export default responsiveFonts(theme);
