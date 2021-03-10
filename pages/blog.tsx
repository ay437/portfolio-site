import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../themeprovider/theme/index';
import BlogCard from '../components/BlogCard/BlogCard';
import Layout from '../components/Layouts/Layout/Layout';
import { getSortedBlogData } from '../lib/blog';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '50px 0 0 10px',
      [theme.breakpoints.up('md')]: {
        margin: '50px 0 0 110px',
      },
    },
    blogSection: {
      margin: '30px 0 0 0',
      [theme.breakpoints.up('md')]: {
        margin: '30px 100px 0',
      },
    },
  })
);

export default function Blog({ allBlogData }) {
  const classes = useStyles();
  return (
    <Layout title="Blog page">
      <>
        <Box className={classes.root}>
          <Typography variant="h1" color="primary">
            Blog
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          className={classes.blogSection}
        >
          {allBlogData.map(({ id, title, intro, date, image }) => (
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
  const allBlogData = getSortedBlogData();
  return {
    props: {
      allBlogData,
    },
  };
}
