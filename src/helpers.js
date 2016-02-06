export function sortByScore(items) {
  items.sort(function(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  });
  return items;
}

export function inMilliseconds(minutes) {
  return (minutes * 60000);
}

export function printLastUpdateTime() {
  var now = new Date;
  var theTime = pad(now.getHours()) + ":" + pad(now.getMinutes());
  console.log('Last updated at ' + theTime);
}

// Private
function pad(n) { return ("0" + n).slice(-2); }