const NBA = require('nba')
const prepareGameData = require('./prepare-game-data')

module.exports = {
  getScores: function (event, cb) {
    NBA.stats.scoreboard({gameDate: event.queryStringParameters.date})
      .then(dailyScores => {
        const data = {
          games: prepareGameData(dailyScores)
        }

        return cb(null, data)
      })
  }
}
