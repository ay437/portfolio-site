import React from 'react';
import Image from 'next/image';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(() => createStyles({
  topIcons: {
    paddingTop: '80px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '80px',
    },
  },
  bottomIcons: {
    paddingBottom: '80px',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '80px',
    },
  },
}));

function Links() {
  const classes = useStyles();
  return (
    <Box
      bgcolor="white"
      borderRadius="16px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      height="100%"
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      alignItems="center"
    >
      <Box className={classes.topIcons} paddingLeft="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box className={classes.topIcons}>
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box className={classes.topIcons} paddingRight="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box flexBasis="100%" height="0" />
      <Box className={classes.bottomIcons} paddingLeft="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box className={classes.bottomIcons}>
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box className={classes.bottomIcons} paddingRight="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
    </Box>
  );
}

export default Links;
