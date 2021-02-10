const assert = require('assert')

const {
    getWeather
} = require('./weatherService.js')

const nock = require('nock')

describe("Descrição do grupo de testes", () => {
    beforeEach( () => {
        const response = [
            {
              title: 'Rio de Janeiro',
              location_type: 'City',
              woeid: 455825,
              latt_long: '-22.976730,-43.195080'
            }
          ]
          nock('https://www.metaweather.com/api/location/search')
          .get('/?query=rio')
          .reply(200, response)



    })

    it("Descrição Unitária", async () => {
        const expected = [{
            local: 'City',
            titulo: 'Rio de Janeiro',
            coordenadas: '-22.976730,-43.195080'
          }]
        const location = 'rio'
        const resultado = await getWeather(location)

        assert.deepStrictEqual(resultado, expected)

    })
    





})