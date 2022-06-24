import React from "react";
import styles from "./Planet.module.css"
import defaultImg from "./img.png"

const Planet = (props) => {

    let {planet, img} = props;
    const {name} = planet;


    return (
        <div className={styles.Planet}>
            <img src={img} onError={(e) => e.target.src = defaultImg}
                 className={styles.PlanetImg} alt=''/>
            <h5>{name}</h5>
        </div>
    )
}
export default Planet