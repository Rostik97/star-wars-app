import styles from "./Error.module.css"
import React from "react";
import img from "./img.png"

const Error = () => {
    return (
        <div className={styles.Error}>
            <img src={img} className={styles.img} alt='Droidec'/>
            <h3>Error alert!</h3>
            <h3>Call droids to fix it!</h3>
        </div>
    )
}

export default Error;