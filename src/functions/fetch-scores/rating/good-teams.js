const goodTeams = {
  GSW: 5,
  HOU: 5,
  LAL: 5,
  BOS: 5,

  PHI: 3,
  POR: 3,
  OKC: 3,
  UTA: 3,

  TOR: 2,
  MIL: 2,
  DEN: 2,
  DAL: 2 // Lukaaaaaa
}

module.exports = function ({ home_team, away_team }, rating) {
  let homeScore = goodTeams[home_team.abbreviation] || 0
  let awayScore = goodTeams[away_team.abbreviation] || 0
  return rating + homeScore + awayScore
}
