const adjustForTeamQuality = require('./good-teams')
const adjustForCloseness = require('./closeness')
const adjustForIndividualPerformance = require('./individual-performance')

module.exports = (event, BASE_RATING = 80) => {
  let rating = adjustForTeamQuality(event, BASE_RATING)
  rating = adjustForCloseness(event, rating)

  // would like to bring this back at some point, just
  // need to figure out the correct endpoint
  // rating = adjustForIndividualPerformance(event, rating)

  return Math.min(rating, 100)
}
