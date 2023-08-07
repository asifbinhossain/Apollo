import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from "@mui/icons-material/Store";
import HomeIcon from "@mui/icons-material/Home";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { SIDE_NAV_CATEGORIES } from "../components/SideNavigationCategories";
import SideNavItem from "./SideNavItem";
import { usePathname } from "next/navigation";
import path from "path";

const item = {
    py: "2px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
        bgcolor: "rgba(255, 255, 255, 0.08)",
    },
};

const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
};

export default function SideNavigation(props: DrawerProps) {
    const { ...other } = props;
    const sideNavCategories = SIDE_NAV_CATEGORIES;
    const pathname = usePathname();
    const { signOut } = useAuthenticator((context) => [context.signOut]);

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem
                    sx={{
                        ...item,
                        ...itemCategory,
                        fontSize: 22,
                        color: "#fff",
                    }}
                >
                    <ListItemIcon>
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText>Product Name</ListItemText>
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Project Overview</ListItemText>
                </ListItem>
                {sideNavCategories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: "#101F33" }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: "#fff" }}>
                                {id}
                            </ListItemText>
                        </ListItem>
                        {/* {children.map(({ id: childId, icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <ListItemButton selected={active} sx={item}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))} */}
                        {children.map((item) => {
                            const active = item.path
                                ? pathname === item.path
                                : false;

                            return (
                                <SideNavItem
                                    active={active}
                                    disabled={item.disabled}
                                    external={item.external}
                                    icon={item.icon}
                                    key={item.id}
                                    path={item.path}
                                    id={item.id}
                                />
                            );
                        })}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
