//node 22 fromAsync.js
const arrayIterable = {
  async *[Symbol.asyncIterator]() {
    for (let i = 0; i < 5; i++) {
      await new Promise((resolve) => setTimeout(resolve), i);
      yield i;
    }
  },
};

(async () => {
  const array = await Array.fromAsync(arrayIterable);
  // [0, 1, 2, 3, 4]
  console.log("Array.fromAsync ", array);
})();
//using for await of
(async () => {
  for await (const value of arrayIterable) {
    console.log("for await of ", value);
  }
})();

// const promiseOfIterable = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve([1, 2, 3, 4, 5]);
// 	}, 1000);
// });

// (async () => {
// 	const array = await Array.fromAsync(promiseOfIterable);
// 	console.log(array); // [1, 2, 3, 4, 5]
// })();
