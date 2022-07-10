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
            <Button
                variant="contained" sx={{
                    margin: "20px 0 0 0",
                    backgroundColor: "rgb(14 165 233/1)!important"
                }}
                color="success"
                onClick={handlerToggleBackdrop}
            >Click me</Button>

            <Backdrop
                sx={{ color: "rgb(31 41 55/1)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <SimpleDialogProps></SimpleDialogProps>
            <DialSimple
            ></DialSimple>
        </Fragment >
    )
}
