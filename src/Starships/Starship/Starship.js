import React from "react";
import styles from "./Starship.module.css"
import defaultImg from "./stub.png"

const Starship = (props) => {
    let {starship, img} = props;
    const {name} = starship;

    return (
        <div className={styles.Starship}>
            <img src={img} onError={(e) => e.target.src = defaultImg}
                 className={styles.StarshipImg} alt=''/>
            <h5>{name}</h5>
        </div>
    )
}
export default Starship;