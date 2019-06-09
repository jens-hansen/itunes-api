const iTunesHelper = require('..')

iTunesHelper
    .search({
        term: 'game of thrones',
        country: 'DE',
        limit: 1,
    })
    .then(res => console.log(res))
