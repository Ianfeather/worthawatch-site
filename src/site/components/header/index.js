import { h } from 'preact'
import style from './style'

const Header = () => (
  <div>
    <div class='flex center flex-column header'>
      <h1 class={style.title}>Worth a watch?</h1>
      <div class={style.subtitle}>
        <p class={style.quote}>Find out if yesterday's NBA games are worth catching up with on League Pass.</p>
      </div>
    </div>
    <div class='flex flex-column' />
  </div>
)

export default Header
