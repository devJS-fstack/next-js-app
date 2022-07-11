import { useState, createContext, useCallback } from 'react'
import BoxIntroduce from './box/box_introduce'
import BoxMap from './box/box_map'
import BoxVertical from './box/box_vertical'
import BoxTheme from './box/box_theme'




export default function Home() {
    return (
        <main >
            <div className="home_grid bg-custom dark-custom">
                <div className="main_grid">
                    <BoxIntroduce></BoxIntroduce>
                    <BoxMap></BoxMap>
                    <BoxVertical></BoxVertical>
                    <BoxTheme
                    ></BoxTheme>
                </div>
            </div>
        </main>
    )
}