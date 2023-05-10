function cachingDecorator (fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('from cache', cache);
      return cache.get(key);
    }

    const result = fn.call(this, ...args);
    cache.set(key, result);
    return result;
  };
}
