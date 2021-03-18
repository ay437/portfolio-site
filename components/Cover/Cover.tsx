import React from 'react';
import Link from 'next/link';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: 'linear-gradient(333.18deg, #000000 0.45%, #0E0E52 98.46%)',
      flexDirection: 'column',
      justifyContent: 'space-around',
      [theme.breakpoints.up('xs')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    contentWrapper: {
      padding: '0px 40px 0 20px',
      [theme.breakpoints.up('xs')]: {
        padding: '0px 40px',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '0px 60px 0 40px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '0px 28px 0 28px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '0px 60px 0 40px',
      },
    },
    imageWrapper: {
      padding: '48px 90px',
      [theme.breakpoints.up('xs')]: {
        padding: '0',
      },
      [theme.breakpoints.up('lg')]: {
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
    aboutLink: {
      cursor: 'pointer',
      transition: 'all .5s ease-in-out',
      width: 'fit-content',
      marginTop: '20px',
      '&:hover': {
        '& p': {
          color: 'rgb(85,172,238)',
          fontWeight: '500',
          position: 'relative',
        },
      },
      [theme.breakpoints.up('xs')]: {
        marginTop: '0',
      },
    },
    image: {
      width: '180px',
      [theme.breakpoints.up('sm')]: {
        width: '185px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '200px',
      },
    },
    circleOne: {
      background:
        'linear-gradient(180deg, #654212 36.46%, rgba(101, 66, 18, 0) 100%)',
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
      background:
        'linear-gradient(180deg, #3B189E 36.46%, rgba(101, 66, 18, 0) 100%)',
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
      <Box display="flex" className={classes.contentWrapper}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Typography variant="h2" color="secondary">
            {title}
          </Typography>
          <Link href="/about">
            <Box className={classes.aboutLink}>
              <Typography variant="body2" color="secondary">
                FIND OUT MORE ABOUT ME &gt;
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box display="flex" className={classes.imageWrapper}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className={classes.image}
        >
          <Box
            bgcolor="#bbb"
            borderRadius="50%"
            className={classes.circleOne}
          />
          <Box
            bgcolor="green"
            borderRadius="50%"
            className={classes.circleTwo}
          />
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
