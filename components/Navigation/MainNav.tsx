/* eslint-disable max-len */
import React from 'react';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import {
  Button, Typography, Box, Link,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Image from 'next/image';
import theme from '../../themeprovider/theme/index';

interface MainNavProps {
  homepage: boolean;
}

const useStyles = makeStyles(() => createStyles({
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
      paddingLeft: '115px',
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
}));

function MainNav(props: MainNavProps) {
  const classes = useStyles();
  const router = useRouter();
  const { homepage } = props;
  const href = homepage ? '/simple-view' : '/';
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box display="flex" alignItems="center" width="100%" className={classes.innerNavContent}>
            <Box left="0">
              <Image
                src="/logo-black.png"
                alt="logo"
                width={165}
                height={60}
              />
            </Box>
            <Box className={classes.navItems}>
              <Link href="/simple-view"><Typography variant="h3" color="primary">ABOUT</Typography></Link>
              <Link href="/simple-view"><Typography variant="h3" color="primary">PROJECTS</Typography></Link>
              <Link href="/simple-view"><Typography variant="h3" color="primary">BLOG</Typography></Link>
              <Link href="/simple-view"><Typography variant="h3" color="primary">CONTACT</Typography></Link>
              {/* <Button href={href} variant="outlined" color="primary" onClick={handleClick} className={classes.button}>
                <Typography variant="body1" color="secondary" className={classes.buttonText}>Say Hello!</Typography>
              </Button> */}
              <Button href={href} variant="outlined" color="primary" onClick={handleClick} className={classes.button}>
                <Typography variant="h4" color="secondary" className={classes.buttonText}>Change View</Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainNav;
