import {
    SpeedDial, SpeedDialIcon, SpeedDialAction
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
        <SpeedDial
            ariaLabel='SpeedDial Simple'
            icon={<SpeedDialIcon
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                openIcon={<EditIcon />} />}>
            {
                actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))
            }
        </SpeedDial>
    )
}