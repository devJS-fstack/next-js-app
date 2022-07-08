import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close'
import {
    Snackbar, IconButton, Alert
} from '@mui/material'

interface SnackbarProps {
    open: boolean;
    autoHideDuration: number;
    onClose: () => void;
    message: string;
}

const styles = {
    snackbarStyleViaContentProps: {
        backgroundColor: "orange"
    },
    snackbarStyleViaNestedContent: {
        backgroundColor: "lightgreen",
        color: "black"
    }
};

export default function SnackbarComponent(props: SnackbarProps) {
    const { open, autoHideDuration, onClose, message } = props
    return (

        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
        >
            <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}