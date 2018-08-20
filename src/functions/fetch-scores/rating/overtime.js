module.exports = function(event) {
  if (event.away_period_scores.length == 4) {
    return 1;
  }

  let overtimeMultiplier = 1.04;
  let overtimeCount = event.away_period_scores.length - 4;

  return Math.pow(overtimeMultiplier, overtimeCount);
}
