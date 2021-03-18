import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import theme from '../themeprovider/theme/index';
import ContentLayout from '../components/Layouts/ContentLayout/ContentLayout';
import Layout from '../components/Layouts/Layout/Layout';
import Links from '../components/Links/Links';

const useStyles = makeStyles(() =>
  createStyles({
    linkPositionWrapper: {
      margin: '-47px auto 50px',
      [theme.breakpoints.up('sm')]: {
        margin: '-150px auto 100px',
      },
      [theme.breakpoints.up('md')]: {
        margin: '-75px auto 100px',
      },
    },
    linkWrapper: {
      float: 'none',
      width: '220px',
      height: '240px',
      [theme.breakpoints.up('xs')]: {
        width: '280px',
        height: '260px',
      },
      [theme.breakpoints.up('sm')]: {
        float: 'right',
        width: '255px',
        height: '214px',
      },
      [theme.breakpoints.up('md')]: {
        margin: '0px -4px 0px 40px',
      },
      [theme.breakpoints.up('xl')]: {
        margin: '0px -27px 0px 40px',
      },
    },
  }));

function Contact() {
  const classes = useStyles();
  return (
    <Layout title="Contact me">
      <>
        <ContentLayout name="contact me" />
        <br />
        <Box
          display="inline-block"
          textAlign="center"
          width="100%"
          position="relative"
          className={classes.linkPositionWrapper}
        >
          <Box display="inline-block" className={classes.linkWrapper}>
            <Links />
          </Box>
        </Box>
      </>
    </Layout>
  );
}

export default Contact;
