/* global describe, it */

const expect = require('chai').expect
const getRating = require('../../../src/functions/fetch-scores/rating/individual-performance')

const withStats = stats => getRating({ home_stats: stats }, 80)

describe('Individual Performance Rating', () => {
  describe('points', () => {
    it('50', () => {
      expect(withStats([{ points: 50 }])).to.equal(90)
    })

    it('50, 50', () => {
      expect(withStats([{ points: 50 }, { points: 50 }])).to.equal(100)
    })

    it('40, 50', () => {
      expect(withStats([{ points: 40 }, { points: 50 }])).to.equal(95)
    })

    it('40, 40', () => {
      expect(withStats([{ points: 40 }, { points: 40 }])).to.equal(90)
    })

    it('35, 35', () => {
      expect(withStats([{ points: 35 }, { points: 35 }])).to.equal(86)
    })

    it('30, 30', () => {
      expect(withStats([{ points: 30 }, { points: 30 }])).to.equal(80)
    })

    it('35, 45, 55', () => {
      expect(withStats([{ points: 35 }, { points: 45 }, { points: 55 }])).to.equal(98)
    })
  })

  describe('assists', () => {
    it('10', () => {
      expect(withStats([{ assists: 10 }])).to.equal(80)
    })

    it('20', () => {
      expect(withStats([{ assists: 20 }])).to.equal(90)
    })
  })

  describe('big triple doubles', () => {
    it('10, 10, 10', () => {
      expect(withStats([
        { points: 10 },
        { assists: 10 },
        { rebounds: 10 }
      ])).to.equal(80)
    })

    it('28, 10, 10', () => {
      expect(withStats([ { points: 28, assists: 10, rebounds: 10 } ])).to.equal(90)
    })
  })
})
