import React, { useEffect, ReactChild, ReactChildren } from 'react';
import AOS from 'aos';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../themeprovider/theme';
import CardWrapper from '../../CardWrapper/CardWrapper';

export interface Children {
  children: ReactChild | ReactChildren;
}

export interface Name {
  name: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '150vw',
      [theme.breakpoints.up('xs')]: {
        height: '110vw',
      },
      [theme.breakpoints.up('sm')]: {
        height: '100vw',
      },
    },
  })
);

export default function ContentLayout(props: Name) {
  const classes = useStyles();
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
      className={classes.root}
      maxHeight="1000px"
    >
      <CardWrapper name={name} closeButton />
    </Box>
  );
}
