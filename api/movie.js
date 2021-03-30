module.exports = (self) => {
    return (id = "") => {
        return {
            trending() {
                const args = { time: 'day' }
                return {
                    time(time = 'day') {
                        args.time = time
                        return this
                    },
                    end() {
                        self.url = self.api(`/trending/movie/${args.time}`)
                        self.type = 'trending'
                        return self
                    }
                }
            },
            discover() {
                const args = { options: {} }
                return {
                    parameter(options = {}) {
                        args.options = options
                        return this
                    },
                    page(page = 1) {
                        args.options['page'] = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/discover/movie`, args.options)
                        self.type = 'discover'
                        return self
                    }
                }
            },
            credit() {
                return {
                    end() {
                        self.url = self.api(`/movie/${id}/credits`)
                        self.type = 'credit'
                        return self
                    }
                }
            },
            detail() {
                return {
                    end() {
                        self.url = self.api(`/movie/${id}`, { append_to_response: 'image' })
                        self.type = 'detail'
                        return self
                    }
                }
            },
            externalIDs() {
                return {
                    end() {
                        self.url = self.api(`/movie/${id}/external_ids`)
                        self.type = 'external_ids'
                        return self
                    }
                }
            },
            images() {
                return {
                    end() {
                        self.url = self.api(`/movie/${id}/images`)
                        self.type = 'images'
                        return self
                    }
                }
            },
            recommendations() {
                const args = { page: 1 }
                return {
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/movie/${id}/recommendations`, { page: args.page })
                        self.type = 'recommendations'
                        return self
                    }
                }
            },
            release() {
                return {
                    end() {
                        self.url = self.api(`/movie/${id}/release_dates`)
                        self.type = 'release'
                        return self
                    }
                }
            },
            similar() {
                const args = { page: 1 }
                return {
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/movie/${id}/similar`, { page: args.page })
                        self.type = 'similar'
                        return self
                    }
                }
            },
            provider() {
                self.url = self.api(`/movie/${id}/watch/providers`)
                self.type = 'provider'
                return {
                    end() {
                        return self
                    }
                }
            },
            lastest() {
                self.url = self.api(`/movie/latest`)
                self.type = 'lastest'
                return {
                    end() {
                        return self
                    }
                }
            },
            playing() {
                const args = { page: 1 }
                return {
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/movie/now_playing`, { page: args.page })
                        self.type = 'playing'
                        return self
                    }
                }
            },
            popular() {
                const args = {
                    region: 'US',
                    page: ''
                }
                return {
                    region(region = 'US') {
                        args.region = region
                        return this
                    },
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/movie/popular`, { page: args.page, region: args.region })
                        self.type = 'popular'
                        return self
                    }
                }
            },
            topRated() {
                const args = { region: 'US', page: 1 }
                return {
                    region(region = 'US') {
                        args.region = region
                        return this
                    },
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/movie/top_rated`, { page: args.page, region: args.region })
                        self.type = 'top_rated'
                        return self
                    }
                }
            },
            upComing() {
                const args = { region: 'US', page: 1 }
                return {
                    region(region = 'US') {
                        args.region = region
                        return this
                    },
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/movie/upcoming`, { page: args.page, region: args.region })
                        self.type = 'upcoming'
                        return self
                    }
                }
            },
            search() {
                const args = { keyword: '', adult: true, region: 'US', page: 1 }
                return {
                    keyword(keyword) {
                        args.keyword = keyword
                        return this
                    },
                    adult(adult = true) {
                        args.adult = adult
                        return this
                    },
                    region(region = 'US') {
                        args.region = region
                        return this
                    },
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/search/movie`, {
                            page: args.page,
                            include_adult: args.adult,
                            region: args.region,
                            query: args.keyword
                        })
                        self.type = 'search'
                        return self
                    }
                }
            }
        }
    }
}