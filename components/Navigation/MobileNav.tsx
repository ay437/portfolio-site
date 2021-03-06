import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '-75px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0',
      paddingBottom: '0',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  listItemButton: {
    '&.active': {
      '& h3': {
        color: '#1607ba',
        fontWeight: 600,
      },
    },
    '&:hover': {
      '& h3': {
        color: '#1607ba',
        fontWeight: 600,
        position: 'relative',
      },
    },
  },
  listItemText: {
    fontWeight: 600,
    fontSize: '18px',
    color: '#000',
    margin: '10px 20px',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#E5E5E5',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
    color: '#09006B',
  },
}));

function MobileNav() {
  const router = useRouter();
  // const categories = ['Home', 'About', 'Work', 'Blog', 'Contact'];
  const categories = ['Home', 'About', 'Contact'];
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
        {categories.map((text) => (
          <Link href={`/${text.toLowerCase()}`}>
            <ListItem
              button
              key={text}
              className={`${classes.listItemButton} ${
                router.pathname === `/${text.toLowerCase()}` ? 'active' : ''
              }`}
            >
              <Typography variant="h3" className={classes.listItemText}>
                {text}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default MobileNav;
