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

    it('40 TD, 50', () => {
      expect(withStats([{ points: 40, assists: 10, rebounds: 10 }, { points: 50 }])).to.equal(100)
    })
  })
})
