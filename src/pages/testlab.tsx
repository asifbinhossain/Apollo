import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function TestLab() {
    const title = "Test Lab";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
