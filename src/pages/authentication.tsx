import { Typography } from "@mui/material";
import { DashboardLayout, TopNavigationTab } from "../components";

export default function Authentication() {
    const title = "Authentication";
    return (
        <DashboardLayout
            headerTitle={title}
            topNavigationTab={<TopNavigationTab />}
        >
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
