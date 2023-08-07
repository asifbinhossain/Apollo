import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useAuthenticator } from "@aws-amplify/ui-react";
import TopNavigationTab from "./TopNavigationTab";
import { usePopover } from "@/hooks";
import AccountPopover from "./AccountPopover";

interface HeaderProps {
    title: string;
    onDrawerToggle: () => void;
    onNavOpen: () => void;
    topNavigationTab?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
    const { onDrawerToggle, onNavOpen, topNavigationTab, title } = props;
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const accountPopover = usePopover();
    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid
                            sx={{ display: { sm: "none", xs: "block" } }}
                            item
                        >
                            {/* Burger menu for items */}

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            {/* Welcome message to the user at the top */}

                            <Typography>
                                Welcome, {user.attributes?.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* Display Notifications */}

                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            {/* Avatatar Popover with account info at the corner */}

                            <IconButton color="inherit" sx={{ p: 0.5 }}>
                                <Avatar
                                    onClick={() => accountPopover.handleOpen()}
                                    ref={accountPopover.anchorRef}
                                    sx={{
                                        cursor: "pointer",
                                        height: 40,
                                        width: 40,
                                    }}
                                    src="/static/images/avatar/1.jpg"
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            {/* Title of the page from side navigation*/}

                            <Typography
                                color="inherit"
                                variant="h5"
                                component="h1"
                            >
                                {title}
                            </Typography>
                        </Grid>
                        {/* Help btn to show userful information about the page or product */}

                        <Grid item>
                            <Tooltip title="Help">
                                <IconButton color="inherit">
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* Popover with Avatar to display user info */}

            <AccountPopover
                anchorEl={accountPopover.anchorRef.current}
                open={accountPopover.open}
                onClose={accountPopover.handleClose}
            />
            {/* Top Navigation Tabs for this page*/}
            {topNavigationTab}
            {/* <TopNavigationTab /> */}
        </React.Fragment>
    );
}
