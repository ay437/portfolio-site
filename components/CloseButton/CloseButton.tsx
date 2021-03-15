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

interface CloseButtonProps {
  closeButton: boolean;
  blogOrWork?: boolean;
  isBlogContentPage?: boolean;
  isWorkContentPage?: boolean;
}

const useStyles = makeStyles((blogOrWork) =>
  createStyles({
    close: {
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
    closeMobile: {
      position: blogOrWork ? 'relative' : 'absolute',
      left: '-25px',
      display: 'block',
      top: '-25px',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
);

const CloseButton = (props: CloseButtonProps) => {
  const classes = useStyles();
  const { closeButton, isBlogContentPage, isWorkContentPage } = props;
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
      <Box className={classes.close}>
        {closeButton && (
          <Link href={hrefHome || hrefBlog || hrefWork} onClick={handleClick}>
            <ArrowBackIosIcon />
          </Link>
        )}
      </Box>
      <Box className={classes.closeMobile}>
        {closeButton && (
          <Link href={hrefHome || hrefBlog || hrefWork} onClick={handleClick}>
            <KeyboardArrowLeftIcon />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default CloseButton;
