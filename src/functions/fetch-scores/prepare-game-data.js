const getRating = require('./rating/aggregate')

module.exports = (data) => {
  return data.gameHeader.map(({ gameId, homeTeamId, visitorTeamId, gameStatusText }) => {

    const mapper = team => ({
      id: team.teamId,
      name: team.teamCityName,
      abbreviation: team.teamAbbreviation,
      total: team.pts,
      quarterTotals: [team.ptsQtr1, team.ptsQtr2, team.ptsQtr3, team.ptsQtr4],
      otTotals: [team.ptsOt1, team.ptsOt2, team.ptsOt3]
    });

    let home = data.lineScore
      .filter(({ teamId }) => teamId === homeTeamId)
      .map(mapper)
      .reduce((acc, next) => next, {});

    let away = data.lineScore
      .filter(({ teamId }) => teamId === visitorTeamId)
      .map(mapper)
      .reduce((acc, next) => next, {});

    let game = {
      home,
      away,
      completed: gameStatusText === 'Final'
    }

    if (game.completed) {
      game.rating = getRating(game)
    }

    return game
  })
}
