import { h, Component } from 'preact'

import loadResults from './load-results'
import GameList from '../../components/game-list'
import NoResults from '../../components/no-results'

export default class Results extends Component {
  constructor () {
    super()
    this.state.fetching = true
    this.state.games = []
  }

  componentDidMount () {
    loadResults()
      .then(({ games }) => {
        this.setState({ games, fetching: false })
      })
      .catch(e => {
        console.error(e)
        this.setState({ games: [], fetching: false })
      })
  }

  render (props, state) {
    if (state.fetching) {
      return (
        <div class='flex flex-column'>
          <div class='flex center mb20'>Fetching yesterday's results...</div>
        </div>
      )
    }
    return this.state.games.length ? <GameList games={this.state.games} /> : <NoResults />
  }
}
