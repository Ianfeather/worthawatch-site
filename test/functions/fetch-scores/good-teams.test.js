/* global describe, it */

const expect = require('chai').expect
const getRating = require('../../../src/functions/fetch-scores/rating/good-teams')

const BASE_RATING = 80

const withTeams = (home, away) => getRating(
  {
    home_team: { abbreviation: home },
    away_team: { abbreviation: away }
  }, BASE_RATING
)

describe('Good Teams Rating', () => {
  it('Two great teams', () => {
    expect(withTeams('GSW', 'HOU')).to.equal(BASE_RATING + 10)
  })

  it('Two good teams', () => {
    expect(withTeams('OKC', 'PHI')).to.equal(BASE_RATING + 6)
  })

  it('Two ok teams', () => {
    expect(withTeams('TOR', 'DEN')).to.equal(BASE_RATING + 4)
  })

  it('Two average teams', () => {
    expect(withTeams('CHI', 'DET')).to.equal(BASE_RATING)
  })

  it('One great, one average', () => {
    expect(withTeams('GSW', 'DET')).to.equal(BASE_RATING + 5)
  })
})
