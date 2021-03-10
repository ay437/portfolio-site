/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    headerContainer: {
      display: 'flex',
      padding: '24px 24px 16px',
      [theme.breakpoints.up('sm')]: {
        padding: '32px 24px 20px',
      },
    },
    sliderContainer: {
      height: '45%',
      [theme.breakpoints.up('sm')]: {
        height: '40%',
      },
      [theme.breakpoints.up('md')]: {
        height: '35%',
      },
      [theme.breakpoints.up('lg')]: {
        height: '45%',
      },
      [theme.breakpoints.up('xl')]: {
        height: '35%',
      },
    },
    shortText: {
      display: 'block',
      [theme.breakpoints.up('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    longText: {
      display: 'none',
      [theme.breakpoints.up('xs')]: {
        display: 'block',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'block',
      },
    },
  })
);

function Testimonials() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <Box
      bgcolor="#ffffff"
      borderRadius="16px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box className={classes.headerContainer}>
        <Typography variant="h2" color="primary">
          TESTIMONIALS
        </Typography>
      </Box>
      <Box display="flex" padding="0 24px" className={classes.sliderContainer}>
        <Slider {...settings}>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.shortText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit...“
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              className={classes.longText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.“
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Person’s name
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.shortText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit...“
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              className={classes.longText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.“
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Person’s name
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.shortText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit...“
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              className={classes.longText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.“
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Person’s name
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.shortText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit...“
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              className={classes.longText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.“
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Person’s name
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.shortText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit...“
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              className={classes.longText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.“
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Person’s name
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="primary"
              className={classes.shortText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit...“
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              className={classes.longText}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.“
            </Typography>
            <br />
            <Typography variant="body1" color="primary">
              Person’s name
            </Typography>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default Testimonials;
