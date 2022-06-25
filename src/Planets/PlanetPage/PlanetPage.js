import React, {useEffect, useState} from 'react';
import SwapiService from "../../Services/SwapiService";
import styles from "./PlanetPage.module.css"
import Planet from "../Planet/Planet";
import {Link} from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const PlanetPage = () => {

    const [planets, setPlanets] = useState(null)
    const swapiService = new SwapiService()


    useEffect(() => {
        swapiService.getAllPlanets()
            .then(data => {
                const planetArray = convertPlanets(data)
                setPlanets(planetArray)
            })
    }, [])

    const convertPlanets = (objects) => {
        return objects.map(planet => {
            const {id} = planet;
            const planetImg = swapiService.getPlanetImg(id)
            return (
                <Link key={id} to={`/planets/${id}`}>
                    <Planet planet={planet} img={planetImg}/>
                </Link>
            );
        })
    }

    if (!planets) {
        return <Spinner/>
    }

    return (
        <div className={styles.PlanetPage}>
            <ul className={styles.PlanetTab}>
                {planets}
            </ul>
        </div>
    )
}

export default PlanetPage