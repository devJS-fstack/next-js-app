import {
    useState,
    useRef,
    Fragment
} from 'react'

import {
    Button, Avatar, List, ListItem, ListItemText, DialogTitle, Dialog,
    Typography, ListItemAvatar, DialogContent, DialogActions, DialogContentText, TextField, IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add'
import { blue } from '@mui/material/colors';
import SnackbarComponent from '../material/snackbar'

const emails = ['user_01@gmail.com', 'user_02@gmail.com', 'user_03@gmail.com']

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

export interface SimpleFormDialog {
    openFormDialog: boolean;
    handleFormDialog: any;
    selectedValue: string;
}

export function SimpleDialog(props: SimpleDialogProps) {
    const { open, selectedValue, onClose } = props;
    const [openFormDialog, setOpenFormDialog] = useState(false)
    const handleClose = () => {
        onClose(selectedValue)
    }
    const handleCloseFormDialog = (value: string) => {
        setOpenFormDialog(false)
        onClose(value === undefined ? selectedValue : value)
    }
    const handleListItemClick = (value: string) => {
        if (value == "addAccount") {
            setOpenFormDialog(true)
            onClose(selectedValue)
        } else {
            onClose(value)
        }
    }
    return (
        <>
            <Dialog
                onClose={handleClose} open={open}
            >
                <DialogTitle>Set Backup Account</DialogTitle>
                <List sx={{ pt: 0 }}>
                    {
                        emails.map(email => (
                            <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItem>
                        ))
                    }
                    <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                        <ListItemAvatar>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Add account" />
                    </ListItem>
                </List>
            </Dialog>
            <SimpleFormDialog
                openFormDialog={openFormDialog}
                handleFormDialog={handleCloseFormDialog}
                selectedValue={selectedValue}
            />

        </>
    )
}


export function SimpleFormDialog(props: SimpleFormDialog) {
    const { openFormDialog, handleFormDialog, selectedValue } = props
    let message = useRef("Email is already exists!")
    const [email, setEmail] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const handleAddAccount = (value: string) => {
        if (value === "") {
            setOpenSnackbar(true)
            message.current = "Please enter the email!"
        }
        else {
            message.current = "Email is already exists!"
            const isExist = emails.includes(value)
            if (!isExist) {
                emails.push(value)
                handleFormDialog(value)
                setEmail('')
            } else {
                setOpenSnackbar(true)
            }
        }
    }
    const handleInput = (value: string) => {
        setEmail(value)
    }

    const handleOpenSnackbar = () => {
        setOpenSnackbar(true)
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }

    return (
        <div>
            <Dialog open={openFormDialog} onClose={() => handleFormDialog(selectedValue)}>
                <DialogTitle>Add New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe this website, please enter your email address here. Email can't duplicate
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onInput={(e: any) => {
                            handleInput(e.target.value);
                        }}
                    // name="email_value"
                    >
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleFormDialog(selectedValue)}>Cancel</Button>
                    <Button onClick={() => {
                        handleAddAccount(email)
                    }}>Add</Button>
                </DialogActions>
            </Dialog >
            <SnackbarComponent
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                message={message.current}
            />
        </div>
    )
}

export default function SimpleDialogDemo() {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[0]);

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = (value: string) => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (
        <div style={{ margin: 20 }}>
            <Typography variant="subtitle2" component="div">
                Item is selected: {selectedValue}
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog
                open={open}
                selectedValue={selectedValue}
                onClose={handleClose}
            />
        </div>
    )
}