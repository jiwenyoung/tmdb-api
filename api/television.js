/**
 * Episodes 
 */
const episodes = (self) => {
    return (id = '') => {
        return (season_number = '') => {
            return (episode_number = '') => {
                return {
                    detail() {
                        return {
                            end() {
                                self.url = self.api(`/tv/${id}/season/${season_number}/episode/${episode_number}`)
                                self.type = 'episodes_detail'
                                return self
                            }
                        }
                    },
                    credit() {
                        return {
                            end() {
                                self.url = self.api(`/tv/${id}/season/${season_number}/episode/${episode_number}/credits`)
                                self.type = 'episodes_credit'
                                return self
                            }
                        }
                    },
                    externalIDs() {
                        return {
                            end() {
                                self.url = self.api(`/tv/${id}/season/${season_number}/episode/${episode_number}/external_ids`)
                                self.type = 'episodes_external_ids'
                                return self
                            }
                        }
                    },
                    images() {
                        return {
                            end() {
                                self.url = self.api(`/tv/${id}/season/${season_number}/episode/${episode_number}/images`)
                                self.type = 'episodes_images'
                                return self
                            }
                        }
                    },
                    videos() {
                        return {
                            end() {
                                self.url = self.api(`/tv/${id}/season/${season_number}/episode/${episode_number}/videos`)
                                self.type = 'episodes_videos'
                                return self
                            }
                        }
                    }
                }
            }
        }
    }
}

/**
 * Season
 */
const season = (self) => {
    return (id) => {
        return (season_number = '') => {
            return {
                detail() {
                    return {
                        end() {
                            self.url = self.api(`/tv/${id}/season/${season_number}`, { append_to_response: 'image' })
                            self.type = 'season_detail'
                            return self
                        }
                    }
                },
                credit() {
                    return {
                        end() {
                            self.url = self.api(`/tv/${id}/season/${season_number}/aggregate_credits`)
                            self.type = 'season_credit'
                            return self
                        }
                    }
                },
                externalIDs() {
                    return {
                        end() {
                            self.url = self.api(`/tv/${id}/season/${season_number}/external_ids`)
                            self.type = 'season_external_ids'
                            return self
                        }
                    }
                },
                images() {
                    return {
                        end() {
                            self.url = self.api(`/tv/${id}/season/${season_number}/images`)
                            self.type = 'season_images'
                            return self
                        }
                    }
                },
                videos() {
                    return {
                        end() {
                            self.url = self.api(`/tv/${id}/season/${season_number}/videos`)
                            self.type = 'season_videos'
                            return self
                        }
                    }
                },
                episodes(episode_number = "") {
                    return episodes(self)(id)(season_number)(episode_number)
                }
            }
        }
    }
}

/**
 * TV Series 
 */
const tvseries = (self) => {
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
                        self.url = self.api(`/trending/tv/${args.time}`)
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
                        self.url = self.api(`/discover/tv`, args.options)
                        self.type = 'discover'
                        return self
                    }
                }
            },
            search() {
                const args = { keyword: '', page: 1, adult: true, region: 'US' }
                return {
                    keyword(keyword = '') {
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
                        self.url = self.api(`/search/tv`, {
                            page: args.page,
                            include_adult: args.adult,
                            region: args.region,
                            query: args.keyword
                        })
                        self.type = 'search'
                        return self
                    }
                }
            },
            detail() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}?append_to_response=videos,images`)
                        self.type = 'detail'
                        return self
                    }
                }
            },
            credit() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}/aggregate_credits`)
                        self.type = 'credit'
                        return self
                    }
                }
            },
            rating() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}/content_ratings`)
                        self.type = 'tv_rating'
                        return self
                    }
                }
            },
            externalIDs() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}/external_ids`)
                        self.type = 'external_ids'
                        return self
                    }
                }
            },
            images() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}/images`)
                        self.type = 'images'
                        return self
                    }
                }
            },
            keywords() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}/keywords`)
                        self.type = 'keywords'
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
                        self.url = self.api(`/tv/${id}/recommendations`, { page: args.page })
                        self.type = 'recommendations'
                        return self
                    }
                }
            },
            review() {
                const args = { page: 1 }
                return {
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/tv/${id}/reviews`, { page: args.page })
                        self.type = 'review'
                        return self
                    }
                }
            },
            screenedTheatrically() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}/screened_theatrically`)
                        self.type = 'screened_theatrically'
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
                        self.url = self.api(`/tv/${id}/similar`, { page: args.page })
                        self.type = 'similar'
                        return self
                    }
                }
            },
            provider() {
                return {
                    end() {
                        self.url = self.api(`/tv/${id}/watch/providers`)
                        self.type = 'provider'
                        return self
                    }
                }
            },
            lastest() {
                return {
                    end() {
                        self.url = self.api(`/tv/latest`)
                        self.type = 'lastest'
                        return self
                    }
                }
            },
            airingToday() {
                return {
                    end() {
                        self.url = self.api(`/tv/airing_today`)
                        self.type = 'airing_today'
                        return self
                    }
                }
            },
            onTheAir() {
                const args = { page: 1 }
                return {
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/tv/on_the_air`, { page: args.page })
                        self.type = 'on_the_air'
                        return self
                    }
                }
            },
            popular() {
                const args = { page: 1 }
                return {
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/tv/popular`, { page: args.page })
                        self.type = 'popular'
                        return self
                    }
                }
            },
            topRated() {
                const args = { page: 1 }
                return {
                    page(page = 1) {
                        args.page = page
                        return this
                    },
                    end() {
                        self.url = self.api(`/tv/top_rated`, { page: args.page })
                        self.type = 'top_rated'
                        return self
                    }
                }
            },
            season(season_number = "") {
                return season(self)(id)(season_number)
            }
        }
    }
}

module.exports = tvseries
