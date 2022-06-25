import React from 'react';
import styles from "./HomePage.module.css"
import {RandomPlanetSw} from "../SwComponents/GeneralRandomPlanet";
import robots from "./robots.gif"
import clones from "./clones.gif"

const HomePage = () => {
    return (
        <div className={styles.Content}>
            <RandomPlanetSw/>
            <div className={styles.Text}>
                <img className={styles.RightImg} src={robots} alt="ROBOTS"/>
                <p> The Star Wars franchise depicts the adventures of characters
                    "A long time ago in a galaxy far, far away", in which humans and many species
                    of aliens (often humanoid) co-exist with robots (typically referred to in the films as 'droids'),
                    who may assist them in their daily routines; space travel between planets is common due to
                    lightspeed
                    hyperspace technology.
                    The planets range from wealthy, planet-wide cities to deserts scarcely populated by primitive
                    tribes.</p>
                <img className={styles.LeftImg} src={clones} alt="CLONES"/>
                <p> Virtually any Earth biome, along with many fictional ones, has its counterpart as a Star Wars planet
                    which, in most cases, teem
                    with sentient and non-sentient alien life.
                    The franchise also makes use of other astronomical objects such as asteroid fields and nebulae.
                    Spacecraft range from small starfighters, to huge capital ships such as the Star Destroyers,
                    to space stations such as the moon-sized Death Stars.</p>
            </div>
        </div>
    )
}
export default HomePage