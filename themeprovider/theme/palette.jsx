import * as colors from './colorPalette';

const {
  coreRed, coreBlue, coreWhite,
} = colors;

export default {
  palette: {
    background: {
      default: coreWhite,
    },
    primary: {
      main: '#2A3036',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: coreBlue,
    },
    error: {
      main: coreRed,
    },
    ...colors,
  },
};
