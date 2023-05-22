Function.prototype.call = function (context, ...args) {
  const ctx = context || globalThis;

  const fnSymbol = Symbol('fn');
  ctx[fnSymbol] = this;
  const res = ctx[fnSymbol](...args);

  delete ctx[fnSymbol];
  return res;
};

Function.prototype.apply = function (context, args) {
  const ctx = context || globalThis;

  const fnSymbol = Symbol('fn');
  ctx[fnSymbol] = this;
  const res = ctx[fnSymbol](...args);

  delete ctx[fnSymbol];
  return res;
};

Function.prototype.bind = function (context, ...args) {
  const ctx = context || globalThis;
  const self = this;

  return function (..._args) {
    const fnSymbol = Symbol('fn');
    ctx[fnSymbol] = self;
    const res = ctx[fnSymbol](...args, ..._args);

    delete ctx[fnSymbol];
    return res;
  };
};

Function.prototype.bind = function (context, ...args) {
  const ctx = context || globalThis;
  const self = this;

  return function (..._args) {
    return self.apply(ctx, [...args, ..._args]);
  };
};
