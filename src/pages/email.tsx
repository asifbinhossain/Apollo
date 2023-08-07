import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Email() {
    const title = "Email";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
