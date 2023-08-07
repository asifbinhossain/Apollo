import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Performance() {
    const title = "Performance";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
