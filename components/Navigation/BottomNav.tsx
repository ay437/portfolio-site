import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Link } from '@material-ui/core';
import Image from 'next/image';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '255px',
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: "url('/wave-footer-480.svg')",
      display: 'flex',
      [theme.breakpoints.up('xs')]: {
        backgroundImage: "url('/wave-footer-768.svg')",
      },
      [theme.breakpoints.up('sm')]: {
        backgroundImage: "url('/wave-footer-996.svg')",
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: "url('/wave-footer-1200.svg')",
      },
      [theme.breakpoints.up('lg')]: {
        backgroundImage: "url('/wave-footer-1440.svg')",
      },
      [theme.breakpoints.up('xl')]: {
        backgroundImage: "url('/wave-footer-wide.svg')",
      },
    },
    navWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '120px auto 0',
      flexWrap: 'wrap',
      width: '100%',
      padding: '0 30px',
      height: '120px',
      [theme.breakpoints.up('sm')]: {
        padding: '0 90px',
      },
      [theme.breakpoints.up('md')]: {
        height: 'auto',
        margin: '100px auto 0',
      },
      [theme.breakpoints.up('lg')]: {
        width: '1000px',
        flexWrap: 'nowrap',
        padding: '0',
      },
    },
    navItemsOne: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      alignItems: 'center',
      paddingRight: '0',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
        paddingRight: '60px',
        width: '50%',
      },
    },
    navItemsTwo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'end',
      alignItems: 'center',
      width: '100%',
      padding: '0 20px 0 0',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
        width: '25%',
        padding: '0 60px',
      },
    },
    navItemsTwoInner: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '50px',
      marginRight: '0',
      [theme.breakpoints.up('xs')]: {
        flexDirection: 'row',
        height: 'auto',
        marginRight: '40px',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        height: '50px',
        marginRight: '0',
      },
    },
    navItemsThree: {
      width: '100%',
      paddingLeft: '0',
      marginTop: '0',
      [theme.breakpoints.up('md')]: {
        marginTop: '-40px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '21%',
        paddingLeft: '60px',
        marginTop: '0',
      },
    },
    navLinks: {
      marginRight: '20px',
      [theme.breakpoints.up('xs')]: {
        marginRight: '40px',
      },
      [theme.breakpoints.up('md')]: {
        marginRight: '0',
      },
    },
    navBreakOne: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    navBreakTwo: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
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

export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Box className={classes.navWrapper}>
          <Box className={classes.navItemsOne}>
            <Link href="/" className={classes.navLinks}>
              <Typography variant="h3" color="secondary">
                HOME
              </Typography>
            </Link>
            <Link href="/work" className={classes.navLinks}>
              <Typography variant="h3" color="secondary">
                WORK
              </Typography>
            </Link>
            <Link href="/blog" className={classes.navLinks}>
              <Typography variant="h3" color="secondary">
                BLOG
              </Typography>
            </Link>
            <Link href="/contact" className={classes.navLinks}>
              <Typography variant="h3" color="secondary">
                CONTACT
              </Typography>
            </Link>
          </Box>
          <Box className={classes.navBreakOne}>
            <Image
              src="/footer-break.svg"
              alt="footer-break"
              width={17}
              height={46}
            />
          </Box>
          <Box className={classes.navItemsTwo}>
            <Box className={classes.navItemsTwoInner}>
              <Link href="/" className={classes.navLinks}>
                <Typography variant="h3" color="secondary">
                  INSTAGRAM
                </Typography>
              </Link>
              <Link href="/">
                <Typography variant="h3" color="secondary">
                  TWITTER
                </Typography>
              </Link>
            </Box>
            <Box className={classes.navItemsTwoInner}>
              <Link href="/" className={classes.navLinks}>
                <Typography variant="h3" color="secondary">
                  LINKEDIN
                </Typography>
              </Link>
              <Link href="/">
                <Typography variant="h3" color="secondary">
                  BEHANCE
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className={classes.navBreakTwo}>
            <Image
              src="/footer-break.svg"
              alt="footer-break"
              width={17}
              height={46}
            />
          </Box>
          <Box className={classes.navItemsThree}>
            <Typography variant="h3" color="secondary">
              © Arjun Yadav 2020 All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </div>
    </>
  );
}
