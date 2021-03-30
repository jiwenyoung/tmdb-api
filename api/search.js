module.exports = (self) => {
    return () => {
        const args = { keyword: '', page: 1 }
        return {
            page(page = 1) {
                args.page = page
                return this
            },
            keyword(keyword = '') {
                args.keyword = keyword
                return this
            },
            end() {
                self.url = self.api(`/search/multi`, { query: args.keyword, page: args.page })
                self.type = 'search'
                return self
            }
        }
    }
}