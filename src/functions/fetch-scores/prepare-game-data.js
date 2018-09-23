const getRating = require('./rating/aggregate')

module.exports = (events) => {
  return events.map((event) => {
    let game = {
      home: {
        name: `${event.home_team.first_name} ${event.home_team.last_name}`,
        img: event.home_team.abbreviation
      },
      away: {
        name: `${event.away_team.first_name} ${event.away_team.last_name}`,
        img: event.away_team.abbreviation
      }
    }

    if (event.event_status !== 'completed') {
      game.completed = false
      return game
    } else {
      game.completed = true
    }

    game.rating = getRating(event)

    return game
  })
}
