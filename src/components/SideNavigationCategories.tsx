import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";

interface SideNavItem {
    id: string;
    icon: JSX.Element;
    path: string;
    active?: boolean;
    disabled?: boolean;
    external?: boolean;
}

interface SideNavCategory {
    id: string;
    children: SideNavItem[];
}

export const SIDE_NAV_CATEGORIES: SideNavCategory[] = [
    {
        id: "Build",
        children: [
            {
                id: "Authentication",
                icon: <PeopleIcon />,
                path: "/authentication",
                active: true,
            },
            { id: "Database", icon: <DnsRoundedIcon />, path: "/database" },
            {
                id: "Storage",
                icon: <PermMediaOutlinedIcon />,
                path: "/storage",
            },
            { id: "Hosting", icon: <PublicIcon />, path: "/hosting" },
            {
                id: "Functions",
                icon: <SettingsEthernetIcon />,
                path: "/functions",
            },
            {
                id: "Machine learning",
                icon: <SettingsInputComponentIcon />,
                path: "/machinelearning",
            },
        ],
    },
    {
        id: "Quality",
        children: [
            { id: "Analytics", icon: <SettingsIcon />, path: "/analytics" },
            { id: "Performance", icon: <TimerIcon />, path: "/performance" },
            { id: "Test Lab", icon: <PhonelinkSetupIcon />, path: "/testlab" },
        ],
    },
];
