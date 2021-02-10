const axios = require('axios')

const URL = 'https://swapi.dev/api/people';


const getPeople = async (nome) => {
    const url = `${URL}/?search=${nome}&format=json`
    const resultado = await axios.get(url)
    return resultado.data.results.map(filterResult)
}

const filterResult = (item) => {
    return { 
        nome: item.name,
        altura: item.height
    }
}

module.exports = {
    getPeople: getPeople
}