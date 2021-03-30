module.exports = (self) => {
    return (person_id) => {
        return {
            detail() {
                return {
                    end() {
                        self.url = self.api(`/person/${person_id}`, { append_to_response: 'image,video' })
                        self.type = 'people_detail'
                        return self
                    }
                }
            },
            credit() {
                return {
                    all() {
                        return {
                            end() {
                                self.url = self.api(`/person/${person_id}/combined_credits`)
                                self.type = 'people_credit'
                                return self
                            }
                        }
                    },
                    movie() {
                        return {
                            end() {
                                self.url = self.api(`/person/${person_id}/movie_credits`)
                                self.type = 'people_movie_credit'
                                return self
                            }
                        }
                    },
                    television() {
                        return {
                            end() {
                                self.url = self.api(`/person/${person_id}/tv_credits`)
                                self.type = 'people_tv_credit'
                                return self
                            }
                        }
                    }
                }
            },
            externalIDs() {
                return {
                    end() {
                        self.url = self.api(`/person/${person_id}/external_ids`)
                        self.type = 'people_external_ids'
                        return self
                    }
                }
            },
            images() {
                return {
                    end() {
                        self.url = self.api(`/person/${person_id}/images`)
                        self.type = 'people_images'
                        return self
                    }
                }
            },
            lastest() {
                return {
                    end() {
                        self.url = self.api(`/person/latest`)
                        self.type = 'people_lastest'
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
                        self.url = self.api(`/person/popular`, { page: args.page })
                        self.type = 'people_popular'
                        return self
                    }
                }
            }
        }
    }
}