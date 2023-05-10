function flatten (arr, level) {
  if (level === 0 || !Array.isArray(arr)) return arr;

  const flatArr = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      flatArr.push(...flatten(item, level - 1));
    } else {
      flatArr.push(item);
    }
  }

  return flatArr;
}
