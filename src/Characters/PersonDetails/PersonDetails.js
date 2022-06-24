import styles from "./PersonDetails.module.css";
import React, {useEffect, useState} from "react";
import Spinner from "../../Spinner/Spinner";
import {useNavigate, useParams} from "react-router-dom";
import SwapiService from "../../Services/SwapiService";
import defaultImg from "../../Planets/Planet/img.png";

const PersonDetails = () => {

    const [person, setPerson] = useState(null)
    const [img, setImg] = useState(null)
    const [vehicles, setVehicles] = useState(null)
    const [films, setFilms] = useState(null)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const {id} = useParams()
    const swapi = new SwapiService()

    useEffect(() => {
        swapi.getPerson(id)
            .then(data => {
                setPerson(data)
                setFilms(data.films ? getOnlyIds(data.films) : null)
                setVehicles(data.vehicles ? getOnlyIds(data.vehicles) : null)
            })
        setImg(swapi.getPersonImg(id))
    }, [])

    const getOnlyIds = (array) => {
        if (Array.isArray(array) && array.length) {
            return array.map(obj => obj.replace(/[^0-9]/g, ''))
        }
    }

    const getFilmsImgs = () => {
        return films.map(film => {
            const filmImg = swapi.getFilmImg(film)
            return (
                <img key={film} src={filmImg} className={styles.Img} alt=''/>
            )
        })
    }

    const getVehicleImgs = () => {
        return vehicles.map(resident => {
            const residentImg = swapi.getVehicleImg(resident)
            return (
                <img key={resident} src={residentImg} className={styles.VehiclesImg} alt=''/>
            )
        })
    }

    if (!person) {
        return <Spinner/>
    }

    return (
        <div className={styles.PersonDetails}>
            <div className={styles.DetailedInfo}>
                <h1>{person.name}</h1>
                <div className={styles.PersonGeneralInfo}>
                    <img src={img} onError={(e) => e.target.src = defaultImg}
                         className={styles.PersonImg} alt=''/>
                    <ul className="list-group list-group-flush">
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Gender - {person.gender}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Birth year - {person.birthYear}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Eye color - {person.eyeColor}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Weight - {person.weight}
                        </li>
                        <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                            Height - {person.height}
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
                vehicles && <div className={styles.ResidentInfo}>
                    <ul className={styles.ViewInfo}>
                        <li className={styles.List}>
                            <h2>Vehicles</h2>
                            <div className={styles.Imgs}>
                                {getVehicleImgs()}
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
export default PersonDetails

