import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import responsiveFonts from './responsiveFonts';

const theme = createMuiTheme({
  ...palette,
  spacing: 4,
});

export default responsiveFonts(theme);
