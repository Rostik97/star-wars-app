import withSwapiService from "../HocHelper/WithSwapiServiceHOC";
import RandomPlanet from "../Planets/RandomPlanet/RandomPlanet";


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getPlanet: swapiService.getPlanet
    };
};


const RandomPlanetSw = withSwapiService(
    RandomPlanet,
    mapPersonMethodsToProps,
);

export {
    RandomPlanetSw
}