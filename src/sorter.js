var sortByScore = function(items) {
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

export default sortByScore;