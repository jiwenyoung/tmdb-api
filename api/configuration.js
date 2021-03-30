module.exports = (self) => {
    return () => {
        return {
            read() {
                return {
                    end() {
                        self.url = self.api(`/configuration`)
                        self.type = 'configuration'
                        return self
                    }
                }
            }
        }
    }
}