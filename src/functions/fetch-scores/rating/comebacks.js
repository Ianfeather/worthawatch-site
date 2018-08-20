module.exports = function(event) {

  let winningTeam = event.home_points_scored > event.away_points_scored ? 'home' : 'away';
  let losingTeam = event.home_points_scored > event.away_points_scored ? 'away' : 'home';

  let quarterDiffs = event[`${winningTeam}_period_scores`].map((score, index) => {
    return score - event[`${losingTeam}_period_scores`][index];
  });

  // If the team was down by 30 at half time
  if (quarterDiffs[1] < -29) {
    return 1.1;
  }

  // If the team was down by 20 at the end of the 3rd
  if (quarterDiffs[2] < -19) {
    return 1.1;
  }

  // If the team was down by 20 at half time
  if (quarterDiffs[1] < -19) {
    return 1.05;
  }

  return 1;

}
