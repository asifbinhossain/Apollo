import { Typography } from "@mui/material";
import { DashboardLayout, TopNavigationTab } from "../components";

export default function Contacts() {
    const title = "Contacts";
    return (
        <DashboardLayout
            headerTitle={title}
            topNavigationTab={<TopNavigationTab />}
        >
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
