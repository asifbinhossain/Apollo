import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function Database() {
    const title = "Database";

    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
