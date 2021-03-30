const axios = require('axios')

module.exports = (self) =>{
    return (key, version = 3)=>{
        self.http = axios.create({
            baseURL: 'https://api.themoviedb.org',
            headers: { 
                Authorization: `Bearer ${key}`,
                'User-Agent' : 'TMDB-API/1.0.0' 
            }
        })
        self.version = version
        return self
    }
}