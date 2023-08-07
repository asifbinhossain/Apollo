import { Inter } from "@next/font/google";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { SideNavigation, Header, Copyright } from "../components";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import * as React from "react";
import theme from "@/theme";
const inter = Inter({ subsets: ["latin"] });

const drawerWidth = 256;

interface DashboardLayoutProps {
    headerTitle: string;
    children: React.ReactNode;
    topNavigationTab?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    headerTitle,
    children,
    topNavigationTab,
}) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

    const pathname = usePathname();
    const [openNav, setOpenNav] = useState(false);

    const handlePathnameChange = useCallback(() => {
        if (openNav) {
            setOpenNav(false);
        }
    }, [openNav]);

    useEffect(() => {
        handlePathnameChange();
    }, [pathname]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <React.Fragment>
            <Box sx={{ display: "flex", minHeight: "100vh" }}>
                <CssBaseline />
                {/* Side Navigation Tab */}

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    {isSmUp ? null : (
                        <SideNavigation
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    )}
                    <SideNavigation
                        PaperProps={{ style: { width: drawerWidth } }}
                        sx={{ display: { sm: "block", xs: "none" } }}
                        onClose={() => setOpenNav(false)}
                        open={openNav}
                    />
                </Box>
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Header
                        title={headerTitle}
                        onDrawerToggle={handleDrawerToggle}
                        onNavOpen={() => setOpenNav(true)}
                        topNavigationTab={topNavigationTab}
                    />
                    {/* Content for the selected page */}

                    <Box
                        component="main"
                        sx={{ flex: 1, py: 2, px: 2, bgcolor: "#eaeff1" }}
                    >
                        {children}
                    </Box>
                    {/* Copyright footer for the website */}

                    <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
                        <Copyright />
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};
export default DashboardLayout;
