module.exports = function(event) {
  let otPeriods = event.home.otTotals.filter(x => x > 0);
  if (!otPeriods.length) {
    return 1;
  }

  let overtimeMultiplier = 1.04;
  return Math.pow(overtimeMultiplier, otPeriods);
}
