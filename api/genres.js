module.exports = (self) => {
    return () => {
        return {
            movie() {
                return {
                    end() {
                        self.url = self.api(`/genre/movie/list`)
                        self.type = 'genres'
                        return self
                    }
                }
            },
            television() {
                return {
                    end() {
                        self.url = self.api(`/genre/tv/list`)
                        self.type = 'genres'
                        return self
                    }
                }
            }
        }
    }
}