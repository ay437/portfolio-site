const responsiveFonts = (theme) => ({
  ...theme,
  typography: {
    ...theme.typography,
    h1: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontSize: '36px',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontSize: '30px',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontSize: '24px',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontSize: '20px',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontSize: '18px',
      fontWeight: 'normal',
    },
    button1: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '18px',
      letterSpacing: '0.0357143em',
    },
    button2: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      letterSpacing: '0.0357143em',
    },
    input: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 'normal',
    },
  },
});

export default responsiveFonts;
