import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import MuiLink from '@material-ui/core/Link';
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
      // justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingRight: '0',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        // justifyContent: 'space-between',
        justifyContent: 'space-between',
        paddingRight: '60px',
        width: '20%',
        // width: '50%',
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
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        height: '50px',
      },
    },
    navItemsThree: {
      width: '100%',
      paddingLeft: '0',
      marginTop: '0',
      [theme.breakpoints.up('md')]: {
        // marginTop: '-40px',
        width: '21%',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '60px',
        marginTop: '0',
      },
    },
    navLinks: {
      marginRight: '20px',
      cursor: 'pointer',
      transition: 'all .5s ease-in-out',
      width: 'fit-content',
      '&:hover': {
        textDecoration: 'none',
        '& span': {
          color: 'rgb(129 159 255)',
          position: 'relative',
        },
        '& h4': {
          color: 'rgb(129 159 255)',
          position: 'relative',
        },
      },
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
            <Link href="/about">
              <Box className={classes.navLinks}>
                <Typography variant="overline" color="secondary">
                  ABOUT
                </Typography>
              </Box>
            </Link>
            {/* <Link href="/work">
              <Box className={classes.navLinks}>
                <Typography variant="overline" color="secondary">
                  WORK
                </Typography>
              </Box>
            </Link>
            <Link href="/blog">
              <Box className={classes.navLinks}>
                <Typography variant="overline" color="secondary">
                  BLOG
                </Typography>
              </Box>
            </Link> */}
            <Link href="/contact">
              <Box className={classes.navLinks}>
                <Typography variant="overline" color="secondary">
                  CONTACT
                </Typography>
              </Box>
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
              <MuiLink href="/" className={classes.navLinks}>
                <Typography variant="h4" color="secondary">
                  INSTAGRAM
                </Typography>
              </MuiLink>
              {/* <MuiLink href="/" className={classes.navLinks}>
                <Typography variant="h4" color="secondary">
                  TWITTER
                </Typography>
              </MuiLink> */}
            </Box>
            <Box className={classes.navItemsTwoInner}>
              <MuiLink href="/" className={classes.navLinks}>
                <Typography variant="h4" color="secondary">
                  LINKEDIN
                </Typography>
              </MuiLink>
              {/* <MuiLink href="/" className={classes.navLinks}>
                <Typography variant="h4" color="secondary">
                  BEHANCE
                </Typography>
              </MuiLink> */}
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
