import styles from "./PersonDetails.module.css";
import React, {Component} from "react";
import Spinner from "../Spinner/Spinner";

export default class PersonDetails extends Component {

    state = {
        personId: null,
        person: null,
        img: null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.personId !== this.props.personId) {
            console.log("Call component did update")
            this.updatePersonInfo(this.props.personId)
        }
    }

    componentDidMount() {
        this.updatePersonInfo(this.props.personId)
    }

    updatePersonInfo(personId) {
        const {getPerson, getPersonImg} = this.props
        getPerson(personId)
            .then((person) => {
                console.log(person)
                this.setState(() => {
                    return {
                        personId,
                        person,
                        img: getPersonImg(personId)
                    }
                })
            }).catch(this.errorHandle)
    }


    errorHandle(err) {
        console.log("Error " + err)
    }

    render() {
        const {personId, person, img} = this.state;
        if (personId == null) {
            return <Spinner/>
        }
        return (
            <div className={styles.PersonDetails}>
                <img src={img} className={styles.PersonImg} alt=''/>
                <div className={styles.PersonInfo}>
                    <h3>{person.name}</h3>
                    <ul className='list-group list-group-flush'>
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
        );
    }
}


