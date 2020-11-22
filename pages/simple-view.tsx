import React from 'react';
import { ThemeProvider, Box } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import theme from '../themeprovider/theme/index';
import CardLayout from '../components/CardLayout/CardLayout';
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
      margin: '0 20%',
    },
  },
}));

function SimpleView() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Nav homepage={false} />
      <Box className={classes.outerPadding}>
        <CardLayout altLayout />
      </Box>
    </ThemeProvider>
  );
}

export default SimpleView;