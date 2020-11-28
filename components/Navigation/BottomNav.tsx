import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Box, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import theme from '../../themeprovider/theme/index';

interface BottomNavProps {
  homepage: boolean;
}

const useStyles = makeStyles(() => createStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    color: '#000000',
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
  },
}));

export default function BottomAppBar(props: BottomNavProps) {
  const classes = useStyles();
  const router = useRouter();
  const { homepage } = props;
  const href = homepage ? '/simple-view' : '/';
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%" ml={3} mr={3}>
            <Box display="flex">
              <Button href={href} variant="outlined" className={classes.button} onClick={handleClick}>
                <Typography variant="body1">Say Hello!</Typography>
              </Button>
            </Box>
            <Box display="flex">
              <Button href={href} variant="outlined" className={classes.button} onClick={handleClick}>
                <Typography variant="body1">Change View</Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
