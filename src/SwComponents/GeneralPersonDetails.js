import withSwapiService from "../HocHelper/WithSwapiServiceHOC";
import PersonDetails from "../Characters/PersonDetails/PersonDetails";


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getPerson: swapiService.getPerson,
        getPersonImg: swapiService.getPersonImg
    };
};


const PersonInfo = withSwapiService(
    PersonDetails,
    mapPersonMethodsToProps,
);

export {
    PersonInfo
}