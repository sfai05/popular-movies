const _ = require('lodash')
const dotenv = require('dotenv')

// load dotenv config vars if available
dotenv.config()

const config = {
  DEBUG: false,
  TMDB_KEY: '',
  TRAKT_KEY: '',
  TMDB_POSTER_URL: 'http://image.tmdb.org/t/p/w500',
  REDIS_URL: 'redis://localhost:6379',
  AWS_BUCKET: 'popular-movies',
  AWS_KEY: '',
  AWS_SECRET: '',
  OMDB_KEY: ''
}

module.exports = _.pick(_.assign({}, config, process.env), _.keys(config))
