import { Typography } from "@mui/material";
import { DashboardLayout } from "../components";

export default function MachineLearning() {
    const title = "Machine Learning";
    return (
        <DashboardLayout headerTitle={title}>
            <Typography>{title}</Typography>
        </DashboardLayout>
    );
}
