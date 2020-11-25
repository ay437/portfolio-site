import * as colors from './colorPalette';

const {
  coreRed, coreWaterBlue, coreBlue, coreWhite,
} = colors;

export default {
  palette: {
    background: {
      default: coreWhite,
    },
    primary: {
      main: coreBlue,
      '&$disabled': {
        color: coreWaterBlue,
      },
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
