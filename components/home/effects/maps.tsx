import { memo, useState } from 'react'

function MapToggle() {
    return (
        <div className="content-map">
            <img className="img-map light" src="images/map-screen_light.png" />
            <img className="img-map dark" src="images/map-screen_dark.png" />
            <div className="avatar-box">
                <div className="avatar-circle">
                    <img className="img-avatar" src="images/memoji-1.png" />
                </div>
            </div>
        </div>
    )
}

export default MapToggle
