module.exports = (self) => {
    return () => {
        return {
            movie() {
                return {
                    end() {
                        self.url = self.api(`/certification/movie/list`)
                        self.type = 'certification'
                        return self
                    }
                }
            },
            television() {
                return {
                    end() {
                        self.url = self.api(`/certification/tv/list`)
                        self.type = 'certification'
                        return self
                    }
                }
            }
        }
    }
}