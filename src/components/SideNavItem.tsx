import NextLink from "next/link";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import theme from "@/theme";

/**
 * Returns an object with props for a link component based on the provided path and external flag.
 * If path is falsy, an empty object is returned.
 * If external is truthy, the returned object will have an "a" tag with the provided path and target="_blank".
 * If external is falsy, the returned object will have a NextLink component with the provided path.
 *
 * @param path - The path for the link.
 * @param external - A flag indicating whether the link should open in a new tab.
 * @returns An object with props for a link component.
 */
function getLinkProps(path?: string, external?: boolean): Record<string, any> {
    if (!path) {
        return {};
    }

    if (external) {
        return {
            component: "a",
            href: path,
            target: "_blank",
        };
    }

    return {
        component: NextLink,
        href: path,
    };
}

interface SideNavItemProps {
    id: string;
    icon?: React.ReactNode;
    path?: string;
    active?: boolean;
    disabled?: boolean;
    external?: boolean;
}

const item = {
    py: "2px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
        bgcolor: "rgba(255, 255, 255, 0.08)",
    },
};
export default function SideNavItem(props: SideNavItemProps) {
    const { active = false, disabled, external, icon, path, id } = props;

    const linkProps = getLinkProps(path, external);

    return (
        <ListItem disablePadding key={id}>
            <ListItemButton
                selected={active}
                sx={{
                    ...item,
                    color: "rgba(255, 255, 255, 0.7)",
                    ...(active && {
                        backgroundColor: "cyan",
                    }),
                    "&:hover": {
                        backgroundColor: "teal",
                        color: theme.palette.primary.main,
                    },
                    // "&:focus": {
                    //     backgroundColor: "green",
                    // },
                }}
                {...linkProps}
            >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{id}</ListItemText>
            </ListItemButton>
        </ListItem>
    );
}
