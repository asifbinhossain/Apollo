import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Hosting() {
    const title = "Hosting";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
