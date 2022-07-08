import {
    useState
} from 'react'

import {
    Button, Avatar, List, ListItem, ListItemText, DialogTitle, Dialog, Typography, ListItemAvatar
} from '@mui/material'

import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add'
import { blue } from '@mui/material/colors';

const emails = ['user_01@gmail.com', 'user_02@gmail.com', 'user_03@gmail.com']

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
    const { open, selectedValue, onClose } = props;
    const handleClose = () => {
        onClose(selectedValue)
    }
    const handleListItemClick = (value: string) => {
        onClose(value)
    }

    return (
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