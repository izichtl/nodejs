const axios = require('axios')
const URL = 'https://api.tvmaze.com'

const getShow = async (showNumber) => {
    const url = `${URL}/shows/${showNumber}`
    const resultado = await axios.get(url)
    return filterData(resultado.data)
    
}
const filterData = (item) => {
    return {
        nome: item.name,
        genero: item.genres,
        lingua: item.language,
        avaliacao: item.rating.average,
        imagem: item.image.medium
    }
}
module.exports = {
    getShow: getShow
}