import withData from "../HocHelper/WithDataHOC";
import ItemList from "../ItemList/ItemList";
import SwapiService from "../Services/SwapiService";

const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;


const PersonList = withData(ItemList, getAllPeople)
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
    PersonList,
    StarshipList,
    PlanetList
};