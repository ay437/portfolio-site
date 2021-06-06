/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    headerContainer: {
      display: 'flex',
      padding: '24px 20px 16px',
      [theme.breakpoints.up('xs')]: {
        padding: '24px 40px 16px',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '32px 40px 20px',
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
      fontStyle: 'italic',
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
      fontStyle: 'italic',
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
              variant="body2"
              color="primary"
              className={classes.shortText}
            >
              “A strong frontend developer with a broad depth of knowledge...“
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={classes.longText}
            >
              “A strong frontend developer with a broad depth of knowledge of
              tech skills using various frameworks.“
            </Typography>
            <br />
            <Typography variant="caption" color="primary">
              Rufus Honor, Tech Lead at Premier Inn
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="primary"
              className={classes.shortText}
            >
              “Arjun is approachable, collaborative...“
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={classes.longText}
            >
              “Arjun is approachable, collaborative with great communication,
              offering alternatives to designs.“
            </Typography>
            <br />
            <Typography variant="caption" color="primary">
              Sophie Mitchell, UX Lead at Premier Inn
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="primary"
              className={classes.shortText}
            >
              “Arjun worked well with stakeholders...“
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={classes.longText}
            >
              “Arjun worked well with some stakeholders who can be really
              challenging &amp; he was patient.“
            </Typography>
            <br />
            <Typography variant="caption" color="primary">
              Richard Smart, Delivery Manager
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="primary"
              className={classes.shortText}
            >
              “He's quick on his feet and great at helping us complete...“
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={classes.longText}
            >
              “He's quick on his feet and great at helping us complete tasks on
              time.“
            </Typography>
            <br />
            <Typography variant="caption" color="primary">
              Brian Li, Senior Software Engineer
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="primary"
              className={classes.shortText}
            >
              “He came on board and was able to quickly get a grasp...“
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={classes.longText}
            >
              “He came on board and was able to quickly get a grasp on the tech
              and ways of working.“
            </Typography>
            <br />
            <Typography variant="caption" color="primary">
              Niru Sharma, Product Analyst at AND Digital
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="primary"
              className={classes.shortText}
            >
              “Every item he's has picked up was delivered to a high...“
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={classes.longText}
            >
              “Every item he's has picked up was delivered to a high standard,
              often beyond what’s been asked.“
            </Typography>
            <br />
            <Typography variant="caption" color="primary">
              Annette Pearcy, Lead UI Designer
            </Typography>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default Testimonials;
