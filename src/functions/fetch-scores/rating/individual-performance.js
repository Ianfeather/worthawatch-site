module.exports = function ({home_stats = [], away_stats = []}, baseRating) {
  let stats = home_stats.concat(away_stats)

  let hasTripleDouble = ({points, assists, rebounds}) => (
    points > 9 && assists > 9 && rebounds > 9
  )

  let points = stats.map(player => {
    return {
      points: player.points,
      hasTripleDouble: hasTripleDouble(player)
    }
  })

  function getCount (arr, lower, upper = Infinity) {
    return arr.filter(player => player.points >= lower && player.points <= upper)
      .reduce((count, player) => count + player.hasTripleDouble ? 2 : 1, 0)
  }

  /*
   * Add a value to the rating for each occurence of a high score
   * and boost it if they got a triple double
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

  let rating = getRatingForPoints(baseRating)

  // If there's a 50 point game that's not close it's still always worth watching
  // so just raise that score to a respectable one
  if (getCount(points, 50) && rating < 80) {
    rating = 80
  }

  return rating
}
