import {
    Box,
    Divider,
    MenuItem,
    MenuList,
    Popover,
    Typography,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface AccountPopoverProps {
    anchorEl: HTMLElement | null;
    onClose?: () => void;
    open: boolean;
}

/* This is the popover that appears when you click on the avatar at the top right corner */
export default function AccountPopover(props: AccountPopoverProps) {
    const { anchorEl, onClose, open } = props;
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
                horizontal: "left",
                vertical: "bottom",
            }}
            onClose={onClose}
            open={open}
        >
            <Box
                sx={{
                    py: 1.5,
                    px: 2,
                }}
            >
                <Typography variant="overline">Account</Typography>
                <Typography color="text.secondary" variant="body2">
                    {user.attributes?.name}
                </Typography>
            </Box>
            <Divider />
            <MenuList
                disablePadding
                dense
                sx={{
                    p: "8px",
                    "& > *": {
                        borderRadius: 1,
                    },
                }}
            >
                <MenuItem
                    onClick={signOut}
                    sx={{
                        "&:hover": {
                            color: "purple",
                        },
                    }}
                >
                    <Typography>Sign Out</Typography>
                    <ExitToApp></ExitToApp>
                </MenuItem>
            </MenuList>
        </Popover>
    );
}
