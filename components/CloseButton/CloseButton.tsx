import React from 'react';
import { Box, Link } from '@material-ui/core';
import { useRouter } from 'next/router';

interface PageProps {
  closeButton: boolean;
}

const CloseButton = (props: PageProps) => {
  const { closeButton } = props;
  const router = useRouter();
  const href = '/';
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Box position="absolute" right="10px" top="10px">
      {
        closeButton && (
        <Link href={href} onClick={handleClick}>
          x
        </Link>
        )
      }
    </Box>
  );
};

export default CloseButton;
