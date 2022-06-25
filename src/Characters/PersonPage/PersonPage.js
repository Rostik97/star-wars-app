import React, {useEffect, useState} from "react";
import SwapiService from "../../Services/SwapiService";
import {Link} from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import styles from "./PersonPage.module.css";
import Person from "../Person/Person";


const PersonPage = () => {

    const [persons, setPerson] = useState(null)
    const swapiService = new SwapiService()


    useEffect(() => {
        swapiService.getAllPeople()
            .then(data => {
                setPerson(convertPersons(data))
            })
    }, [])

    const convertPersons = (objects) => {
        return objects.map(person => {
            const {id} = person;
            const personImg = swapiService.getPersonImg(id)
            return (
                <li key={id}>
                    <Link key={id} to={`/people/${id}`}>
                        <Person person={person} img={personImg}/>
                    </Link>
                </li>
            );
        })
    }

    if (!persons) {
        return <Spinner/>
    }

    return (
        <div className={styles.PeoplePage}>
            <ul className={styles.PeopleTab}>
                {persons}
            </ul>
        </div>
    )
}

export default PersonPage