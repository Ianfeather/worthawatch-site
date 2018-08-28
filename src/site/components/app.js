import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Header from './header'

// Code-splitting is automated for routes
import Results from '../routes/results'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  };

  render () {
    return (
      <div id='app'>
        <Header />
        <Router onChange={this.handleRoute}>
          <Results path='/' />
        </Router>
      </div>
    )
  }
}
