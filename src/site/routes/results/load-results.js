/* global fetch */
import localResults from '../../data/local-results.json'

function zeroPad (num) {
  return num < 10 ? '0' + num : num
}

function parseQuery (qstr) {
  let query = {}
  let a = qstr.substr(1).split('&')
  for (let i = 0; i < a.length; i++) {
    let b = a[i].split('=')
    query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '')
  }
  return query
}

function getYesterdaysDate () {
  let date = new Date()
  date.setDate(date.getDate() - 1)
  return `${date.getFullYear()}${zeroPad(date.getMonth() + 1)}${zeroPad(date.getDate())}`
}

function getDate () {
  if (window.location.search) {
    let qs = parseQuery(window.location.search)
    if (qs.date) {
      return qs.date
    }
  }
  return getYesterdaysDate()
}

export default function loadResults () {
  if (window.location.search.indexOf('localDev') > 0) {
    return Promise.resolve(localResults)
  }

  return fetch(`/.netlify/functions/fetch-scores?date=${getDate()}`)
    .then(res => res.json())
}
