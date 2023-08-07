import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Metrics() {
    const title = "Metrics";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
