/* eslint-disable max-len */
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Link } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Image from 'next/image';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: 'none',
      backgroundColor: '#e5e5e5',
      height: '100px',
      paddingTop: '18px',
    },
    toolBar: {
      margin: '0 auto',
      width: '100%',
      paddingLeft: '0',
      paddingRight: '0',
      [theme.breakpoints.up('xl')]: {
        maxWidth: '1440px',
      },
    },
    innerNavContent: {
      margin: '0 30px',
      [theme.breakpoints.up('sm')]: {
        margin: '0 50px',
      },
      [theme.breakpoints.up('xl')]: {
        margin: '0 30px',
      },
    },
    navItems: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '150px',
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: '250px',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '450px',
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '600px',
      },
    },
    button: {
      background: '#000000',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '38px',
      height: '40px',
    },
    buttonText: {
      textTransform: 'none',
    },
  })
);

function MainNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            className={classes.innerNavContent}
          >
            <Box left="0">
              <Image src="/logo-black.png" alt="logo" width={165} height={60} />
            </Box>
            <Box className={classes.navItems}>
              <Link href="/about">
                <Typography variant="h3" color="primary">
                  ABOUT
                </Typography>
              </Link>
              <Link href="/work">
                <Typography variant="h3" color="primary">
                  WORK
                </Typography>
              </Link>
              <Link href="/blog">
                <Typography variant="h3" color="primary">
                  BLOG
                </Typography>
              </Link>
              <Link href="/contact">
                <Typography variant="h3" color="primary">
                  CONTACT
                </Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainNav;
