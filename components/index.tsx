/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import {
    Backdrop, Button, CircularProgress
} from '@mui/material'
import SimpleDialogProps from '../components/material/dialog'
import DialSimple from '../components/material/dial'


export default function App() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handlerToggleBackdrop = () => {
        setOpen(!open)
    }
    return (
        <Fragment>

        </Fragment >
    )
}
