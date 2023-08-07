import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Analytics() {
    const title = "Analytics";
    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
