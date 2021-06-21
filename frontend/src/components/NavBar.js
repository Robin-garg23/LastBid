import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {useTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "auto",
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#ffffff",
  },
  buttons: {
      color:"#264653",
      fontWeight: 600,
      marginLeft: "9px",
      minWidth: 100
  },
  extraButtons: {
    color:"#264653",
    fontWeight: 600,
    marginLeft: "auto"
  },
  newButtons: {
      color:'red'
  },
  drawer: {
    backgroundColor: '#E76F51'
  },
  drawerItem: {
    color: "white",
  },
  drawerIcon: {
    height: "45px",
  },
}));

export default function Header({setPractice}) {
    const theme = useTheme();

  const classes = useStyles();

  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false) 

  const handleChange = (newValue) => {
	setValue(newValue);
  }
  useEffect(()=>{
    if(window.location.pathname === "/DashBoard" && value !== 0 ) setValue(0);
    if(window.location.pathname === "/Orders" && value !== 1 ) setValue(1);
    if(window.location.pathname === "/Profile" && value !== 2 ) setValue(2);
    if(window.location.pathname === "/practice" && value !== 3 ) setValue(3);
    if(window.location.pathname === "/leaderboard" && value !== 4 ) setValue(4);
    if(window.location.pathname === "/test" && value !== 5 ) setValue(5);
    if(window.location.pathname === "/resources" && value !== 6 ) setValue(6);
    if(window.location.pathname === "/doubts" && value !== 7 ) setValue(7);
    if(window.location.pathname === "/help" && value !== 8 ) setValue(8);
    if(window.location.pathname === "/setting" && value !== 9 ) setValue(9);
  }, [value]);


  const drawer = (
      <div>
        <SwipeableDrawer
      open={openDrawer} onClose={()=>setOpenDrawer(false)}
      onOpen={()=>setOpenDrawer(true)} classes={{paper: classes.drawer}} >
        <List disablePadding >
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography component={Link} to="/DashBoard">Dashboard</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography component={Link} to="/Contact">My Orders</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography>Homework</ListItemText>
          </ListItem>
          <ListItem onClick={()=>{setOpenDrawer(false);}} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography>Practice</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} divider button disableTypography>Test</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography>Resources</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography>Doubts</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography>Help</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  >
            <ListItemText className={classes.drawerItem} disableTypography>Setting</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={()=>setOpenDrawer(true)} disableRipple className={classes.drawerIconContainer} >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      </div>
  )

  const tabs = (
      
      <div>
        <Tabs value={value} onChange={handleChange} >
                <Tab disableRipple className={classes.buttons}  label="Dashboard" component={Link} to="/DashBoard" />
                <Tab disableRipple className={classes.buttons}  label="My Orders" component={Link} to="/Orders"/>
                <Tab disableRipple className={classes.buttons}  label="My Profile" component={Link} to="/Profile"/>
                {/* <Tab disableRipple className={classes.buttons}  label="Practice" />
                <Tab disableRipple className={classes.buttons}  label="Leaderboard" />
                <Tab disableRipple className={classes.buttons}  label="Test" />
                <Tab disableRipple className={classes.buttons}  label="Resources" />
                <Tab disableRipple className={classes.buttons}  label="Doubts" /> */}
                <Tab disableRipple className={classes.buttons}  label="Help" />
                <Tab disableRipple className={classes.buttons}  label="Setting" />
          </Tabs>
        
          
      </div>
      
  )


  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
        {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </div>
  );
}