import { useState } from 'react'
import BoxIntroduce from './box/box_introduce'
import BoxMap from './box/box_map'
import BoxVertical from './box/box_vertical'
export default function Home() {
    return (
        <>
            <main>
                <div className="home_grid bg-custom">
                    <div className="main_grid">
                        <BoxIntroduce></BoxIntroduce>
                        <BoxMap></BoxMap>
                        <BoxVertical></BoxVertical>
                    </div>
                </div>
            </main>
        </>
    )
}