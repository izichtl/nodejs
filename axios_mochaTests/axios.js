const {get} = require('axios')

const URL = 'https://swapi.dev/api/people'

const obterPessoas = async (nome) => {
    const url = `${URL}/?search=${nome}&format=json`;
    const result = await get(url)
    console.log(result.data)
    return result.data
}

obterPessoas('r2-d2')



