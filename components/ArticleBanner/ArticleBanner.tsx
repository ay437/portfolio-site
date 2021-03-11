import React from 'react';
import Link from 'next/link';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    articleBannerWrapper: {
      cursor: 'pointer',
    },
    articleWrapper: {
      padding: '20px',
      [theme.breakpoints.up('xs')]: {
        padding: '40px 40px 20px',
      },
    },
    articleImage: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: "url('/article-homepage.jpeg')",
    },
    articleButton: {
      backgroundColor: '#ffffff',
      marginBottom: '16px',
      '&:hover': {
        backgroundColor: '#e5e5e5',
      },
      '&:focus': {
        backgroundColor: '#e5e5e5',
      },
      '&:active': {
        backgroundColor: '#e5e5e5',
      },
    },
    articleButtonText: {
      fontSize: '16px',
    },
    articleHeading: {
      width: '210px',
      fontSize: '30px',
    },
  })
);

function ArticleBanner() {
  const classes = useStyles();
  return (
    <Link href="/blog">
      <Box
        borderRadius="16px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        height="100%"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        alignItems="center"
        width="100%"
        overflow="auto"
        className={classes.articleBannerWrapper}
      >
        <Box
          className={classes.articleImage}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Box className={classes.articleWrapper}>
            <Button className={classes.articleButton}>
              <Typography
                variant="h4"
                color="primary"
                className={classes.articleButtonText}
              >
                ARTICLE
              </Typography>
            </Button>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.articleHeading}
            >
              The future of creative coding
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default ArticleBanner;
