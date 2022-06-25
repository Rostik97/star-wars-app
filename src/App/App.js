import React, {Component} from 'react';
import styles from "./App.module.css"
import Header from "../Header/Header";
import SwapiService from "../Services/SwapiService";
import ErrorBoundary from "../ErrorBoudry/ErrorBoundary";
import {SwapiServiceProvider} from "../ServiceContext/ServiceContext";
import {Route, Routes} from "react-router-dom";
import PersonPage from "../Characters/PersonPage/PersonPage";
import HomePage from "../HomePage/HomePage";
import PlanetPage from "../Planets/PlanetPage/PlanetPage";
import StarshipPage from "../Starships/StarshipPage/StarshipPage";
import PlanetDetails from "../Planets/PlanetDetails/PlanetDetails";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PersonDetails from "../Characters/PersonDetails/PersonDetails";
import StarshipDetails from "../Starships/StarshipDetails/StartshipDetails";

export default class App extends Component {

    swapiService = new SwapiService()


    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className={styles.App}>
                        <div className={styles.Content}>
                            <Header/>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/people" element={<PersonPage/>}/>
                                <Route path="/people/:id" element={<PersonDetails/>}/>
                                <Route path="/planets" element={<PlanetPage/>}/>
                                <Route path="/planets/:id" element={<PlanetDetails/>}/>
                                <Route path="/starships" element={<StarshipPage/>}/>
                                <Route path="/starships/:id" element={<StarshipDetails/>}/>
                                <Route path="*" element={<NotFoundPage/>}/>
                            </Routes>
                        </div>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}