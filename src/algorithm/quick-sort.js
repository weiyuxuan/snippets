// simple quick sort

function quickSort (arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];

  if (arr.length < 2) {
    return arr;
  }

  for (let i = 1, len = arr.length; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
