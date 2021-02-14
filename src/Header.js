import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: 0.5,
  },
  backgroundColor: {
    backgroundColor: '#131313',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    headerOptions: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-evenly'
    }
  },
}));

const Header = ({history}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItem = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.backgroundColor} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            KZ
          </Typography>
          {isMobile ? (
            <div>
              <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuItem('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuItem('/projects')}>Projects</MenuItem>
                <MenuItem onClick={() => handleMenuItem('/contact')}>Contact</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button color='inherit' onClick={() => handleMenuItem('/')}>Home</Button>
              <Button color='inherit' onClick={() => handleMenuItem('/projects')}>Projects</Button>
              <Button color='inherit' onClick={() => handleMenuItem('/contact')}>Contact</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Header);