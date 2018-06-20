const request = require('request');

module.exports = {
  getScores: function(event, cb) {
    var dateUrl = 'https://erikberg.com/events.json?date=' + event.queryStringParameters.date + '&sport=nba';

    var opts = {
      auth: {
        bearer: process.env.ERIKBERG_AUTH_TOKEN
      },
      headers: {
        'User-Agent': 'ianfeather'
      }
    },
    response;

    request.get(dateUrl, opts, function (error, response, body) {
      if (error || response.statusCode !== 200) {
        console.log('ERROR: API error: ' + err);
        return cb(null, { error: error });
      }
      var result = JSON.parse(body);

      var games = result.event.map(function(game) {
        var diff = game.home_points_scored - game.away_points_scored;

        return {
          home: {
            name: game.home_team.abbreviation,
            score: game.home_points_scored
          },
          away: {
            name: game.away_team.abbreviation,
            score: game.away_points_scored
          },
          close: diff < 10 && diff > -10,
          ongoing: game.home_points_scored == -1
        }
      });

      return cb(null, { games: games, fromCache: false });
    });
  }
}
