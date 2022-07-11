import { useState, memo } from 'react'
import { classNames } from '../../../utils/helper'

function ToggleLockdown() {
    const [lockdown, setLockdown] = useState(false)

    const handleLockdown = () => {
        setLockdown(!lockdown)
    }

    return (
        <>
            <div className={classNames("content-about", lockdown ? "lockdown" : '')}>
                <img className="about-me__01" src="images/3d-cartoon-teenage-boy.jpg" />
                <img className="about-me__02" src="images/3d-cartoon-teenage-boy_02.jpg" />
                <p>
                    I’m Dev, a web developer from VietNam. I'm interested in Code, Design, Business, Startups and Books.
                </p>
                <a className="button-toggle" onClick={handleLockdown}>
                    <svg id="Arrow_Rotate.2" data-name="Arrow, Rotate.2" xmlns="http://www.w3.org/2000/svg" width="15.702" height="15.702" viewBox="0 0 15.702 15.702">
                        <g id="Group_6" data-name="Group 6" transform="translate(2.62 2.617)">
                            <path id="Path_5" data-name="Path 5" d="M14.8,12.032a5.229,5.229,0,0,1-9.824,2.482" transform="translate(-4.34 -6.777)" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></path>
                            <path id="Path_6" data-name="Path 6" d="M4,9.149A5.231,5.231,0,0,1,13.83,6.731" transform="translate(-4.004 -4)" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></path>
                            <path id="Path_7" data-name="Path 7" d="M15.953,6.952h2.313V4.639" transform="translate(-8.135 -4.221)" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></path>
                            <path id="Path_8" data-name="Path 8" d="M6.825,15.825H4.512v2.313" transform="translate(-4.18 -8.088)" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></path>
                        </g>
                        <path id="Path_9" data-name="Path 9" d="M0,0H15.7V15.7H0Z" fill="none"></path>
                    </svg>
                    <p>Toggle Lockdown</p>
                </a>
            </div>
        </>
    )
}

export default memo(ToggleLockdown)