module.exports = (self) => {
    return (imdbID) => {
        return {
            find() {
                return {
                    end() {
                        self.url = self.api(`/find/${imdbID}`, { external_source: 'imdb_id' })
                        self.type = 'imdb'
                        return self
                    }
                }
            }
        }
    }
}