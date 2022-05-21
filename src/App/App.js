import {Component} from "react";
import styles from "./App.module.css"
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PersonDetails from "../PersonDetails/PersonDetails";
import SwapiService from "../Services/SwapiService";
import ErrorBoundary from "../ErrorBoudry/ErrorBoundary";
import {PersonList} from "../SwComponents/GeneralItemList";
import {SwapiServiceProvider} from "../ServiceContext/ServiceContext";


export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        personId: 1,
        startShipId: 1,
        planetId: 1
    }

    selectPerson = (id) => {
        console.log("selectPerson " + id)
        this.setState({personId: id})
    }

    selectStarship = (id) => {
        console.log("selectStarship " + id)
        this.setState({startShipId: id})
    }

    selectPlanet = (id) => {
        console.log("selectPlanet " + id)
        this.setState({planetId: id})
    }


    render() {
        const {personId, startShipId} = this.state
        const {getPerson, getPersonImg} = this.swapiService;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className={styles.App}>
                        <div className={styles.Content}>
                            <Header/>
                            <RandomPlanet/>
                            <div className={styles.Row}>
                                <PersonList selectedObject={this.selectPerson}
                                            renderItem={(item) => item.name}/>
                                <PersonDetails personId={personId}
                                               getPerson={getPerson}
                                               getPersonImg={getPersonImg}/>
                            </div>
                        </div>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}