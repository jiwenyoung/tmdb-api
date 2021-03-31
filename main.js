/**
 * API modules, these modules add an URL property to Tmdb Object,
 * and output() will request this URL property
 */
const movie = require('./api/movie.js')
const television = require('./api/television.js')
const network = require('./api/network.js')
const company = require('./api/company.js')
const genres = require('./api/genres.js')
const certification = require('./api/certification.js')
const imdb = require('./api/imdb.js')
const search = require('./api/search.js')
const people = require('./api/people.js')
const configuration = require('./api/configuration.js')

/**
 * Data Structure
 */
const Data = require('./Data.js')

/**
 * Function that execuate the request
 */
const execuate = require('./execuate.js')

/**
 * This Function is used to generate URL which will be sent to TMDB server
 */
const generateAPI = require('./generateAPI.js')

/**
 * This Function is used to setup startup argments like http object,etc
 */
const init = require('./init.js')

/**
 * Tmdb Object
 */
const Tmdb = {
    init(key, version = 3) {
        return init(this)(key, version)
    },
    api(path, query = {}) {
        return generateAPI(this)(path, query)
    },
    async run() {
        return (await execuate(this)(Data)())
    },
    movie(movie_id) {
        return movie(this)(movie_id)
    },
    television(tv_id) {
        return television(this)(tv_id)
    },
    search() {
        return search(this)()
    },
    imdb(imdbID) {
        return imdb(this)(imdbID)
    },
    network(network_id) {
        return network(this)(network_id)
    },
    genres() {
        return genres(this)()
    },
    certification() {
        return certification(this)()
    },
    company(company_id) {
        return company(this)(company_id)
    },
    people(person_id) {
        return people(this)(person_id)
    },
    configuration() {
        return configuration(this)()
    }
}

const main = async () => {
    const key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDIxYWJkNWNiMDBkYjYxYjMwZDM0ZjRlY2Y0OWVjMSIsInN1YiI6IjYwNWFlMWQwMjJkZjJlMDA2YWFiM2FiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XQIZDDTht8NrAF_5eZ9Da6a4FkbDk_st3lOW4G4jZGw'
    const TMDB = Tmdb.init(key)
    const Data = await TMDB.television('3199').season(2).episodes(1).detail().end().run()
    //const data = await TMDB.movie('550').detail().output()
    //const Data = await TMDB.search().page(2).keyword('cloud').end().run()
    //const data = await TMDB.company('5aa080d6c3a3683fea00011e').detail().output()
    //const data = await TMDB.network(213).detail().output()
    //const Data = await TMDB.movie('550').images().end().run()
    //console.dir(Data)
    const data = Data.filter().image().output()
    //console.dir(data)
    console.dir(data)
}
main()

module.exports = Tmdb