import { h, render, Component } from 'preact';

export default class NoResults extends Component {
  render() {
    return (
      <div className='no-results'>
        <h1 className='center flex'>There were no games yesterday, it's probably the offseason or something. Go outside.</h1>
      </div>
    )
  }
}
