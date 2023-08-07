import { AppBar, Tabs, Tab } from "@mui/material";
import ContactList from "./ContactList";
interface TopNavigationTabProps {
    onNavOpen?: () => void;
}

export default function TopNavigationTab(props: TopNavigationTabProps) {
    const { onNavOpen } = props;

    return (
        <>
            <AppBar
                component="div"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
                <Tabs value={0} textColor="inherit">
                    <Tab label="List" href="/contactlist" />
                    <Tab label="Active" />
                    <Tab label="Inactive" />
                    <Tab label="Usage" />
                </Tabs>
            </AppBar>
            <ContactList />
        </>
    );
}
