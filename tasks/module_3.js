console.log("==============================================================");
console.log("==== Module#3 Objects ====");
console.log("==============================================================");
console.log("==== Array to List ====");
console.log("==============================================================");

const arrayToList = (arr) => {
    let obj;
    for (let i = arr.length - 1; i >= 0; i--) {
        let rest = i === arr.length - 1 ? null : obj;
        obj = Object.assign({ value: arr[i] }, { rest: rest });
    }
    return obj;
};

const listToArray = (list, ...args) => {
    let arr = args[0] === undefined ? [] : args[0];
    arr.push(list.value);
    return list.rest === null ? arr : listToArray(list.rest, arr);
};

const result1 = arrayToList([10, 20]);
const result2 = listToArray(arrayToList([10, 20, 30]));

console.log(result1);
console.log(result2);
