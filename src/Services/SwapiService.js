export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _imgBaseUrl = 'https://starwars-visualguide.com/assets/img';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this.transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this.transformPerson(person)
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this.transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this.transformPlanet(planet)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this.transformStarship);
    }

    getStarship = async (id) => {
        const starShip = await this.getResource(`/starships/${id}/`);
        return this.transformStarship(starShip)
    }

    getPersonImg = (id) => {
        return `${this._imgBaseUrl}/characters/${id}.jpg`
    }

    getVehicleImg = (id) => {
        return `${this._imgBaseUrl}/vehicles/${id}.jpg`
    }

    getStarshipImg = (id) => {
        return `${this._imgBaseUrl}/starships/${id}.jpg`
    }

    getFilmImg = (id) => {
        return `${this._imgBaseUrl}/films/${id}.jpg`
    }

    getPlanetImg = (id) => {
        return `${this._imgBaseUrl}/planets/${id}.jpg`
    }


    transformPlanet = (planet) => {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            residents: planet.residents,
            films: planet.films,
            terrain: planet.terrain,
            gravity: planet.gravity
        }
    }

    transformStarship = (starShip) => {
        return {
            id: this.extractId(starShip),
            name: starShip.name,
            model: starShip.model,
            manufacturer: starShip.manufacturer,
            costInCredits: starShip.cost_in_credits,
            length: starShip.length,
            crew: starShip.crew,
            passengers: starShip.passengers,
            cargoCapacity: starShip.cargo_capacity,
            ...starShip
        }
    }

    transformPerson = (person) => {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            eyeColor: person.eye_color,
            birthYear: person.birth_year,
            weight: person.mass,
            height: person.height,
            ...person
        }
    }

    extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    getHomePlanetId = (planetUrl) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return planetUrl.match(idRegExp)[1]
    };



}