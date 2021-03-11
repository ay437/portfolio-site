import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router';

interface CloseButtonProps {
  closeButton: boolean;
}

const CloseButton = (props: CloseButtonProps) => {
  const { closeButton } = props;
  const router = useRouter();
  const href = '/';
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Box position="absolute" right="10px" top="10px">
      {closeButton && (
        <Link href={href} onClick={handleClick}>
          x
        </Link>
      )}
    </Box>
  );
};

export default CloseButton;
