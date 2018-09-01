const request = require('request')
const prepareGameData = require('./prepare-game-data')

module.exports = {
  getScores: function (event, cb) {
    var dateUrl = 'https://erikberg.com/events.json?date=' + event.queryStringParameters.date + '&sport=nba'

    var opts = {
      auth: { bearer: process.env.ERIKBERG_AUTH_TOKEN },
      headers: { 'User-Agent': 'ianfeather' }
    }

    request.get(dateUrl, opts, function (error, response, body) {
      if (error || response.statusCode !== 200) {
        console.log('ERROR: API error: ' + error)
        return cb(null, { error: error })
      }
      return cb(null, { games: prepareGameData(JSON.parse(body)) })
    })
  }
}
