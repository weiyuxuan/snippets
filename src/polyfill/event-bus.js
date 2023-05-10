class EventBus {
  constructor () {
    this.eventBus = {};
  }

  on (eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName];

    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }

    handlers.push({ eventCallback, thisArg });
  }

  emit (eventName, ...args) {
    const handlers = this.eventBus[eventName] || [];

    handlers.forEach((handler) => {
      handler.eventCallback.apply(handler.thisArg, args);
    });
  }

  off (eventName, eventCallback) {
    const handlers = this.eventBus[eventName] || [];

    if (handlers.length === 0) {
      delete this.eventBus[eventName];
      return;
    }

    this.eventBus[eventName] = this.eventBus[eventName].filter(cb => {
      return cb.eventCallback !== eventCallback;
    });
  }

  once (eventName, eventCallback, thisArg) {
    const tempCallback = (...args) => {
      this.off(eventName, tempCallback);
      eventCallback.apply(thisArg, args);
    };

    this.on(eventName, tempCallback);
  }
}
