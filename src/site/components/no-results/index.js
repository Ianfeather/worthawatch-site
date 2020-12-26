import { h, Component } from 'preact'

export default class NoResults extends Component {
  render () {
    return (
      <div className='no-results'>
        <h1 className='center flex'>Sorry, this is currently under maintenance as I find a new data source. Hope to be back soon!</h1>
      </div>
    )
  }
}
