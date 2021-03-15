/* eslint-disable react/no-danger */
import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Head from 'next/head';
import theme from '../../themeprovider/theme/index';
import Layout from '../../components/Layouts/Layout/Layout';
import Date from '../../components/Date/Date';
import { getAllBlogIds, getBlogData } from '../../lib/blog';
import CloseButton from '../../components/CloseButton/CloseButton';

export interface BlogItem {
  id: string;
  date: string;
  image: string;
  title: string;
  intro: string;
  contentHtml: string;
}

export interface BlogProps {
  blogData: BlogItem;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: '300px',
      width: 'auto',
      margin: '20px',
      [theme.breakpoints.up('md')]: {
        width: '80%',
      },
    },
    content: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '85%',
      },
    },
    image: {
      right: '-50px',
      position: 'relative',
      display: 'none',
      borderRadius: '8px',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    imageMobile: {
      display: 'flex',
      borderRadius: '8px',
      marginTop: '0',
      marginRight: '15px',
      [theme.breakpoints.up('xs')]: {
        marginTop: '-55px',
        marginRight: '35px',
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

export default function Blog({ blogData }: BlogProps) {
  const classes = useStyles();
  const { id, title, date, contentHtml, image } = blogData;
  return (
    <Layout title={id}>
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <CloseButton
          closeButton
          blogOrWork
          isWorkContentPage={false}
          isBlogContentPage
        />
        <Typography variant="h1" color="primary">
          {title}
        </Typography>
        <br />
        <Box
          bgcolor="#fff"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="16px"
          height="100%"
          padding="20px"
          display="flex"
          className={classes.root}
        >
          <Box flexShrink="0" className={classes.content}>
            <Typography variant="body1" color="primary">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <br />
              <Date dateString={date} />
            </Typography>
          </Box>
          <Box>
            <img
              src={image}
              alt="headshot"
              width="300px"
              className={classes.image}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <img
            src={image}
            alt="headshot"
            width="250px"
            className={classes.imageMobile}
          />
        </Box>
      </>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
  return {
    props: {
      blogData,
    },
  };
}
