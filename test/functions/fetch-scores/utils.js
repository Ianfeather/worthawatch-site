module.exports = {
  createEvent: (home, away) => {
    if (Array.isArray(home) && Array.isArray(away)) {
      return {
        "away_period_scores": away,
        "home_period_scores": home,
        "away_points_scored": away.reduce((acc, cur) => acc + cur, 0),
        "home_points_scored": home.reduce((acc, cur) => acc + cur, 0)
      }
    }

    return {
        "away_period_scores": Array(4).fill(away / 4),
        "home_period_scores": Array(4).fill(home / 4),
        "away_points_scored": away,
        "home_points_scored": home
    }
  }
}
