// concurrency-limited promise pool

async function promisePool (functions, n) {
  const queue = new Set();
  const resolved = [];

  for (const task of functions) {
    const x = task().then((res) => {
      resolved.push(res);
      queue.delete(x);
    });
    queue.add(x);
    if (queue.size >= n) {
      await Promise.race(queue);
    }
  }

  await Promise.allSettled(queue);
  return resolved;
}
