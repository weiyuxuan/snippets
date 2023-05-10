function uniq1 (arr) {
  const res = [];
  for (let i = 0; i < res.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      res.push(arr[i]);
    }
  }
  return res;
}

function uniq2 (arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function uniq3 (arr) {
  return [...new Set(arr)];
}

function uniq4 (arr) {
  return Array.from(new Set(arr));
}
