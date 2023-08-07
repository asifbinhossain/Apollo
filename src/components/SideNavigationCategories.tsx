import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import AssessmentIcon from "@mui/icons-material/Assessment";

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
        id: "Marketing",
        children: [
            {
                id: "Contacts",
                icon: <PeopleIcon />,
                path: "/contacts",
                active: true,
            },
            { id: "Message", icon: <MessageIcon />, path: "/message" },
            {
                id: "Email",
                icon: <EmailIcon />,
                path: "/email",
            },
            { id: "Metrics", icon: <AssessmentIcon />, path: "/metrics" },
        ],
    },
    {
        id: "Marketplace",
        children: [
            { id: "Analytics", icon: <SettingsIcon />, path: "/analytics" },
            { id: "Performance", icon: <TimerIcon />, path: "/performance" },
        ],
    },
];
