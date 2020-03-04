const _ = require("lodash");

let dragons = [
    { name: "fluffykins", element: "lightning" },
    { name: "noomi", element: "lightning" },
    { name: "karo", element: "fire" },
    { name: "doomer", element: "timewarp" }
];

let hasElement = (element, obj) => obj.element === element;
let lightingDragons = dragons.filter((x) => hasElement("lightning", x));
console.log(lightingDragons);

// use case of currying
hasElement = _.curry((element, obj) => obj.element === element); // or _.curry(hasElement);
lightingDragons = dragons.filter(hasElement("lightning"));
console.log(lightingDragons);
