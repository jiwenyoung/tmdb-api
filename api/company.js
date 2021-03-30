module.exports = (self) => {
    return (company_id) => {
        return {
            detail() {
                return {
                    end() {
                        self.url = self.api(`/company/${company_id}`)
                        self.type = 'company'
                        return self
                    }
                }
            },
            images() {
                return {
                    end() {
                        self.url = self.api(`/company/${company_id}/images`)
                        self.type = 'company'
                        return self
                    }
                }
            }
        }
    }
}