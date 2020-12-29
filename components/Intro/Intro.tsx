import React from 'react';
import { Typography, Box, Link } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import theme from '../../themeprovider/theme/index';

interface IntroProps {
  title1: string;
  title2: string;
  wave: string;
}

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
      flexDirection:"column",
    },
    '&:hover': {
      boxShadow: '12px 10px 22px 0px #CCE0DA',
    },
  },
  textWrapper: {
    paddingLeft: "20px",
    paddingRight: "0",
    [theme.breakpoints.up('xs')]: {
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  },
  waveWrapper: {
    paddingLeft: "0",
    paddingRight: "20px",
    [theme.breakpoints.up('xs')]: {
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  },
  heading: {
    fontWeight: 'normal',
    fontFamily: 'Nunito Sans, serif'
  },
  wave: {
    fontSize: '40px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '50px'
    },
  },
  introCopy: {
    fontSize: '17px'
  },
}));

function Intro(props: IntroProps) {
  const { title1, title2, wave } = props;
  const classes = useStyles();
  return (
    <Link href="/example-content" underline="none">
      <Box
        bgcolor="#000000"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="16px"
        height="100%"
        className={classes.wrapper}
      >
        <Box display="flex" flexDirection="column" className={classes.textWrapper}>
          <Box>
            <Typography variant="h1" color="secondary" className={classes.heading}>{title1}</Typography>
            <Typography variant="h1" color="secondary" className={classes.heading}>{title2}</Typography>
          </Box>
          <Box padding="30px 0">
            <Typography variant="body1" color="secondary" className={classes.introCopy}>I’m a Front End Developer with skills ranging across React, Javascript, Node and UX.</Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="secondary" className={classes.introCopy}>Based in London.</Typography>
          </Box>
        </Box>
        <Box padding="30px 0" textAlign="center" className={classes.waveWrapper}>
          <Typography variant="h1" color="secondary" className={classes.wave}>{wave}</Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default Intro;
