import React, { ReactChild, ReactChildren } from 'react';
import Head from 'next/head';
import { ThemeProvider, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../themeprovider/theme';
import MainNav from '../../Navigation/MainNav';
import BottomNav from '../../Navigation/BottomNav';
import MobileNav from '../../Navigation/MobileNav';

export interface Children {
  children: ReactChild | ReactChildren;
  title: String;
}

const useStyles = makeStyles(() =>
  createStyles({
    outerPadding: {
      margin: '0 auto',
      [theme.breakpoints.up('sm')]: {
        margin: '0 20px',
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: '1440px',
        margin: '0 auto',
      },
    },
  })
);

export default function Layout(props: Children) {
  const classes = useStyles();
  const { children, title } = props;
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      <MobileNav />
      <Box className={classes.outerPadding}>{children}</Box>
      <BottomNav />
    </ThemeProvider>
  );
}
