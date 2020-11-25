import React, { FunctionComponent } from 'react';
import { Typography, Box } from '@material-ui/core';
import Cover from '../Cover/Cover';
import Intro from '../Intro/Intro';
import Links from '../Links/Links';
import SkillTable from '../SkillTable/SkillTable';

interface PageProps {
  name: string;
}

const CardWrapper: FunctionComponent<PageProps> = (props: PageProps) => {
  const { name } = props;
  return (
    <Box height="100%">
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
          default:
            return <Typography variant="h1">New Section</Typography>;
        }
      }}
    </Box>
  );
};

export default CardWrapper;
