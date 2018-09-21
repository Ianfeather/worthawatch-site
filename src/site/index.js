/* global window */

import './style'
import App from './components/app'

export default App

window.addEventListener('beforeinstallprompt', () => {
  console.log('BEFORE INSTALLLLLL')
})
