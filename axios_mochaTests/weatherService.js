const {get} = require('axios')

const URL = 'https://www.metaweather.com/api/location/search/?query='

const getWeather = async (location) => {
    const url = `${URL}${location}`
    const result = await get(url)
    return result.data.map(mapResult)
}

const mapResult = (item) => {
    return {
        local: item.location_type,
        titulo: item.title,
        coordenadas: item.latt_long
    }
}

module.exports = {
    getWeather: getWeather
}
