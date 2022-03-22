module.exports = function (event) {
  // This is naive because we only have quarter scores
  // The best way would be a biggest lead stat

  let winningTeam = event.home.total > event.away.total ? 'home' : 'away'
  let losingTeam = event.home.total > event.away.total ? 'away' : 'home'

  let quarterDiffs = event[`${winningTeam}`].quarterTotals.map((score, index) => {
    return score - event[`${losingTeam}`][index]
  })

  // If the team was down by 30 at half time
  if (quarterDiffs[1] < -29) {
    return 1.1
  }

  // If the team was down by 20 at the end of the 3rd
  if (quarterDiffs[2] < -19) {
    return 1.1
  }

  // If the team was down by 20 at half time
  if (quarterDiffs[1] < -19) {
    return 1.05
  }

  return 1

}
