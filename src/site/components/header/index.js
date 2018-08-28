import { h } from 'preact'
import style from './style'

const Header = () => (
  <div class='flex center flex-column header'>
    <h1 class={style.title}>Worth a watch?</h1>
    <h3 class={style.subtitle}>A close game's a good game!</h3>
  </div>
)

export default Header
