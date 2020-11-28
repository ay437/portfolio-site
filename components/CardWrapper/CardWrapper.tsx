import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';
import CloseButton from '../CloseButton/CloseButton';
import Cover from '../Cover/Cover';
import Intro from '../Intro/Intro';
import Links from '../Links/Links';

interface PageProps {
  name: string;
  closeButton: boolean;
}

const CardWrapper: FunctionComponent<PageProps> = (props: PageProps) => {
  const { name, closeButton } = props;
  return (
    <Box height="100%">
      <CloseButton closeButton={closeButton} />
      <Box>
        {() => {
          switch (name) {
            case 'cover':
              return <Cover title="Product Developer with strong passion for UX Design" />;
            case 'intro':
              return <Intro title="Hi there, I'm Arjun 👋" />;
            case 'interest':
              return <Links />;
            case 'links':
              return <Links />;
            case 'work':
              return <Links />;
            case 'exampleContent':
              return <Links />;
            default:
              return <Links />;
          }
        }}
      </Box>
    </Box>
  );
};

export default CardWrapper;
