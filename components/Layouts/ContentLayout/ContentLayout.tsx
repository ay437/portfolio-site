import React, { useEffect, ReactChild, ReactChildren } from 'react';
import AOS from 'aos';
import Box from '@material-ui/core/Box';
import CardWrapper from '../../CardWrapper/CardWrapper';

export interface Children {
  children: ReactChild | ReactChildren;
}

export interface Name {
  name: string;
}

export default function BlogLayout(props: Name) {
  const { name } = props;

  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box data-aos="fade-in" margin="30px 30px 60px">
      <CardWrapper name={name} backButton blogOrWork />
    </Box>
  );
}
