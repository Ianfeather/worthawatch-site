const calculateCloseness = require('./closeness')
const adjustForIndividualPerformance = require('./individual-performance')

module.exports = (event, BASE_RATING = 80) => {
  let rating = calculateCloseness(event, BASE_RATING)
  return adjustForIndividualPerformance(event, rating)
}
