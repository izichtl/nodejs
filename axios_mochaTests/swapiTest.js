const assert = require('assert')

const {
    getPeople
} = require('./swapiService.js')

const nock  = require('nock')

describe('Grupo de teste Axios',  () => {
    beforeEach( () => {
        const response = {
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: 'R2-D2',
                    height: '96',
                    mass: '32',
                    hair_color: 'n/a',
                    skin_color: 'white, blue',
                    eye_color: 'red',
                    birth_year: '33BBY',
                    gender: 'n/a',
                    homeworld: 'http://swapi.dev/api/planets/8/',
                    films: [Array],
                    species: [Array],
                    vehicles: [],
                    starships: [],
                    created: '2014-12-10T15:11:50.376000Z',
                    edited: '2014-12-20T21:17:50.311000Z',
                    url: 'http://swapi.dev/api/people/3/'
                }
            ]
        }
        nock('https://swapi.dev/api/people')
        .get(`/?search=R2-D2&format=json`)
        .reply(200, response)
    })


    it('Descrição do teste unitário: Buscar personagem com formato correto', async () => {
        


        const expected = [{
            nome: 'R2-D2',
            altura: '96'
        }]

        const nomeBase = 'R2-D2'
        const resultado = await getPeople(nomeBase)
        assert.deepStrictEqual(resultado, expected)
    })


})

