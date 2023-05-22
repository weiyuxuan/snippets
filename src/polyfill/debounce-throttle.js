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
  let savedArgs;
  return function newFn (...args) {
    if (!canRun) {
      savedArgs = args;
      return;
    }
    canRun = false;
    fn(...args);
    setTimeout(() => {
      canRun = true;
      if (savedArgs) {
        newFn(...savedArgs);
        savedArgs = null;
      }
    }, delay);
  };
}
