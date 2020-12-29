const responsiveFonts = (theme) => ({
  ...theme,
  typography: {
    ...theme.typography,
    h1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '24px',
      fontWeight: 600,
      [theme.breakpoints.up('sm')]: {
        fontSize: '30px',
      },
    },
    h2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '20px',
      fontWeight: 600,
      [theme.breakpoints.up('xs')]: {
        fontSize: '24px',
      },
    },
    h3: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'semi-bold',
      fontSize: '13px',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'bold',
      fontSize: '14px',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 400,
    },
  },
});

export default responsiveFonts;
