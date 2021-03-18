/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router';
import theme from '../../themeprovider/theme/index';

interface BackButtonProps {
  backButton: boolean;
  blogOrWork?: boolean;
  isBlogContentPage?: boolean;
  isWorkContentPage?: boolean;
}

const useStyles = makeStyles((blogOrWork) =>
  createStyles({
    back: {
      position: blogOrWork ? 'relative' : 'absolute',
      left: blogOrWork ? '-40px' : '-30px',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        top: '200px',
      },
      [theme.breakpoints.up('md')]: {
        top: '400px',
      },
    },
    backMobile: {
      position: blogOrWork ? 'relative' : 'absolute',
      left: '-25px',
      display: 'block',
      top: '-25px',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    backIcon: {
      color: '#2A3036',
      '&:hover': {
        color: '#1607ba',
      },
    },
  }));

const BackButton = (props: BackButtonProps) => {
  const classes = useStyles();
  const { backButton, isBlogContentPage, isWorkContentPage } = props;
  const router = useRouter();
  const hrefHome = '/';
  const hrefBlog = '/blog';
  const hrefWork = '/work';
  const handleClick = (e) => {
    e.preventDefault();
    if (isBlogContentPage) {
      router.push(hrefBlog);
    } else if (isWorkContentPage) {
      router.push(hrefWork);
    } else {
      router.push(hrefHome);
    }
  };
  return (
    <Box>
      <Box className={classes.back}>
        {backButton && (
          <Link href={hrefHome || hrefBlog || hrefWork} onClick={handleClick}>
            <ArrowBackIosIcon className={classes.backIcon} />
          </Link>
        )}
      </Box>
      <Box className={classes.backMobile}>
        {backButton && (
          <Link href={hrefHome || hrefBlog || hrefWork} onClick={handleClick}>
            <KeyboardArrowLeftIcon className={classes.backIcon} />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default BackButton;
