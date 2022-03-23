const NBA = require('nba')
const prepareGameData = require('./prepare-game-data')

module.exports = {
  getScores: function (event, cb) {
    console.log("getScores - called");
    NBA.stats.scoreboard({gameDate: event.queryStringParameters.date})
      .then(dailyScores => {
        console.log("getScores - received");
        const data = {
          games: prepareGameData(dailyScores)
        }
        console.log("getScores - prepared data");

        return cb(null, data)
      })
      .catch(e => {
        console.error(e);
        return cb(null, [])
      }
  }
}
