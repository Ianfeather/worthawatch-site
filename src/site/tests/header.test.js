/* global describe, test, expect */

import { h } from 'preact'
import Header from '../components/header'
import { shallow } from 'preact-render-spy'

describe('Initial Test of the Header', () => {
  test('Header renders 3 nav items', () => {
    const context = shallow(<Header />)
    expect(context.find('h1').text()).toBe('Worth a watch?')
  })
})
