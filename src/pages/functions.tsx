import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Functions() {
    const title = "Functions";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
