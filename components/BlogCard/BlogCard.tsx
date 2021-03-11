import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import theme from '../../themeprovider/theme/index';
import Date from '../Date/Date';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#fff',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '8px',
      height: '100%',
      display: 'flex',
      flexBasis: '100%',
      margin: '0 10px 20px 10px',
      overflow: 'hidden',
      flexDirection: 'column',
      cursor: 'pointer',
      [theme.breakpoints.up('xs')]: {
        flexBasis: 'calc(50% - 25px)',
      },
      [theme.breakpoints.up('md')]: {
        flexBasis: 'calc(33% - 25px)',
      },
      [theme.breakpoints.up('lg')]: {
        flexBasis: 'calc(25% - 25px)',
      },
    },
    content: {
      height: '150px',
      [theme.breakpoints.up('xs')]: {
        height: '210px',
      },
      [theme.breakpoints.up('md')]: {
        height: '190px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '210px',
      },
    },
    header: {
      fontSize: '16px',
      marginBottom: '16px',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
    },
    blogIntro: {
      marginBottom: '16px',
    },
    blogImage: {
      width: '100%',
      height: '100px',
      objectFit: 'none',
      objectPosition: 'center',
      [theme.breakpoints.up('xs')]: {
        height: '150px',
      },
    },
  })
);

export interface BlogItem {
  id: string;
  date: string;
  image: string;
  title: string;
  intro: string;
}

function BlogCard({ id, title, date, image, intro }: BlogItem) {
  const classes = useStyles();
  return (
    <Link href={`/blog/${id}`}>
      <Box className={classes.root}>
        <Box display="flex" width="100%">
          <img src={image} alt="headshot" className={classes.blogImage} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          padding="20px"
          className={classes.content}
        >
          <Typography variant="h2" color="primary" className={classes.header}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            className={classes.blogIntro}
          >
            {intro}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            className={classes.blogIntro}
          >
            <Date dateString={date} />
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default BlogCard;
