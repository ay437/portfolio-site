import React, {
  useEffect, ReactChild, ReactChildren,
} from 'react';
import AOS from 'aos';
import { Box } from '@material-ui/core';
import CardWrapper from '../Card/CardWrapper';

export interface Children {
  children: ReactChild | ReactChildren;
}

export interface Name {
  name: string;
}

export default function ContentLayout(props: Name) {
  const { name } = props;

  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box
      data-aos="fade-in"
      margin="30px"
      height="100vw"
      maxHeight="1000px"
    >
      <CardWrapper name={name} closeButton />
    </Box>
  );
}
