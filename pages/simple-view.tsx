import React from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import theme from '../themeprovider/theme/index';
import Layout from '../components/Layout/Layout';
import Nav from '../components/Nav/Nav';
import BottomNav from '../components/BottomNav/BottomNav';

const useStyles = makeStyles(() => createStyles({
  outerPadding: {
    margin: '0 30px',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1600px',
    },
  },
}));

function SimpleView() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Nav homepage={false} />
      <Box className={classes.outerPadding}>
        <Layout altLayout />
      </Box>
      <BottomNav homepage={false} />
    </ThemeProvider>
  );
}

export default SimpleView;
