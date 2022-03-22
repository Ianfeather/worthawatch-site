/* global window */

import { h, Component } from 'preact'
import {useEffect, useState} from "preact/hooks";
import loadResults from './load-results'
import GameList from '../../components/game-list'
import NoResults from '../../components/no-results'

const Results = () => {
  const [fetching, setFetching] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(async () => {
    try {
      const { games } = await loadResults()

      setGames(games)
      setFetching(false)
    } catch (e) {
      console.error(e)
      setGames([])
      setFetching(false)
    }
    window.addEventListener('beforeinstallprompt', () => {
      console.log('BEFORE INSTALL EVENT')
    })
  }, []);

  if (fetching) {
    return (
      <div class='flex flex-column'>
        <div class='flex center mb20'>Fetching yesterday's results...</div>
      </div>
    )
  }
  return !!games.length ? <GameList games={games} /> : <NoResults />
}

export default Results;
