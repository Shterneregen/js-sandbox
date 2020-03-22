// ==============================================================
// ==== Delay ====
// ==============================================================

delay(2000).then(() => console.log("Hey!")); // → ‘Hey!’ in 1 second

function delay(timeout, text) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (text) {
        console.log(text);
      }
      resolve();
    }, timeout);
  });
}
delay(1000, "hi");

// ==============================================================
// ==== Array of promises in series ====
// ==============================================================
runPromisesInSeries([
  () => delay(1000, "message in 1 second"),
  () => delay(2000, "message in 3 seconds")
]);

function runPromisesInSeries(tasks) {
  let result = Promise.resolve();
  tasks.forEach(task => {
    result = result.then(() => task());
  });
  return result;
}

// ==============================================================
// ==== Building Promise.all ====
// ==============================================================
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then(promise => resolve(promise))
      .catch(error => reject(error));
  });
}

Promise_all([]).then(array => {
  console.log("This should be []:", array);
});

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });

// ==============================================================
// ==== Fibonacci ====
// ==============================================================
function fibonacci(number) {
  if (number === undefined || isNaN(number)) {
    console.log("Put number here please!");
    return [-1];
  }
  if (number < 0) {
    console.log("Number should be positive!");
    return [-1];
  }
  if (number === 0) {
    return [0];
  }
  if (number === 1) {
    return [0, 1];
  }
  let arr = [0, 1];
  for (let i = 2; i < number; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

let [...bad_1] = fibonacci("kkkkk");
console.log("bad_1", bad_1);
let [...bad_2] = fibonacci();
console.log("bad_2", bad_2);
let [...bad_3] = fibonacci(-5);
console.log("bad_3", bad_3);

let [...first10] = fibonacci(10);
console.log("first10", first10); // → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// ==============================================================
// ==== Generator helper ====
// ==============================================================
const asyncTask1 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("first resolved"), 1000)
  );
const asyncTask2 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("second resolved"), 1000)
  );
const asyncTask3 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject("third rejected"), 1000)
  );

function helper(generator) {
  const iterator = generator();

  function iterate(iteration) {
    if (iteration.done) return iteration.value;
    const promise = iteration.value;
    return promise.then(x => iterate(iterator.next(x)));
  }

  return iterate(iterator.next());
}

helper(function* main() {
  //   try {
  const a = yield asyncTask1();
  const b = yield asyncTask2();
  console.log(a);
  console.log(b);
  const c = yield asyncTask3();
  //   } catch (e) {
  //     console.log("error happened", e);
  //   }
}).catch(e => console.log("error happened", e));

// → ‘first resolved’
// → ‘second resolved’
// → ‘error happened third rejected’

// ==============================================================
// ==== Use fetch to work with fake json api server ====
// ==============================================================
// npm install node-fetch
const fetch = require("node-fetch");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

async function fetchAsync(url, method) {
  let response = await fetch(url, { method: method || "GET" });
  if (response.ok) return await response.json();
  throw new Error(response.status);
}

fetchAsync("https://jsonplaceholder.typicode.com/comments")
  .then(data => console.log(data))
  .catch(reason => console.log(reason.message));

fetchAsync("https://jsonplaceholder.typicode.com/posts/" + getRandomInt(0, 50))
  .then(data => console.log(data))
  .catch(reason => console.log(reason.message));

fetchAsync(
  "https://jsonplaceholder.typicode.com/users/" + getRandomInt(1, 10),
  "PUT"
)
  .then(data => console.log(data))
  .catch(reason => console.log(reason.message));

fetchAsync(
  "https://jsonplaceholder.typicode.com/users/" + getRandomInt(1, 10),
  "DELETE"
)
  .then(data => console.log(data))
  .catch(reason => console.log(reason.message));
