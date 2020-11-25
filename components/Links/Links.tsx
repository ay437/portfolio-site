import React from 'react';
import Image from 'next/image';
import { Box } from '@material-ui/core';

export interface LinkItem {
  id: number;
  name: string;
  url: string;
  logo: string;
}

export interface LinkProps {
  links: LinkItem[];
}

function Links() {
  return (
    <Box
      borderRadius="16px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      height="100%"
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      alignItems="center"
    >
      <Box paddingTop="80px" paddingLeft="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box paddingTop="80px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box paddingTop="80px" paddingRight="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box flexBasis="100%" height="0" />
      <Box paddingBottom="80px" paddingLeft="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box paddingBottom="80px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
      <Box paddingBottom="80px" paddingRight="20px">
        <a href="https://www.linkedin.com/in/arjunpyadav/">
          <Image src="/instagram.svg" alt="LinkedIn" width={40} height={40} />
        </a>
      </Box>
    </Box>
  );
}

export default Links;
