import React, {useEffect, useState} from "react";
import styles from "./PlanetDetails.module.css"
import {useNavigate, useParams} from "react-router-dom";
import SwapiService from "../../Services/SwapiService";
import Spinner from "../../Spinner/Spinner";
import defaultImg from "../Planet/img.png";

const PlanetDetails = () => {

    const [planet, setPlanet] = useState(null)
    const [img, setImg] = useState(null)
    const [residents, setResidents] = useState(null)
    const [films, setFilms] = useState(null)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const {id} = useParams()
    const swapi = new SwapiService()

    useEffect(() => {
        swapi.getPlanet(id)
            .then(data => {
                setPlanet(data)
                setFilms(data.films ? getOnlyIds(data.films) : null)
                setResidents(data.residents ? getOnlyIds(data.residents) : null)
            })
        setImg(swapi.getPlanetImg(id))
    }, [])

    const getOnlyIds = (array) => {
        if (Array.isArray(array) && array.length) {
            return array.map(obj => obj.replace(/[^0-9]/g, ''))
        }
        console.log("Array is empty or null " + array)
        return null
    }

    const getFilmsImgs = () => {
        return films.map(film => {
            const filmImg = swapi.getFilmImg(film)
            return (
                <img key={film} src={filmImg} className={styles.Img} alt=''/>
            )
        })
    }

    const getResidentImgs = () => {
        return residents.map(resident => {
            const residentImg = swapi.getPersonImg(resident)
            return (
                <img key={resident} src={residentImg} className={styles.Img} alt=''/>
            )
        })
    }

    if (!planet) {
        return <Spinner/>
    }

    return (
        <div className={styles.PlanetDetails}>
            <div className={styles.DetailedInfo}>
                <h1>{planet.name}</h1>
                <div className={styles.PlanetGeneralInfo}>
                    <img src={img} onError={(e) => e.target.src = defaultImg}
                         className={styles.PlanetImg} alt=''/>
                    <ul className="list-group list-group-flush">
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Population - {planet.population}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Rotation period - {planet.rotationPeriod}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Diameter - {planet.diameter}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Climate - {planet.climate}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Gravity - {planet.gravity}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Terrain - {planet.terrain}
                        </li>
                    </ul>
                </div>
            </div>
            {
                films && <div className={styles.FilmsInfo}>
                    <ul className={styles.ViewInfo}>
                        {
                            <li className={styles.List}>
                                <h2>Films</h2>
                                <div className={styles.Imgs}>
                                    {getFilmsImgs()}
                                </div>
                            </li>
                        }
                    </ul>
                </div>
            }
            {
                residents && <div className={styles.ResidentInfo}>
                    <ul className={styles.ViewInfo}>
                        <li className={styles.List}>
                            <h2>Residents</h2>
                            <div className={styles.Imgs}>
                                {getResidentImgs()}
                            </div>
                        </li>

                    </ul>
                </div>
            }
            <button className={`btn btn-info`} onClick={goBack}>
                Back
            </button>
        </div>
    )
}
export default PlanetDetails