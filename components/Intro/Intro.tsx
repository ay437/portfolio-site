import React from 'react';
import { Typography, Box } from '@material-ui/core';

function Intro(props) {
  const { title } = props;
  return (
    <Box
      bgcolor="white"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
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
  );
}

export default Intro;
