const getComebackMultiplier = require('./comebacks');
const getOvertimeMultiplier = require('./overtime');

const BASE_RATING = 80;

function smoothRating (rating) {
  return parseInt(Math.min(rating, 100), 10);
}

function isOvertime(event) {
  return event.away_period_scores.length > 4;
}

module.exports = (event) => {

  let diff = Math.abs(event.home_points_scored - event.away_points_scored);

  let comebackMultiplier = getComebackMultiplier(event);
  let overtimeMultiplier = getOvertimeMultiplier(event);

  // If it goes to overtime we should boost the rating
  if (isOvertime(event)) {
    return smoothRating(BASE_RATING * comebackMultiplier * overtimeMultiplier);
  }

  // If there's a potential buzzer beater
  if (diff < 3) {
    return smoothRating(BASE_RATING * comebackMultiplier);
  }

  // Close but not a buzzer-beater loses 10 points
  if (diff < 6) {
    return smoothRating((BASE_RATING - 10) * comebackMultiplier);
  }

  // For everything else we don't bother with comebackMultiplier
  return smoothRating((BASE_RATING - (diff * 1.4)) * comebackMultiplier);

}