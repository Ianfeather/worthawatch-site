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
    expect(withTeams('LAL', 'LAC')).to.equal(BASE_RATING + 10)
  })

  it('Two good teams', () => {
    expect(withTeams('BOS', 'HOU')).to.equal(BASE_RATING + 6)
  })

  it('Two ok teams', () => {
    expect(withTeams('POR', 'UTA')).to.equal(BASE_RATING + 4)
  })

  it('Two average teams', () => {
    expect(withTeams('CHI', 'DET')).to.equal(BASE_RATING)
  })

  it('One great, one average', () => {
    expect(withTeams('LAC', 'DET')).to.equal(BASE_RATING + 5)
  })
})
