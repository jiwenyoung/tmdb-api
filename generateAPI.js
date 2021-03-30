const querystring = require('querystring')

module.exports = (self) => {
    return (path, query) => {
        let url = ''
        if (Object.keys(query).length === 0) {
            url = `/${self.version}${path}`
        } else {
            url = `/${self.version}${path}?${querystring.stringify(query)}`
        }
        return url
    }
}