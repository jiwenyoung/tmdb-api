module.exports = (self) => {
    return (network_id = "") => {
        return {
            detail() {
                return {
                    end() {
                        self.url = self.api(`/network/${network_id}`)
                        self.type = 'network'
                        return self
                    }
                }
            },
            images() {
                return {
                    end() {
                        self.url = self.api(`/network/${network_id}/images`)
                        self.type = 'network'
                        return self
                    }
                }
            }
        }
    }
}