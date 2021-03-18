import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import theme from '../../themeprovider/theme/index';

export interface LinkItem {
  id: number;
  name: string;
  url: string;
  logo: string;
}

export interface LinkProps {
  links: LinkItem[];
}

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      fontSize: '1.5rem',
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.1875rem',
      },
    },
    subHeader: {
      fontWeight: 700,
    },
    button: {
      marginTop: '40px',
      padding: '12px 24px',
      backgroundColor: '#000',
      [theme.breakpoints.up('sm')]: {
        padding: '20px 40px',
      },
    },
    buttonText: {
      fontWeight: 500,
    },
    profileImage: {
      width: '250px',
      marginTop: '40px',
      [theme.breakpoints.up('md')]: {
        marginTop: '0',
      },
      [theme.breakpoints.up('lg')]: {
        width: '469px',
      },
    },
    aboutIntroWrapper: {
      flexDirection: 'column-reverse',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
    aboutIntroText: {
      marginTop: '0',
      [theme.breakpoints.up('lg')]: {
        marginTop: '50px',
      },
    },
    halfVerticalLine: {
      marginTop: '50px',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        marginTop: '70px',
      },
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    services: {
      flexDirection: 'column',
      marginTop: '50px',
      marginBottom: '50px',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        marginTop: '70px',
        marginBottom: '70px',
      },
    },
    servicesBreaks: {
      margin: '0 20px',
      transform: 'rotate(90deg)',
      [theme.breakpoints.up('sm')]: {
        margin: '0 40px',
        transform: 'none',
      },
    },
  }));

function About() {
  const classes = useStyles();
  return (
    <Box marginBottom="50px">
      <Box
        height="100%"
        display="flex"
        justifyContent="space-between"
        className={classes.aboutIntroWrapper}
      >
        <Box marginRight="75px" textAlign="center">
          <img
            src="/about-profile.svg"
            alt="profile"
            className={classes.profileImage}
          />
        </Box>
        <Box className={classes.aboutIntroText}>
          <Box marginBottom="15px">
            <Typography variant="h1" color="primary" className={classes.header}>
              ABOUT ME
            </Typography>
          </Box>
          <hr />
          <Box marginTop="40px">
            <Typography variant="body1" color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              imperdiet dui accumsan sit amet. Rhoncus aenean vel elit
              scelerisque mauris pellentesque pulvinar pellentesque habitant.
              Convallis convallis tellus id interdum. Elementum facilisis leo
              vel fringilla est ullamcorper. Semper quis lectus nulla at. Orci
              dapibus ultrices in iaculis. Lectus magna fringilla urna porttitor
              rhoncus dolor. Vel eros donec ac odio tempor orci dapibus ultrices
              in. Nunc congue nisi vitae suscipit tellus mauris. Interdum velit
              euismod in pellentesque. Lacus laoreet non curabitur gravida arcu.
              Adipiscing elit ut aliquam purus sit amet luctus.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              imperdiet dui accumsan sit amet. Rhoncus aenean vel elit
              scelerisque mauris pellentesque pulvinar pellentesque habitant.
              Convallis convallis tellus id interdum. Elementum facilisis leo
              vel fringilla est ullamcorper. Semper quis lectus nulla at. Orci
              dapibus ultrices in iaculis. Lectus magna fringilla urna porttitor
              rhoncus dolor. Vel eros donec ac odio tempor orci dapibus ultrices
              in.
            </Typography>
            <Box
              marginLeft="70px"
              className={classes.halfVerticalLine}
            >
              <img
                src="/half-vertical-line.svg"
                alt="veritical-break"
                width={2}
                height={46}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop="50px" textAlign="center">
        <Typography variant="h1" color="primary" className={classes.header}>
          SERVICES
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          textAlign="left"
          className={classes.services}
        >
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.subHeader}
            >
              LOREM IPSUM
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box className={classes.servicesBreaks}>
            <img
              src="/vertical-line.svg"
              alt="veritical-break"
              width={1}
              height={97}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.subHeader}
            >
              LOREM IPSUM
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box className={classes.servicesBreaks}>
            <img
              src="/vertical-line.svg"
              alt="veritical-break"
              width={1}
              height={97}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.subHeader}
            >
              LOREM IPSUM
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/contact"
          className={classes.button}
        >
          <Typography
            variant="h2"
            color="secondary"
            className={classes.buttonText}
          >
            GET IN TOUCH
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default About;
