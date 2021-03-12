const responsiveFonts = (theme) => ({
  ...theme,
  typography: {
    ...theme.typography,
    h1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '1.875rem',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontStyle: 'semi-bold',
      fontSize: '1.5625rem',
      fontWeight: 600,
      lineHeight: '1.75',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontStyle: 'medium',
      fontSize: '0.8125rem',
      fontWeight: 500,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontStyle: 'bold',
      fontSize: '0.625rem',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontSize: '1.0625rem',
      fontWeight: 400,
    },
    caption: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontSize: '0.9375rem',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'bold',
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    overline: {
      fontFamily: 'Montserrat',
      fontStyle: 'bold',
      fontSize: '0.9375rem',
      fontWeight: 700,
    },
  },
});

export default responsiveFonts;
