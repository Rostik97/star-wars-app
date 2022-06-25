import styles from "./ItemList.module.css"
import React from "react";

const ItemList = (props) => {
    const {selectedObject, renderItem, data} = props;
    const objects = data.map((item) => {
        const {id} = item;
        const value = renderItem(item);
        return (
            <li key={id}
                onClick={() => selectedObject(id)}
                className={styles.Item}>
                {value}
            </li>
        );
    });
    return (
        <div className={styles.ItemList}>
            <ul>
                {objects}
            </ul>
        </div>
    );

}
ItemList.defaultProps = {
    renderItem: ()=>{}
}

export default ItemList


