import {
    SpeedDial, SpeedDialIcon, SpeedDialAction, Box
} from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import EditIcon from '@mui/icons-material/Edit'
import ShareIcon from '@mui/icons-material/Share'

const actions = [
    {
        icon: <FileCopyIcon />, name: 'Copy'
    },
    {
        icon: <SaveIcon />, name: 'Save'
    },
    {
        icon: <PrintIcon />, name: 'Print'
    },
    {
        icon: <ShareIcon />, name: 'Share'
    },
]

export default function DialSimple() {
    return (
        <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1, }} className="dial-simple">
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ position: 'absolute', top: 0, left: 16 }}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                direction="down"
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}