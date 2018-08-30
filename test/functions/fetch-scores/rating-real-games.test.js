/* global describe, it */

const expect = require('chai').expect
const closeness = require('../../../src/functions/fetch-scores/rating/closeness')

const realGames = require('./stubs/2017-2018.js')

// This should use multiple ratings and not just closeness when we add more to it
// Can think of them like integration tests

// These are the best games of the year so should all be nearing the 90s

describe('Rating', () => {
  it('MINOKC_20171022 - game winning 3', () => {
    expect(closeness(realGames.MINOKC_20171022)).to.be.greaterThan(79)
  })

  it('OKCPHI_20171215 - 3OT close game', () => {
    expect(closeness(realGames.OKCPHI_20171215)).to.be.greaterThan(90)
  })

  it('LALPHI_20171207 - won by 3 - young players', () => {
    expect(closeness(realGames.LALPHI_20171207)).to.be.greaterThan(80)
  })

  it('BOSHOU_20171228 - 26 point comeback to win by 2', () => {
    expect(closeness(realGames.BOSHOU_20171228)).to.be.greaterThan(86)
  })

  it('GSWHOU_20180120 - 8 point win. Tricky one!', () => {
    expect(closeness(realGames.GSWHOU_20180120)).to.be.greaterThan(84)
  })

  it('GSWBOS_20180127 - 4pt win - point guard duel', () => {
    expect(closeness(realGames.GSWBOS_20180127)).to.be.greaterThan(80)
  })

  it('OKCDEN_20180201 - comeback to lose to a game winning 3', () => {
    expect(closeness(realGames.OKCDEN_20180201)).to.be.greaterThan(80)
  })

  it('CLEMIN_20180207 - win by 2 in OT', () => {
    expect(closeness(realGames.CLEMIN_20180207)).to.be.greaterThan(85)
  })

  it('TORMIL_20180101 - win by 4 in OT - derozan has 52', () => {
    expect(closeness(realGames.TORMIL_20180101)).to.be.greaterThan(83)
  })

  it('CLEWAS_20171103 - win by 8 - lebron has 57', () => {
    expect(closeness(realGames.CLEWAS_20171103)).to.be.greaterThan(75)
  })

  it('LALGSW_20171218 - buzzer beater win by 2 in OT', () => {
    expect(closeness(realGames.LALGSW_20171218)).to.be.greaterThan(85)
  })

  it('LALGSW_20171129 - win by 4 in OT', () => {
    expect(closeness(realGames.LALGSW_20171129)).to.be.greaterThan(83)
  })
})
