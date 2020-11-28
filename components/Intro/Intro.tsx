import React from 'react';
import { Typography, Box, Link } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  hoverStyle: {
    '&:hover': {
      boxShadow: '12px 10px 22px 0px #CCE0DA',
    },
  },
}));

function Intro(props) {
  const { title } = props;
  const classes = useStyles();
  return (
    <Link href="/example-content" underline="none">
      <Box
        bgcolor="white"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="16px"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        className={classes.hoverStyle}
      >
        <Box padding="0 20px">
          <Typography variant="h1" color="primary">{title}</Typography>
        </Box>
        <Box padding="20px 20px">
          <Typography variant="body1" color="primary">I’m a Front End Developer with skills ranging across React, Javascript, Node and UX.</Typography>
        </Box>
        <Box padding="10px 20px">
          <Typography variant="body1" color="primary">Based in London.</Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default Intro;
