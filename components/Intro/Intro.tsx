import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import theme from '../../themeprovider/theme/index';

interface IntroProps {
  title1: string;
  title2: string;
  wave: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
      },
      '&:hover': {
        boxShadow: '12px 10px 22px 0px #CCE0DA',
      },
    },
    textWrapper: {
      paddingLeft: '20px',
      paddingRight: '0',
      [theme.breakpoints.up('xs')]: {
        paddingLeft: '40px',
        paddingRight: '40px',
      },
    },
    introCopy: {
      padding: '24px 0',
      [theme.breakpoints.up('sm')]: {
        padding: '30px 0',
      },
    },
    waveWrapper: {
      paddingLeft: '0',
      paddingRight: '20px',
      [theme.breakpoints.up('xs')]: {
        paddingLeft: '40px',
        paddingRight: '40px',
      },
    },
    wave: {
      fontSize: '40px',
      [theme.breakpoints.up('xs')]: {
        fontSize: '50px',
      },
    },
  }));

function Intro(props: IntroProps) {
  const { title1, title2, wave } = props;
  const classes = useStyles();
  return (
    <Link href="/about">
      <Box
        bgcolor="#000000"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="16px"
        height="100%"
        className={classes.wrapper}
      >
        <Box
          display="flex"
          flexDirection="column"
          className={classes.textWrapper}
        >
          <Box>
            <Typography variant="h1" color="secondary">
              {title1}
            </Typography>
            <Typography variant="h1" color="secondary">
              {title2}
            </Typography>
          </Box>
          <Box className={classes.introCopy}>
            <Typography variant="body2" color="secondary">
              I’m a Front End Developer with skills ranging across React,
              Javascript, Node and UX.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="secondary">
              Based in London.
            </Typography>
          </Box>
        </Box>
        <Box
          padding="30px 0"
          textAlign="center"
          className={classes.waveWrapper}
        >
          <Typography variant="h1" color="secondary" className={classes.wave}>
            {wave}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default Intro;
