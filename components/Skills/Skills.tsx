import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() => createStyles({
  root: {
    background: 'linear-gradient(110deg, #808387 44.05%, rgba(175, 181, 191, 0) 99.64%);',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  header: {
    padding: '20px 24px',
    [theme.breakpoints.up('xs')]: {
      padding: '32px 24px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '32px 24px 48px',
    },
  },
  skillsDesktop: {
    justifyContent: "space-evenly",
    padding: "0 0 16px",
    [theme.breakpoints.up('xs')]: {
      padding: "0 24px 16px",
    },
  },
  hideMobile: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  showMobile: {
    display: 'flex',
    justifyContent: "space-evenly",
    padding: "0",
    [theme.breakpoints.up('xs')]: {
      padding: "0",
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <Box 
      borderRadius="16px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      className={classes.root}
    >
      <Box display="flex" className={classes.header}>
            <Typography variant="h2" color="primary">LET'S TALK SKILLS</Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        className={classes.skillsDesktop}
      >
        <Image src="/react.svg" alt="react" width={57} height={53} />
        <Image src="/javascript-4.svg" alt="javascript" width={40} height={51} />
        <Image src="/typescript.svg" alt="typescript" width={51} height={53} />
        <Box className={classes.hideMobile}>
          <Image src="/nodejs.svg" alt="nodejs" width={84} height={45} />
        </Box>
        <Box className={classes.hideMobile}>
          <Image src="/graphql.svg" alt="graphql" width={52} height={54} className={classes.hideMobile}/>
        </Box>
        <Box className={classes.hideMobile}>
          <Image src="/gatsby.svg" alt="gatsby" width={52} height={52} className={classes.hideMobile}/>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        className={classes.showMobile}
      >
        <Image src="/nodejs.svg" alt="nodejs" width={84} height={45} className={classes.showMobile}/>
        <Box marginLeft="-24px">
          <Image src="/graphql.svg" alt="graphql" width={52} height={54} className={classes.showMobile}/>
        </Box>
        <Image src="/gatsby.svg" alt="gatsby" width={52} height={52} className={classes.showMobile}/>
      </Box>
    </Box>
  );
}

export default Skills;
