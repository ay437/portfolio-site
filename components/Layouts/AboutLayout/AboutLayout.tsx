import React, { useEffect, ReactChild, ReactChildren } from 'react';
import AOS from 'aos';
import { Box } from '@material-ui/core';
import CardWrapper from '../../CardWrapper/CardWrapper';

export interface Children {
  children: ReactChild | ReactChildren;
}

export interface Name {
  name: string;
}

export default function AboutLayout(props: Name) {
  const { name } = props;

  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box data-aos="fade-in" margin="30px" height="100%">
      <CardWrapper name={name} closeButton />
    </Box>
  );
}
