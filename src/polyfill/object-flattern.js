function flattenObj (obj) {
  const res = {};

  function flat (item, prefix = '') {
    // base type
    if (typeof item !== 'object' || item === null) {
      res[prefix] = item;
      return;
    }
    // array type
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flat(item[i], `${prefix}[${i}]`);
      }
    }
    // object type
    if (typeof item === 'object') {
      Object.keys(item).forEach((key) => {
        const val = item[key];
        flat(val, `${prefix ? prefix + '.' : ''}${key}`);
      });
    }
  }

  flat(obj);

  return res;
}

const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 }
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3
};

console.log(flattenObj(obj));
