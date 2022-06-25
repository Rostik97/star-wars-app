import React, {useEffect, useState} from "react";
import styles from "./StartshipDetails.module.css"
import {useNavigate, useParams} from "react-router-dom";
import SwapiService from "../../Services/SwapiService";
import Spinner from "../../Spinner/Spinner";
import defaultImg from "../../Starships/Starship/stub.png";

const StarshipDetails = () => {

    const [starShip, setStarShip] = useState(null)
    const [img, setImg] = useState(null)
    const [residents, setResidents] = useState(null)
    const [films, setFilms] = useState(null)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const {id} = useParams()
    const swapi = new SwapiService()

    useEffect(() => {
        swapi.getStarship(id)
            .then(data => {
                setStarShip(data)
                setFilms(data.films ? getOnlyIds(data.films) : null)
                setResidents(data.residents ? getOnlyIds(data.residents) : null)
            })
        setImg(swapi.getStarshipImg(id))
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
        return residents.map(starship => {
            const residentImg = swapi.getStarshipImg(starship)
            return (
                <img key={starship} src={residentImg} className={styles.Img} alt=''/>
            )
        })
    }

    if (!starShip) {
        return <Spinner/>
    }

    return (
        <div className={styles.StarshipDetails}>
            <div className={styles.DetailedInfo}>
                <h1>{starShip.name}</h1>
                <div className={styles.StarshipGeneralInfo}>
                    <img src={img} onError={(e) => e.target.src = defaultImg}
                         className={styles.StarshipImg} alt=''/>
                    <ul className="list-group list-group-flush">
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Model - {starShip.model}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Manufacturer - {starShip.manufacturer}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Cost - {starShip.costInCredits} $
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Length - {starShip.length}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Crew - {starShip.crew}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Passengers - {starShip.passengers}
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
export default StarshipDetails