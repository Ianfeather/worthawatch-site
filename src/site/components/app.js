import { h } from 'preact'
import { Router } from 'preact-router'
import Header from './header'

// Code-splitting is automated for routes
import Results from '../routes/results'

const App = () => {
  return (
    <div id='app'>
      <Header />
      <Router>
        <Results path='/' />
      </Router>
    </div>
  )
}

export default App;
