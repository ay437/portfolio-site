import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BlogCard from '../components/BlogCard/BlogCard';
import Layout from '../components/Layouts/Layout/Layout';
import { getSortedBlogData } from '../lib/blog';
import CloseButton from '../components/CloseButton/CloseButton';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '30px',
    },
    header: {
      fontSize: '2.1875rem',
      fontWeight: 500,
    },
    title: {
      margin: '50px 0 0 10px',
    },
    blogSection: {
      margin: '30px 0 0 0',
    },
  })
);

export default function Blog({ allBlogData }) {
  const classes = useStyles();
  return (
    <Layout title="Blog page">
      <>
        <Box className={classes.root}>
          <Box className={classes.title}>
            <CloseButton closeButton blogOrWork />
            <Typography variant="h1" color="primary" className={classes.header}>
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
