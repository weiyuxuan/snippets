Function.prototype.call = function (context, ...args) {
  const ctx = context || window;

  const fnSymbol = Symbol('fn');
  ctx[fnSymbol] = this;
  ctx[fnSymbol](...args);

  delete ctx[fnSymbol];
};

Function.prototype.apply = function (context, args) {
  const ctx = context || window;

  const fnSymbol = Symbol('fn');
  ctx[fnSymbol] = this;
  ctx[fnSymbol](...args);

  delete ctx[fnSymbol];
};

Function.prototype.bind = function (context, ...args) {
  const ctx = context || window;
  const self = this;

  return function (..._args) {
    const fnSymbol = Symbol('fn');
    ctx[fnSymbol] = self;
    ctx[fnSymbol](...args, ..._args);

    delete ctx[fnSymbol];
  };
};

Function.prototype.bind = function (context, ...args) {
  const ctx = context || window;
  const self = this;

  return function (..._args) {
    return self.apply(ctx, [...args, ..._args]);
  };
};
