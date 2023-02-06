var isSameTree = function (p, q) {
  if (q.length !== p.length) {
    return false;
  }
  for (let i = 0; i < p.length; i++) {
    if (q[i] !== p[i]) {
      return false;
    }
  }
  return true;
};