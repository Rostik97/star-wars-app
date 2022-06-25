import React, {useEffect, useState} from 'react';
import SwapiService from "../../Services/SwapiService";
import {Link} from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import Starship from "../Starship/Starship";
import styles from "./StarshipPage.module.css"

const StarshipPage = () => {
    const [starships, setStarships] = useState(null)
    const swapiService = new SwapiService()


    useEffect(() => {
        swapiService.getAllStarships()
            .then(data => setStarships(convertStarships(data)))
    }, [])

    const convertStarships = (objects) => {
        return objects.map(starship => {
            const {id} = starship;
            const starshipImg = swapiService.getStarshipImg(id)
            return (
                <Link key={id} to={`/starships/${id}`}>
                    <Starship starship={starship} img={starshipImg}/>
                </Link>
            );
        })
    }

    if (!starships) {
        return <Spinner/>
    }

    return (
        <div className={styles.StarshipPage}>
            <ul className={styles.StarshipTab}>
                {starships}
            </ul>
        </div>
    )
}

export default StarshipPage