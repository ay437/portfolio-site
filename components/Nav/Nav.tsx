import React from 'react';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Image from 'next/image';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: '1px solid #bababa',
    backgroundColor: '#ffffff',
    height: '80px',
  },
  toolBar: {
    margin: '0 auto',
    width: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1600px',
    },
  },
}));

function SearchAppBar(props) {
  const classes = useStyles();
  const router = useRouter();
  const { homepage } = props;
  const href = '/';
  const handleClick = (e) => {
    e.preventDefault();
    const href = homepage ? '/simple-view' : '/';
    router.push(href);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Image
            src="/logo-black.png"
            alt="logo"
            width={165}
            height={60}
          />
          <Button href={href} variant="outlined" color="primary" onClick={handleClick}>
            Say Hello
          </Button>
          <Button href={href} variant="outlined" color="primary" onClick={handleClick}>
            Change view
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchAppBar;
