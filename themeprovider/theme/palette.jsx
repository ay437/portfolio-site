import * as colors from './colorPalette';

const { coreRed, coreWaterBlue, coreBlue, coreYellow, coreWhite } = colors;

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
      main: coreYellow,
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
