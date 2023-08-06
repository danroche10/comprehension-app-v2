import React, { Fragment, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Tooltip,
  Divider,
  Box,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import MenuIcon from "@mui/icons-material/Menu";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SideDrawer from "./SideDrawer";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  sideBarMenuItems: {
    color: "white;",
  },
  Drawer: {
    width: "100px",
  },
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  appBarToolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 24,
    width: 24,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
    },
  },
  drawerPaper: {
    width: "250px",
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.common.black,
  },
  smBordered: {
    [theme.breakpoints.down("sm")]: {
      borderRadius: "50% !important",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  iconListItem: {
    width: "auto",
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
  },
  justifyCenter: {
    justifyContent: "center",
  },
  permanentDrawerListItem: {
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

function NavBar(props) {
  const { selectedTab, classes, theme } = props;
  // Will be use to make website more accessible by screen readers
  const links = useRef([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  const openMobileDrawer = useCallback(() => {
    setIsMobileOpen(true);
  }, [setIsMobileOpen]);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileOpen(false);
  }, [setIsMobileOpen]);

  const openDrawer = useCallback(() => {
    setIsSideDrawerOpen(true);
  }, [setIsSideDrawerOpen]);

  const closeDrawer = useCallback(() => {
    setIsSideDrawerOpen(false);
  }, [setIsSideDrawerOpen]);

  const menuItems = [
    {
      link: "/c/dashboard",
      name: "Dashboard",
      onClick: closeMobileDrawer,
      desktop: <div className={classes.sideBarMenuItems}>Dashboard</div>,
    },
    {
      link: "/c/subscription",
      name: "Subscription",
      onClick: closeMobileDrawer,

      desktop: <div className={classes.sideBarMenuItems}>Subscription</div>,
    },
    {
      link: "/",
      name: "Logout",
      desktop: <div className={classes.sideBarMenuItems}>Log out</div>,
    },
  ];

  const resourceMenuItems = [
    {
      link: "/c/app",
      name: "Resources",
      onClick: closeMobileDrawer,
      desktop: <div className={classes.sideBarMenuItems}>Resources</div>,
    },
  ];

  return (
    <Fragment>
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar className={classes.appBarToolbar}>
          <Box display='flex' alignItems='center'>
            <Hidden smUp>
              <Box mr={1}>
                <IconButton
                  aria-label='Open Navigation'
                  onClick={openMobileDrawer}
                  color='primary'
                  size='large'
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Hidden>
            <Hidden smDown>
              <Typography
                variant='h4'
                className={classes.brandText}
                display='inline'
                color='primary'
              >
                Comp
              </Typography>
              <Typography
                variant='h4'
                className={classes.brandText}
                display='inline'
                color='secondary'
              >
                Va
              </Typography>
            </Hidden>
          </Box>
          <Box
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
            width='100%'
          >
            <ListItem
              disableGutters
              className={classNames(classes.iconListItem, classes.smBordered)}
            >
              <Avatar
                alt='profile picture'
                src={`${process.env.PUBLIC_URL}/images/logged_in/profilePicture.jpg`}
                className={classNames(classes.accountAvatar)}
              />
              {isWidthUpSm && (
                <ListItemText
                  className={classes.username}
                  primary={
                    <Typography color='textPrimary'>Username</Typography>
                  }
                />
              )}
            </ListItem>
          </Box>
          <IconButton
            onClick={openDrawer}
            color='primary'
            aria-label='Open Sidedrawer'
            size='large'
          >
            <SupervisorAccountIcon />
          </IconButton>
          <SideDrawer open={isSideDrawerOpen} onClose={closeDrawer} />
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Drawer //  both drawers can be combined into one for performance
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
          open={false}
        >
          <List>
            {menuItems.map((element, index) => (
              <Link
                to={element.link}
                className={classes.menuLink}
                onClick={element.onClick}
                key={index}
                ref={(node) => {
                  links.current[index] = node;
                }}
              >
                <Tooltip
                  title={element.name}
                  placement='right'
                  key={element.name}
                >
                  <ListItem
                    selected={selectedTab === element.name}
                    button
                    divider={index !== menuItems.length - 1}
                    className={classes.permanentDrawerListItem}
                    onClick={() => {
                      links.current[index].click();
                    }}
                    aria-label={
                      element.name === "Logout"
                        ? "Logout"
                        : `Go to ${element.name}`
                    }
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                      {element.desktop}
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
              </Link>
            ))}
          </List>
          <Divider style={{ backgroundColor: "white" }} />
          <List>
            {resourceMenuItems.map((element, index) => (
              <Link
                to={element.link}
                className={classes.menuLink}
                onClick={element.onClick}
                key={index}
                ref={(node) => {
                  links.current[index] = node;
                }}
              >
                <Tooltip
                  title={element.name}
                  placement='right'
                  key={element.name}
                >
                  <ListItem
                    selected={selectedTab === element.name}
                    button
                    divider={index !== menuItems.length - 1}
                    className={classes.permanentDrawerListItem}
                    onClick={() => {
                      links.current[index].click();
                    }}
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                      {element.desktop}
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
              </Link>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <NavigationDrawer
        menuItems={menuItems.map((element) => ({
          link: element.link,
          name: element.name,
          onClick: element.onClick,
        }))}
        anchor='left'
        open={isMobileOpen}
        selectedItem={selectedTab}
        onClose={closeMobileDrawer}
      />
    </Fragment>
  );
}

NavBar.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);
