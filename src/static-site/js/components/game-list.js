import { h, render, Component } from 'preact';

const ratingClass = (rating) => {
  if (rating > 74) return 'rating-high';
  if (rating > 69) return 'rating-medium';
  return 'rating-low';
}

export class Game extends Component {
  render({ homeTeamName, awayTeamName, rating, homeImage, awayImage, completed }) {
    return (
      <div className="game flex">
        {
          completed ?
          <div className={`rating ${ ratingClass(rating)}`}>{rating}</div> :
          <div className="incomplete">"N/A"</div>
        }
        <div className="team flex team-home">
          <img src={`img/${homeImage}.gif`} />
          <h2 className="team-name">{homeTeamName}</h2>
        </div>
        <div className="team flex">
          <img src={`img/${awayImage}.gif`} />
          <h2 className="team-name">{awayTeamName}</h2>
        </div>
      </div>
    );
  }
}

const compareRatings = (a, b) => {
  if (a.rating < b.rating) return 1;
  if (!b.completed) return 1;
  if (a.rating > b.rating) return -1;
  return 0;
}

export default class GameList extends Component {
  render({ games }) {
    return (
      <div>
        <h2 className='title center flex mb60'>Yesterday:</h2>
        <div className="games">
          {
            games.sort(compareRatings).map((game) => (
              <Game
                homeImage={game.home.img.toLowerCase()}
                homeTeamName={game.home.name}
                awayImage={game.away.img.toLowerCase()}
                awayTeamName={game.away.name}
                rating={game.rating}
                completed={game.completed}
                />
            ))
          }
        </div>
      </div>
    )
  }
}
