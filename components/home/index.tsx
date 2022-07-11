import { useState } from 'react'
import BoxIntroduce from './box/box_introduce'

export default function Home() {

    return (
        <>
            <main>
                <div className="home_grid bg-custom">
                    <div className="main_grid">
                        <BoxIntroduce></BoxIntroduce>
                    </div>
                </div>
            </main>
        </>
    )
}