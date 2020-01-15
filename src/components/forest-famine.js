import React from "react"
import styles from "./forest-famine.module.scss"

const ForestAndFamine = () => (
    <div className={styles.grid}>
        <div className={styles.imageGrid}>
            <div className={styles.title}>
                <h1>Forest and Famine</h1>
                <br /><h2>Nick Lowry</h2>
            </div>
        </div>
        <div className={styles.bio}>
            <p>Nick Lowry is an established artistic director, set designer and mural artist based in Christchurch. Having worked and exhibited across New Zealand and Australia, his main focus is with theater and video production where his passion for spacial art and creating surreal space thrives.</p>
        </div>
        <div className={styles.statement}>
            <p>In these works, Nick aims to create a series of pieces that loosely reflect the energy of album cover art collaged into a mass of turbulent scenarios homogenizing into one piece. Using colours and textures that give a cold and unnerving appearance, falling away into an endless space.</p>
        </div>
        <div className={styles.date}>
            <p>February 13th 2020 <br />- 8th March 2020</p>
        </div>
    </div>
)

export default ForestAndFamine;