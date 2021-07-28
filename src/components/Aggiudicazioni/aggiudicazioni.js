import React from 'react'
import LastScore from '../Home/LastScore'
import galleryStyle from "../../utilities/styles/output/section.module.css";
import Intro from '../Header/Intro';

function aggiudicazioni() {
    return (
        <div className={galleryStyle.cont__about}>
            <Intro section="aggiudicazioni" title="Aggiudicazioni" />

            <LastScore section="aggiudicazioni" />
        </div>
    )
}

export default aggiudicazioni
