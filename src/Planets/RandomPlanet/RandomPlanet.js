import styles from './RandomPlanet.module.css';
import React, {Component} from "react";
import Spinner from "../../Spinner/Spinner";
import Error from "../../Error/Error";
import PropTypes from "prop-types";


export default class RandomPlanet extends Component {

    componentDidMount() {
        const {intervalValue} = this.props;
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, intervalValue)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onPlanetLoad = (planet) => {
        setTimeout(() => {
            this.setState({planet, loading: false})
        }, 1000)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        let id = Math.floor(Math.random() * 19) + 1;
        this.props.getPlanet(id)
            .then(this.onPlanetLoad)
            .catch(this.onError)
    }

    render() {
        const {planet, loading, error} = this.state
        const spinner = loading ? <div className={styles.Spinner}><Spinner/></div> : null;
        const planetView = !loading && !error ? <PlanetView planet={planet}/> : null;
        const errorMsg = error ? <Error/> : null;
        return (
            <div className={styles.RandomPlanet}>
                {errorMsg}
                {spinner}
                {planetView}
            </div>
        );
    };
};

RandomPlanet.defaultProps = {
    intervalValue: 4000
};

RandomPlanet.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    planet: PropTypes.object
}


const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className={styles.PlanetImg}
                 alt=''/>
            <div className={styles.PlanetInfo}>
                <h3>{name}</h3>
                <ul className='list-group list-group-flush'>
                    <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                        Population - {population}
                    </li>
                    <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                        Rotation period - {rotationPeriod}
                    </li>
                    <li className={`list-group-item d-flex justify-content-between align-items-center ${styles.Item}`}>
                        Diameter - {diameter}
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

