import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import theme from '../../themeprovider/theme/index';
import DateYearOnly from '../Date/DateYearOnly';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#fff',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '8px',
      height: '100%',
      display: 'flex',
      margin: '0 10px 20px 10px',
      overflow: 'hidden',
      flexDirection: 'column',
      cursor: 'pointer',
      [theme.breakpoints.up('xs')]: {
        flexDirection: 'row',
      },
    },
    content: {
      height: '170px',
      flex: '1 0 50%',
      [theme.breakpoints.up('xs')]: {
        height: '189px',
      },
      [theme.breakpoints.up('sm')]: {
        height: '174px',
      },
      [theme.breakpoints.up('md')]: {
        height: '197px',
      },
      [theme.breakpoints.up('xl')]: {
        height: '146px',
      },
    },
    header: {
      fontSize: '1rem',
      marginBottom: '16px',
      lineHeight: '1.5',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.1875rem',
      },
    },
    workIntro: {
      marginBottom: '16px',
    },
    workImage: {
      width: '100%',
      height: '100px',
      flex: '1 0 50%',
      objectFit: 'none',
      objectPosition: 'center',
      [theme.breakpoints.up('xs')]: {
        height: '150px',
      },
    },
  }));

export interface WorkItem {
  id: string;
  date: string;
  image: string;
  title: string;
  intro: string;
}

function WorkCard({
  id, title, date, image, intro,
}: WorkItem) {
  const classes = useStyles();
  return (
    <Link href={`/work/${id}`}>
      <Box className={classes.root}>
        <Box display="flex" width="100%">
          <img src={image} alt="headshot" className={classes.workImage} />
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
            variant="body2"
            color="primary"
            className={classes.workIntro}
          >
            {intro}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            className={classes.workIntro}
          >
            <DateYearOnly dateString={date} />
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default WorkCard;
