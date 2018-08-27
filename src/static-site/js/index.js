import localResults from '../data/local-results.json';
import showResults from './imports/show-results';
import loadResults from './imports/load-results';

if (window.location.search.indexOf('localDev') > 0) {
  showResults(localResults);
} else {
  loadResults().then(showResults);
}
