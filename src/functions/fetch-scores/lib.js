const NBA = require('nba')
const prepareGameData = require('./prepare-game-data')

module.exports = {
  getScores: function (event, cb) {
    NBA.stats.scoreboard({gameDate: '2022-03-21'})
      .then(dailyScores => {
        const data = {
          games: prepareGameData(dailyScores)
        }

        return cb(null, data)
      })
  }
}
