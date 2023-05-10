function cloneDeep (target) {
  if (target === undefined || target === null) return target;

  if (typeof target !== 'object') return target;

  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  if (target instanceof HTMLElement) return target;

  if (Array.isArray(target)) {
    const clone = [];
    for (let i = 0; i < target.length; i++) {
      const item = target[i];
      clone.push(cloneDeep(item));
    }
    return clone;
  }

  if (typeof target === 'object') {
    const clone = {};
    Object.keys(target).forEach(key => {
      const item = target[key];
      clone[key] = cloneDeep(item);
    });
    return clone;
  }
}
