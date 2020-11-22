import React, { FunctionComponent } from 'react';
import { Typography, Box } from '@material-ui/core';
import Intro from '../Intro/Intro';
import Links from '../Links/Links';
import LinkData from './LinkData';
import SkillTable from '../SkillTable/SkillTable';

interface PageProps {
  name: string;
}

const CardWrapper: FunctionComponent<PageProps> = (props) => {
  const { name } = props;
  return (
    <Box>
      {() => {
        switch (name) {
          case 'info':
            return <Intro title="Web developer" />;
          case 'interest':
            return <Typography variant="h2">Interests</Typography>;
          case 'links':
            return <Links links={LinkData} />;
          case 'work':
            return <SkillTable />;
          default:
            return <Typography variant="h2">New Section</Typography>;
        }
      }}
    </Box>
  );
};

CardWrapper.defaultProps = {
  name: 'info',
};

export default CardWrapper;
