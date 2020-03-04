That's possible to make non-curryable function curryable 
```
npm i -g npm
npm i --save lodash
```

```js
const _ = require("lodash");

let usualFunction = (param1, param2) => {};
usualFunction = _.curry(usualFunction);
```

[Lodash](https://lodash.com/)  
[Currying - Part 6 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=iZLP4qOwY8I)  