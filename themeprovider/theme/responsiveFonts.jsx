const responsiveFonts = (theme) => ({
  ...theme,
  typography: {
    ...theme.typography,
    h1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '30px',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Esteban',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 400,
    },
  },
});

export default responsiveFonts;
