import { Typography } from "@mui/material";
import { DashboardLayout, Content } from "../components";

export default function HomeDashboard() {
    const title = "Home";
    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
            <Content></Content>
        </DashboardLayout>
    );
}
