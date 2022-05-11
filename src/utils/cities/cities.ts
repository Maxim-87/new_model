const cities = require('./cities.json')

export type CitiesType = {
    city: string,
    population: string
}

export const newCities = cities.filter((city: CitiesType) => Number(city.population) > 50000).sort(((a:CitiesType,b:CitiesType) => {
    if (Number(a['population']) > Number(b['population'])) {
        return -1
    }
    else {
        return 1}

}))