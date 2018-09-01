/* global describe, it */

const expect = require('chai').expect
const getRating = require('../../../src/functions/fetch-scores/rating/aggregate')

const realGames = require('./stubs/2017-2018.js')

// This should use multiple ratings and not just closeness when we add more to it
// Can think of them like integration tests

// These are the best games of the year so should all be nearing the 90s

describe('Integration', () => {
  xit('MINOKC_20171022 - game winning 3', () => {
    expect(getRating(realGames.MINOKC_20171022)).to.be.greaterThan(79)
  })

  xit('OKCPHI_20171215 - 3OT close game', () => {
    expect(getRating(realGames.OKCPHI_20171215)).to.be.greaterThan(90)
  })

  xit('LALPHI_20171207 - won by 3 - young players', () => {
    expect(getRating(realGames.LALPHI_20171207)).to.be.greaterThan(80)
  })

  xit('BOSHOU_20171228 - 26 point comeback to win by 2', () => {
    expect(getRating(realGames.BOSHOU_20171228)).to.be.greaterThan(86)
  })

  xit('GSWHOU_20180120 - 8 point win. Tricky one!', () => {
    expect(getRating(realGames.GSWHOU_20180120)).to.be.greaterThan(84)
  })

  xit('GSWBOS_20180127 - 4pt win - point guard duel', () => {
    expect(getRating(realGames.GSWBOS_20180127)).to.be.greaterThan(80)
  })

  xit('OKCDEN_20180201 - comeback to lose to a game winning 3', () => {
    expect(getRating(realGames.OKCDEN_20180201)).to.be.greaterThan(80)
  })

  xit('CLEMIN_20180207 - win by 2 in OT', () => {
    expect(getRating(realGames.CLEMIN_20180207)).to.be.greaterThan(85)
  })

  xit('TORMIL_20180101 - win by 4 in OT - derozan has 52', () => {
    expect(getRating(realGames.TORMIL_20180101)).to.be.greaterThan(83)
  })

  xit('CLEWAS_20171103 - win by 8 - lebron has 57', () => {
    expect(getRating(realGames.CLEWAS_20171103)).to.be.greaterThan(75)
  })

  xit('LALGSW_20171218 - buzzer beater win by 2 in OT', () => {
    expect(getRating(realGames.LALGSW_20171218)).to.be.greaterThan(85)
  })

  xit('LALGSW_20171129 - win by 4 in OT', () => {
    expect(getRating(realGames.LALGSW_20171129)).to.be.greaterThan(83)
  })
})
