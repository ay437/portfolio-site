import React from 'react';
import Image from 'next/image';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
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
  root: {
    background: 'linear-gradient(100deg, #654212 35.23%, #A47F43 100.08%)',
  },
  topIcons: {
    paddingTop: '80px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '60px',
    },
  },
  bottomIcons: {
    paddingBottom: '80px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '60px',
    },
  },
  icon: {
    '&:hover': {
      filter: 'invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1)',
    },
    '&:focus': {
      filter: 'invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1)',
    },
    '&:active': {
      filter: 'invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1)',
    },
  },
}));

function Links() {
  const classes = useStyles();
  return (
    <Box
      borderRadius="16px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      height="100%"
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      alignItems="center"
      className={classes.root}
    >
      <Box className={classes.topIcons} paddingLeft="20px">
        <a href="mailto:arjun.prakash.yadav@gmail.com">
          <Image src="/gmail.svg" alt="Gmail" width={40} height={40} className={classes.icon} />
        </a>
      </Box>
      <Box className={classes.topIcons}>
        <a href="ttps://www.twitter.com">
          <Image src="/twitter.svg" alt="Twitter" width={40} height={40} className={classes.icon} />
        </a>
      </Box>
      <Box className={classes.topIcons} paddingRight="20px">
        <a href="https://www.instagram.com/arjunyv/">
          <Image src="/instagram.svg" alt="Instagram" width={40} height={40} className={classes.icon} />
        </a>
      </Box>
      <Box flexBasis="100%" height="0" />
      <Box className={classes.bottomIcons} paddingLeft="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} className={classes.icon} />
        </a>
      </Box>
      <Box className={classes.bottomIcons}>
        <a href="https://behance.com">
          <Image src="/behance.svg" alt="Behance" width={40} height={40} className={classes.icon} />
        </a>
      </Box>
      <Box className={classes.bottomIcons} paddingRight="20px">
        <a href="https://www.medium.com/">
          <Image src="/medium.svg" alt="Medium" width={40} height={40} className={classes.icon} />
        </a>
      </Box>
    </Box>
  );
}

export default Links;
