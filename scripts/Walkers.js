import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    //window.alert(`${walker.name} services ${cities}`)
                    const citiesForWalkers = allWalkerCities(walker.id)
                    const theCitiesNames = cityNames(citiesForWalkers)
                    window.alert(`${walker.name} services ${theCitiesNames}`)
                }
            }
        }
    }
)

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const allCities = getCities()



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

//input the walker as the parameter 
export const allWalkerCities = (walkerID) => {
    let walkerCitiesArr = []
    for (const city of walkerCities) {
        if (city.walkerId === walkerID) {
            walkerCitiesArr.push(city)
        }
    }
    return walkerCitiesArr
}

//add as parameter
    //iterate to get list of cities
// input the cites object as parameter from the walkers
export const cityNames = (walkerCitiesArr) => {
    let theCities = ""
    for (const cities of allCities)
        for (const city of walkerCitiesArr) {
            if (city.cityId === cities.id) {
                theCities += `${cities.name}`
            }
        }

    return theCities
}