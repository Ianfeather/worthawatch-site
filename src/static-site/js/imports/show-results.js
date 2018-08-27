import { h, render, Component } from 'preact';
import NoResults from '../components/no-results';
import GameList from '../components/game-list';

export default function showResults(data) {
  document.querySelector('#js-loading').remove()
  render(
    !!data.games.length ? <GameList games={data.games} /> : <NoResults />,
    document.querySelector('#js-app')
  )
}
