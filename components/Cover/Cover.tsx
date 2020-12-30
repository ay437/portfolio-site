import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() => createStyles({
  root: {
    background: 'linear-gradient(333.18deg, #000000 0.45%, #0E0E52 98.46%)',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  header: {
    fontSize: '16px',
    marginBottom: '16px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '20px',
      marginBottom: '0',
    },
  },
  seeMore: {
    fontSize: '13px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '16px',
    },
  },
  imageWrapper: {
    padding: '48px 90px',
    [theme.breakpoints.up('xs')]: {
      padding: '0 0 0 20px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 20px',
    },
  },
  profileImage: {
    width: '100px',
    height: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '127px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '166px',
    },
  },
  circleOne: {
    background: 'linear-gradient(180deg, #654212 36.46%, rgba(101, 66, 18, 0) 100%)',
    height: '90px',
    width: '90px',
    marginTop: '-70px',
    marginLeft: '-30px',
    [theme.breakpoints.up('xs')]: {
      height: '135px',
      width: '135px',
      marginTop: '-50px',
      marginLeft: '-40px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '150px',
      width: '150px',
      marginTop: '-125px',
      marginLeft: '-40px',
    },
  },
  circleTwo: {
    background: 'linear-gradient(180deg, #3B189E 36.46%, rgba(101, 66, 18, 0) 100%)',
    width: '110px',
    height: '110px',
    marginTop: '-100px',
    marginLeft: '20px',
    [theme.breakpoints.up('xs')]: {
      width: '160px',
      height: '160px',
      marginTop: '-150px',
      marginLeft: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '170px',
      width: '170px',
      marginTop: '-140px',
      marginLeft: '40px',
    },
  },
}));

interface CoverProps {
  title: string;
}

function Cover(props: CoverProps) {
  const classes = useStyles();
  const { title } = props;
  return (
    <Box
      border="2px solid #2A3036"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      height="100%"
      display="flex"
      className={classes.root}
    >
      <Box display="flex" padding="0 20px">
        <Box display="flex" flexDirection="column" justifyContent="space-evenly">
          <Typography variant="h2" color="secondary" className={classes.header}>{title}</Typography>
          <Typography variant="body1" color="secondary" className={classes.seeMore}>FIND OUT MORE ABOUT ME &gt;</Typography>
        </Box>
      </Box>
      <Box display="flex" className={classes.imageWrapper}>
        <Box display="flex" flexDirection="column" justifyContent="center" width="200px">
          <Box bgcolor="#bbb" borderRadius="50%" className={classes.circleOne} />
          <Box bgcolor="green" borderRadius="50%" className={classes.circleTwo} />
          <Box position="absolute">
            <img
              src="/headshot.svg"
              alt="headshot"
              width={166}
              height={283}
              className={classes.profileImage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cover;
