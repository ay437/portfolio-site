import React from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import theme from '../themeprovider/theme/index';
import Layout from '../components/Layout/Layout';
import Nav from '../components/Nav/Nav';

const useStyles = makeStyles(() => createStyles({
  outerPadding: {
    margin: '0 20px',
    [theme.breakpoints.up('sm')]: {
      margin: '0 40px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 60px',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1600px',
      margin: '0 auto',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Nav homepage />
      <Box className={classes.outerPadding}>
        <Layout altLayout={false} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
