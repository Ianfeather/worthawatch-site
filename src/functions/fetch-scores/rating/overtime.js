module.exports = function(event) {

  if (event.away_period_scores.length == 4) {
    return 1;
  }

  let overtimeCount = event.away_period_scores.length - 4;

  // I don't know if this is actually a good multiplier. Let's see :)
  let overtimeMultiplier = 1.04;

  return Math.pow(overtimeMultiplier, overtimeCount);
}
