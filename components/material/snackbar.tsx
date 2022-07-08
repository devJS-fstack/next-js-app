import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close'
import {
    Snackbar, IconButton
} from '@mui/material'

interface SnackbarProps {
    open: boolean;
    autoHideDuration: number;
    onClose: () => void;
    message: string;
    action: any
}

export default function SnackbarComponent(props: SnackbarProps) {
    const { open, autoHideDuration, onClose, message, action } = props
    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            message={message}
            action={action}
        />
    )
}