import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Drawer, AppBar, Toolbar, List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Login from './Login';
import MainPage from './MainPage';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Fixed Navbar
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Toolbar />
          <List>
            <ListItem button>
              <ListItemText primary="Sidebar Link 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Sidebar Link 2" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Container>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/main" component={MainPage} />
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  );
};

export default App;
