// Generators in JavaScript - What, Why and How - FunFunFunction #34
// https://www.youtube.com/watch?reload=9&v=ategZqxHkz4

// npm install node-fetch
const fetch = require("node-fetch");
// npm install co
const co = require("co");
/*
fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => post.title)
    .then(x => console.log('Title:', x))
*/
/*
co(function* () {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1'
    const response = yield fetch(uri)
    const post = yield response.json()
    const title = post.title
    console.log('Title:', title)
})
*/
/*
function run(generator) {
    const iterator = generator()
    const iteration = iterator.next()
    const promise = iteration.value
    promise.then(response => {
        const anotherIter = iterator.next(response)
        const anotherPromise = anotherIter.value
        anotherPromise.then(post => iterator.next(post))
    })
}
*/

run(function*() {
  const uri = "http://jsonplaceholder.typicode.com/posts/1";
  const response = yield fetch(uri);
  const post = yield response.json();
  const title = post.title;
  console.log("Title:", title);
});

function run(generator) {
  const iterator = generator();

  function iterate(iteration) {
    if (iteration.done) return iteration.value;
    const promise = iteration.value;
    return promise.then(x => iterate(iterator.next(x)));
  }

  return iterate(iterator.next());
}
