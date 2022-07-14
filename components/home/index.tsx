import { useState, createContext, useCallback } from 'react'
import BoxIntroduce from './box/box_introduce'
import BoxMap from './box/box_map'
import BoxVertical from './box/box_vertical'
import BoxTheme from './box/box_theme'
import BoxLinkedIn from './box/box_linkedin'
import BoxTool from './box/box_tool'
import BoxText from './box/box_text'
import BoxService from './box/box_service'
import BoxSocial from './box/box_social'
import BoxTalk from './box/box_talk'

export default function Home() {
    return (
        <main >
            <div className="home_grid bg-custom dark-custom">
                <div className="main_grid font-sans">
                    <BoxIntroduce></BoxIntroduce>
                    <BoxMap></BoxMap>
                    <BoxVertical></BoxVertical>
                    <BoxTheme></BoxTheme>
                    <BoxLinkedIn></BoxLinkedIn>
                    <BoxTool></BoxTool>
                    <BoxText></BoxText>
                    <BoxService></BoxService>
                    <BoxSocial></BoxSocial>
                    <BoxTalk></BoxTalk>
                </div>
            </div>
        </main>
    )
}