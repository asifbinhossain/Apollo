import { AppBar, Tabs, Tab } from "@mui/material";
interface TopNavigationTabProps {
    onNavOpen?: () => void;
}

export default function TopNavigationTab(props: TopNavigationTabProps) {
    const { onNavOpen } = props;

    return (
        <AppBar
            component="div"
            position="static"
            elevation={0}
            sx={{ zIndex: 0 }}
        >
            <Tabs value={0} textColor="inherit">
                <Tab label="Users" />
                <Tab label="Sign-in method" />
                <Tab label="Templates" />
                <Tab label="Usage" />
            </Tabs>
        </AppBar>
    );
}
