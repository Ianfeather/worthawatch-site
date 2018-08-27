var zeroPad = function(num) {
  return num < 10 ? "0" + num : num;
};

var parseQuery = function (qstr) {
  var query = {};
  var a = qstr.substr(1).split('&');
  for (var i = 0; i < a.length; i++) {
      var b = a[i].split('=');
      query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
  }
  return query;
}

var getYesterdaysDate = function() {
    var date = new Date();
    date.setDate(date.getDate()-1);
    return `${date.getFullYear()}${zeroPad(date.getMonth() + 1)}${zeroPad(date.getDate())}`;
};

var getDate = function() {
  if (window.location.search) {
    var qs = parseQuery(window.location.search);
    if (qs.date) {
      return qs.date;
    }
  }
  return getYesterdaysDate();
}

export default function loadResults() {
  return fetch(`/.netlify/functions/fetch-scores?date=${getDate()}`)
    .then(res => res.json())
}

