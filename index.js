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

//const main = async ()=>{
    //const DATA = await Tmdb.init(key).television('1399').rating().end().run()
    //console.dir(DATA)
    //const data = (Data.init(DATA.dataset, DATA.type)).filter({location:'US'}).image().output()
    //console.dir(data)
//}
//main()

module.exports = Tmdb