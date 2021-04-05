const Data = {
    dataset: {},
    init(dataset, type) {
        this.dataset = dataset
        this.type = type
        return this
    },
    output() {
        return this.dataset
    },
    filter(options = {}) {
        if (['release', 'provider', 'tv_rating', 'imdb', 'certification'].includes(this.type)) {
            switch (this.type) {
                case 'release':
                    {
                        let location = ''
                        if (options.location) {
                            location = options.location
                        } else {
                            location = 'US'
                        }
                        let collection = {}
                        this.dataset.results.forEach((where) => {
                            if (where.iso_3166_1 === location) {
                                collection = where.release_dates
                            }
                        });
                        this.dataset = collection
                    }
                    break
                case 'provider':
                    {
                        let location = ''
                        if (options.location) {
                            location = options.location
                        } else {
                            location = 'US'
                        }
                        this.dataset = this.dataset.results[location]
                    }
                    break
                case 'tv_rating':
                    {
                        let location = ''
                        if (options.location) {
                            location = options.location
                        } else {
                            location = 'US'
                        }
                        let collection = {}
                        this.dataset.results.forEach((element) => {
                            if (element.iso_3166_1 === location) {
                                collection = element
                            }
                        })
                        this.dataset = collection
                    }
                    break
                case 'imdb':
                    {
                        let collection = {}
                        Object.entries(this.dataset).forEach((element) => {
                            [index, content] = element
                            if (content.length !== 0) {
                                collection = content[0]
                            }
                        })
                        this.dataset = collection
                    }
                    break
                case 'certification':
                    {
                        let location = ''
                        if (options.location) {
                            location = options.location
                        } else {
                            location = 'US'
                        }
                        this.dataset = this.dataset.certifications[location]
                    }
                    break
            }
        }
        return this
    },
    image(size = 'original') {
        const updateImage = (object) => {
            for (index in object) {
                if (Array.isArray(object[index])) {
                    for (let element of object[index]) {
                        updateImage(element)
                    }
                } else if (typeof (object[index]) === 'object') {
                    updateImage(object[index])
                } else {
                    const paths = [
                        'poster_path',
                        'backdrop_path',
                        'logo_path',
                        'profile_path',
                        'still_path',
                        'file_path'
                    ]
                    if (paths.includes(index)) {
                        object[index] = `https://image.tmdb.org/t/p/${size}${object[index]}`
                    }
                }
            }
            return object
        }
        updateImage(this.dataset)
        return this
    }
}

module.exports = Data