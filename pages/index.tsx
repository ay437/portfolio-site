import React from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import theme from '../themeprovider/theme/index';
import Layout from '../components/Layouts/HomeLayout/HomeLayout';
import MainNav from '../components/Navigation/MainNav';
import BottomNav from '../components/Navigation/BottomNav';

const useStyles = makeStyles(() => createStyles({
  outerPadding: {
    margin: '0',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1600px',
      margin: '0 auto',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <MainNav homepage />
      <Box className={classes.outerPadding}>
        <Layout altLayout={false} />
      </Box>
      <BottomNav homepage />
    </ThemeProvider>
  );
}

export default App;
