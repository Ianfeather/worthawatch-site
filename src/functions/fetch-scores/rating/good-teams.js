const goodTeams = {
  MEM: 5,
  GSW: 5,

  MIL: 4,
  PHI: 4,

  BKN: 3,
  PHO: 3,
  BOS: 3,
  DEN: 3,
  DAL: 3  // Lukaaaaaa
}

module.exports = function ({ home, away }, rating) {
  let homeScore = goodTeams[home.abbreviation] || 0
  let awayScore = goodTeams[away.abbreviation] || 0
  return rating + homeScore + awayScore
}
