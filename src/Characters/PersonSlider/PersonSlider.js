import styles from "../../App/App.module.css";
import {PersonList} from "../../SwComponents/GeneralItemList";
import {PersonInfo} from "../../SwComponents/GeneralPersonDetails";
import React from "react";

const PersonSlider = (props) => {
    const {personId, selectPerson} = props;

    return (
        <div className={styles.Row}>
            <PersonList selectedObject={selectPerson}
                        renderItem={(item) => item.name}/>
            <PersonInfo personId={personId}/>
        </div>
    )
}

export default PersonSlider