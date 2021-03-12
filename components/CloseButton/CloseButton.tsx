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
  const { closeButton } = props;
  const router = useRouter();
  const href = '/';
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Box>
      <Box className={classes.close}>
        {closeButton && (
          <Link href={href} onClick={handleClick}>
            <ArrowBackIosIcon />
          </Link>
        )}
      </Box>
      <Box className={classes.closeMobile}>
        {closeButton && (
          <Link href={href} onClick={handleClick}>
            <KeyboardArrowLeftIcon />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default CloseButton;
