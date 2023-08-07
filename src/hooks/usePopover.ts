import { useCallback, useRef, useState, RefObject } from "react";

interface UsePopoverReturn {
    anchorRef: RefObject<HTMLDivElement>;
    handleClose: () => void;
    handleOpen: () => void;
    handleToggle: () => void;
    open: boolean;
}

export function usePopover(): UsePopoverReturn {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleToggle = useCallback(() => {
        setOpen((prevState) => !prevState);
    }, []);

    return {
        anchorRef,
        handleClose,
        handleOpen,
        handleToggle,
        open,
    };
}
