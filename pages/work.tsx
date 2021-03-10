import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../themeprovider/theme/index';
import BlogCard from '../components/BlogCard/BlogCard';
import Layout from '../components/Layouts/Layout/Layout';
import { getSortedWorkData } from '../lib/work';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '50px 0 0 10px',
      [theme.breakpoints.up('md')]: {
        margin: '50px 0 0 110px',
      },
    },
    workSection: {
      margin: '30px 0 0 0',
      [theme.breakpoints.up('md')]: {
        margin: '30px 100px 0',
      },
    },
  })
);

export default function Work({ allWorkData }) {
  const classes = useStyles();
  return (
    <Layout title="Work page">
      <>
        <Box className={classes.root}>
          <Typography variant="h1" color="primary">
            Work
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          className={classes.workSection}
        >
          {allWorkData.map(({ id, title, intro, date, image }) => (
            <BlogCard
              id={id}
              title={title}
              date={date}
              image={image}
              intro={intro}
            />
          ))}
        </Box>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const allWorkData = getSortedWorkData();
  return {
    props: {
      allWorkData,
    },
  };
}
