function flattenObj (obj) {
  const res = {};

  function flatten (obj, keyName) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flatten(obj[key], `${keyName}.${key}`);
      } else {
        res[`${keyName}.${key}`] = obj[key];
      }
    }
  }

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flatten(obj[key], `${key}`);
    } else {
      res[key] = obj[key];
    }
  }

  return res;
}
