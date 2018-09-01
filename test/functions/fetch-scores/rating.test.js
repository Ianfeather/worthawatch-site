/* global describe, it */

const expect = require('chai').expect
const createEvent = require('./utils').createEvent
const closeness = require('../../../src/functions/fetch-scores/rating/closeness')

const scores = (home, away) => closeness(createEvent(home, away), 80)

describe('Closeness Rating', () => {
  describe('Total Scores', () => {
    it('1 point', () => {
      expect(scores(84, 85)).to.equal(80)
    })

    it('2 point', () => {
      expect(scores(84, 86)).to.equal(80)
    })

    it('3 point', () => {
      expect(scores(84, 87)).to.equal(80)
    })

    it('10 point', () => {
      expect(scores(84, 94)).to.equal(66)
    })

    it('20 point', () => {
      expect(scores(84, 104)).to.equal(52)
    })
  })

  describe('Comebacks', () => {
    it('with no comeback', () => {
      expect(scores([25, 25, 25, 25], [25, 25, 25, 26])).to.equal(80)
    })

    it('down 20 at the half, close finish', () => {
      expect(scores([25, 25, 25, 25], [25, 0, 50, 26])).to.equal(84)
    })

    it('down 30 at the half, close finish', () => {
      expect(scores([25, 30, 25, 25], [25, 0, 50, 31])).to.equal(88)
    })

    it('down 20 after three, close finish', () => {
      expect(scores([25, 25, 25, 25], [25, 25, 0, 51])).to.equal(88)
    })

    it('down 20 after three, win by 5', () => {
      expect(scores([25, 25, 25, 25], [25, 25, 0, 55])).to.equal(77)
    })

    it('down 20 after three, win by 20 (should be higher!!)', () => {
      expect(scores([25, 25, 25, 25], [25, 25, 0, 70])).to.equal(57)
    })
  })

  describe('Overtimes', () => {
    it('with no overtime', () => {
      expect(scores([25, 25, 25, 25], [25, 25, 25, 26])).to.equal(80)
    })

    it('one overtime', () => {
      expect(scores([25, 25, 25, 25, 25], [25, 25, 25, 25, 26])).to.equal(83)
    })

    it('one overtime + comeback', () => {
      expect(scores([25, 0, 50, 25, 25], [25, 25, 25, 25, 26])).to.equal(91)
    })

    it('two overtimes', () => {
      expect(scores([25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 26])).to.equal(86)
    })

    it('two overtimes + comeback', () => {
      expect(scores([25, 0, 50, 25, 25, 25], [25, 25, 25, 25, 25, 26])).to.equal(95)
    })

    it('three overtimes', () => {
      expect(scores([25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 26])).to.equal(89)
    })

    it('three overtimes + comeback', () => {
      expect(scores([25, 0, 50, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 26])).to.equal(98)
    })

    it('four overtimes', () => {
      expect(scores([25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 26])).to.equal(93)
    })

    it('four overtimes + comeback', () => {
      expect(scores([25, 0, 50, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 26])).to.equal(100)
    })
  })
})
