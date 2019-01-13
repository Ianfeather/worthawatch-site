import { h } from 'preact'
import style from './style'

const Header = () => (
  <div>
    <div class='flex center flex-column header'>
      <h1 class={style.title}>Worth a watch?</h1>
      <div class={style.subtitle}>
        <p class={style.quote}>Then there’s the absolute degenerates, those who fell in love with a city or a team and have to navigate five-hour (or more) time differences to keep up with early games tipping off after midnight their time.</p>
        <a href='https://theathletic.com/211607/2018/01/20/trusting-the-process-from-across-the-atlantic-ocean/' class={style.attribution}>Derek Bodner, The Athletic</a>
        {/* There are many different classifications of NBA fans overseas */}
      </div>
    </div>
    <div class='flex flex-column' />
  </div>
)

export default Header
