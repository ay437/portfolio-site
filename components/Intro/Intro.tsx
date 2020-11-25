import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Image from 'next/image';

function Intro(props) {
  const { title } = props;
  return (
    <Box
      bgcolor="#2A3036"
      border="2px solid #2A3036"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Box display="flex" padding="0 20px">
        <Image
          src="/logo-white.png"
          alt="logo-white"
          width={220}
          height={80}
        />
      </Box>
      <Box display="flex" padding="0 20px">
        <Typography variant="h1" color="secondary">{title}</Typography>
      </Box>
    </Box>
  );
}

export default Intro;
