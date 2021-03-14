import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BlogCard from '../components/BlogCard/BlogCard';
import Layout from '../components/Layouts/Layout/Layout';
import { getSortedWorkData } from '../lib/work';
import CloseButton from '../components/CloseButton/CloseButton';
import theme from '../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '30px',
    },
    title: {
      margin: '50px 0 0 10px',
    },
    header: {
      fontSize: '1.5rem',
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.1875rem',
      },
    },
    workSection: {
      margin: '30px 0 0 0',
    },
  })
);

export default function Work({ allWorkData }) {
  const classes = useStyles();
  return (
    <Layout title="Work page">
      <>
        <Box className={classes.root}>
          <Box className={classes.title}>
            <CloseButton closeButton blogOrWork />
            <Typography variant="h1" color="primary" className={classes.header}>
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
