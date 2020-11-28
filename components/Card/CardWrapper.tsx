import React, { FunctionComponent } from 'react';
import { Typography, Box } from '@material-ui/core';
import CloseButton from '../CloseButton/CloseButton';
import Cover from '../Cover/Cover';
import Intro from '../Intro/Intro';
import Links from '../Links/Links';
import SkillTable from '../SkillTable/SkillTable';

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
              return <Typography variant="h1">Interests</Typography>;
            case 'links':
              return <Links />;
            case 'work':
              return <SkillTable />;
            case 'exampleContent':
              return <Intro title="Hi there, I'm Arjun 👋" />;
            default:
              return <Typography variant="h1">New Section</Typography>;
          }
        }}
      </Box>
    </Box>
  );
};

export default CardWrapper;
