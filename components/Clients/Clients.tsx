import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import theme from '../../themeprovider/theme/index';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      padding: '24px 20px 16px',
      [theme.breakpoints.up('xs')]: {
        padding: '32px 40px',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '32px 40px',
      },
    },
    iconWrapper: {
      flexDirection: 'column',
      height: '140px',
      padding: '0',
      [theme.breakpoints.up('xs')]: {
        height: '85px',
        padding: '0 12%',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '0 22%',
      },
      [theme.breakpoints.up('md')]: {
        padding: '0 12%',
      },
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        height: 'auto',
      },
    },
    icon: {
      height: '26px',
      [theme.breakpoints.up('xs')]: {
        height: '35px',
      },
      [theme.breakpoints.up('xl')]: {
        height: '40px',
      },
    },
  }));

function Clients() {
  const classes = useStyles();
  return (
    <Box
      bgcolor="#ffffff"
      borderRadius="16px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" className={classes.header}>
        <Typography variant="h2" color="primary">
          CLIENTS
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        className={classes.iconWrapper}
      >
        <img src="/parliament.png" alt="parliament" className={classes.icon} />
        <img src="/realogy.png" alt="realogy" className={classes.icon} />
        <img src="/premierinn.png" alt="premierinn" className={classes.icon} />
        <img src="/radisson.png" alt="radisson" className={classes.icon} />
      </Box>
    </Box>
  );
}

export default Clients;
