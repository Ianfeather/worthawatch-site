import { h } from 'preact'
import styles from './style'

const ratingClass = (rating) => {
  if (rating > 74) return 'rating-high'
  if (rating > 69) return 'rating-medium'
  return 'rating-low'
}

export const Game = ({ homeTeamName, awayTeamName, rating, homeImage, awayImage, completed }) => {
  return (
    <div className='game flex'>
      {
        completed
          ? <div className={`rating ${ratingClass(rating)}`}>{rating}</div>
          : <div className='incomplete'>In play</div>
      }
      <div className='team flex team-home'>
        <img src={`assets/img/${homeImage}.gif`} />
        <h2 className='team-name'>{homeTeamName}</h2>
      </div>
      <div className='team flex'>
        <img src={`assets/img/${awayImage}.gif`} />
        <h2 className='team-name'>{awayTeamName}</h2>
      </div>
    </div>
  )
}

const compareRatings = (a, b) => {
  if (a.rating < b.rating) return 1
  if (!b.completed) return 1
  if (a.rating > b.rating) return -1
  return 0
}

const GameList = ({ games }) => {
  return (
    <div>
      <h2 className='center flex mb40'>Yesterday's games, rated for League Pass</h2>
      <div className='games'>
        {
          games.sort(compareRatings).map((game) => (
            <Game
              homeImage={game.home.abbreviation.toLowerCase()}
              homeTeamName={game.home.name}
              awayImage={game.away.abbreviation.toLowerCase()}
              awayTeamName={game.away.name}
              rating={game.rating}
              completed={game.completed}
            />
          ))
        }
      </div>
      <p className={`${styles.rating} center flex mb40`}>Ratings are calculated using closeness, comebacks, individual and team performances.</p>
      <p className={`${styles.rating} center flex mb40`}>If you take issue with the ratings contact <a className={styles.link} href="https://www.twitter.com/ianfeather/"> @ianfeather</a>!</p>
    </div>
  )
}

export default GameList;
