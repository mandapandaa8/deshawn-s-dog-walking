import { getWalkers } from "./database.js"
import { getCities } from "./database.js"


const walkers = getWalkers()
const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"
    
    for (const currentCity of cities) {
        citiesHTML += `<li>${currentCity.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}
