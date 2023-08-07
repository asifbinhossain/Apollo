import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Storage() {
    const title = "Storage";

    return (
        <DashboardLayout headerTitle="Storage">
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
