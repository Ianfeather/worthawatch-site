const goodTeams = {

  LAL: 5,
  LAC: 5,

  MIL: 4,
  PHI: 4,

  BOS: 3,
  HOU: 3,
  DEN: 3,
  TOR: 3,

  POR: 2,
  UTA: 2,
  BKN: 2,
  NOP: 2, // Zionnnnnn
  DAL: 2  // Lukaaaaaa
}

module.exports = function ({ home_team, away_team }, rating) {
  let homeScore = goodTeams[home_team.abbreviation] || 0
  let awayScore = goodTeams[away_team.abbreviation] || 0
  return rating + homeScore + awayScore
}
