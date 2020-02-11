
[JavaScript Essential Training](https://www.linkedin.com/learning/javascript-essential-training-3)


Update HTML body on fly
```
let date = new Date();
document.body.innerHTML = "<h1>The date today is: " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h1>";
```