import React from 'react';
import styles from "./Person.module.css"
import defaultImg from "../../Planets/Planet/img.png";


const Person = (props) => {
    let {person, img} = props;
    const {name} = person;


    return (
        <div className={styles.Person}>
            <img src={img} onError={(e) => e.target.src = defaultImg}
                 className={styles.PersonImg} alt=''/>
            <h5>{name}</h5>
        </div>
    )
}
export default Person