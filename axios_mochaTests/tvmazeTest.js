const assert = require('assert')
const nock = require('nock')

const {
    getShow
} = require('./tvmazeService.js')

describe("TvMaze Tests - suite", () =>{
    beforeEach('Nocando resultados', () => {
        const response = {
            id: 10,
            url: 'http://www.tvmaze.com/shows/10/grimm',
            name: 'Grimm',
            type: 'Scripted',
            language: 'English',
            genres: [ 'Drama', 'Crime', 'Supernatural' ],
            status: 'Ended',
            runtime: 60,
            premiered: '2011-10-28',
            officialSite: 'http://www.nbc.com/grimm',
            schedule: { time: '20:00', days: [ 'Friday' ] },
            rating: { average: 8.5 },
            weight: 89,
            network: {
              id: 1,
              name: 'NBC',
              country: { name: 'United States', code: 'US', timezone: 'America/New_York' }
            },
            webChannel: null,
            externals: { tvrage: 28352, thetvdb: 248736, imdb: 'tt1830617' },
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/69/174906.jpg'
            },
            summary: `<p><b>Grimm </b>is a drama series inspired by the classic Grimm Brothers' Fairy Tales. After Portland homicide detective Nick Burkhardt discovers he's descended from an elite line of criminal profilers known as "Grimms", he increasingly finds his responsibilities as a detective at odds with his new responsibilities as a Grimm.</p>`,
            updated: 1612615604,
            _links: {
              self: { href: 'http://api.tvmaze.com/shows/10' },
              previousepisode: { href: 'http://api.tvmaze.com/episodes/1009811' }
            }
          }

        nock('https://api.tvmaze.com')
        .get('/shows/10')
        .reply(200, response)
    })

    it("Testa o retorno de um show unitário", async () => {
        const esperado = {
            nome: 'Grimm',
            genero: [ 'Drama', 'Crime', 'Supernatural' ],
            lingua: 'English',
            avaliacao: 8.5,
            imagem: 'http://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg'
          }
        const showNumber = '10'
        const recebido = await getShow(showNumber)

        assert.deepStrictEqual(esperado,recebido)

    })



})