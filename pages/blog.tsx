/* eslint-disable react/prop-types */
import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BlogCard from '../components/BlogCard/BlogCard';
import Layout from '../components/Layouts/Layout/Layout';
import { getSortedBlogData } from '../lib/blog';
import BackButton from '../components/BackButton/BackButton';
import theme from '../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '30px',
    },
    header: {
      fontSize: '1.5rem',
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.1875rem',
      },
    },
    title: {
      margin: '50px 0 0 10px',
    },
    blogSection: {
      margin: '30px 0 0 0',
    },
  }));

export default function Blog({ allBlogData }) {
  const classes = useStyles();
  return (
    <Layout title="Blog page">
      <>
        <Box className={classes.root}>
          <Box className={classes.title}>
            <BackButton
              backButton
              blogOrWork
              isBlogContentPage={false}
              isWorkContentPage={false}
            />
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
            {allBlogData.map(({
              id, title, intro, date, image,
            }) => (
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
