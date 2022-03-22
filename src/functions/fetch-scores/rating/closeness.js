const getComebackMultiplier = require('./comebacks')
const getOvertimeMultiplier = require('./overtime')

function smoothRating (rating) {
  return parseInt(Math.min(rating, 100), 10)
}

module.exports = (event, BASE_RATING = 80) => {
  let diff = Math.abs(event.home.total - event.away.total)

  let comebackMultiplier = getComebackMultiplier(event)
  let overtimeMultiplier = getOvertimeMultiplier(event)

  // If there's a potential buzzer beater
  if (diff < 4) {
    return smoothRating(BASE_RATING * comebackMultiplier * overtimeMultiplier)
  }

  // Close but not decided on the last plays
  if (diff < 7) {
    return smoothRating((BASE_RATING - 5) * comebackMultiplier * overtimeMultiplier)
  }

  // Close but not a buzzer-beater loses 10 points
  if (diff < 10) {
    return smoothRating((BASE_RATING - 10) * comebackMultiplier)
  }

  // Bigger differences
  return smoothRating((BASE_RATING - (diff * 1.4)) * comebackMultiplier)
}
