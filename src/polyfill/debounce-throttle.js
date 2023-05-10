function debounce (fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

function throttle (fn, delay) {
  let canRun = true;

  return function (...args) {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.call(this, ...args);
      canRun = true;
    }, delay);
  };
}
