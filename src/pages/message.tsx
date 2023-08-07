import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Message() {
    const title = "Message";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
