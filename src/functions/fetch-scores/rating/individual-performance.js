module.exports = function ({home_stats = [], away_stats = []}, baseRating) {
  let stats = home_stats.concat(away_stats)
  let flatten = arr => arr.filter(x => x)

  let points = stats.map(player => player.points)
  let assists = stats.map(player => player.assists)

  // Triple Doubles just when you get 25 points because they're so common
  let tripleDoubles = flatten(stats.map(player => (
    player.points > 25 && player.assists > 9 && player.rebounds > 9
  )))

  function getCount (arr, lower, upper = Infinity) {
    return arr.filter(val => val >= lower && val <= upper).length
  }

  /*
   * Add a value to the rating for each occurence of a good stat
   */
  function getRatingForPoints (rating) {
    // 35 point games
    rating += (3 * getCount(points, 35, 39))

    // 40 point games
    rating += (5 * getCount(points, 40, 49))

    // 50 point games
    rating += (10 * getCount(points, 50))

    return rating
  }

  function getRatingForAssists (rating) {
    return 10 * getCount(assists, 20)
  }

  function getRatingForTripleDoubles (startRating) {
    return 10 * tripleDoubles.length
  }

  let rating = getRatingForPoints(baseRating)
  rating += getRatingForAssists(rating)
  rating += getRatingForTripleDoubles(rating)

  // If there's a 50 point game that's not close it's still always worth watching
  // so just raise that score to a respectable one
  if (getCount(points, 50) && rating < 80) {
    rating = 80
  }

  return rating
}
