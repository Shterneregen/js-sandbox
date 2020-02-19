console.log("==============================================================");
console.log("==== Module#2 Functions ====");
console.log("==============================================================");
console.log("==== Currying ====");
console.log("==============================================================");
const mergeWords = (w1) => {
    return (w2) => {
        return (w3) => {
            return (w4) => {
                return (w5) => {
                    return [w1, w2, w3, w4].join(" ");
                };
            };
        };
    };
};

const result = mergeWords("GNU")("is")("not")("Unix.")();
console.log(result);

console.log("==============================================================");
console.log("==== Every/Some ====");
console.log("==============================================================");
const goodUsers = [{id: 1}, {id: 2}, {id: 3}];
// `checkUsersValid` is the function you'll define
const checkUsersValid = (goodArr) => {
    return function (arrToCheck) {
        let fine = true;
        for (let e1 of arrToCheck) {
            let count = 0;
            for (let e2 of goodArr) {
                if (e1["id"] === e2["id"]) {
                    count++;
                    break;
                }
            }
            fine = fine && count > 0;
            if (!fine) break;
        }
        return fine;
    };
};

const testAllValid = checkUsersValid(goodUsers);

const result1 = testAllValid([{id: 2}, {id: 1}]);
console.log("Only valid", result1);

const result2 = testAllValid([{id: 2}, {id: 4}, {id: 1}]);
console.log("Only valid", result2);

console.log("==============================================================");
console.log("==== Reduce ====");
console.log("==============================================================");
const countWords = (inputWords) => {
    let map = new Map();
    for (let f of inputWords) {
        let i = typeof map.get(f) == "undefined" ? 1 : map.get(f) + 1;
        map.set(f, i);
    }
    return Array.from(map).reduce((obj, [key, value]) => Object.assign(obj, {[key]: value}), {});
};

const inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];
console.log(countWords(inputWords));

console.log("==============================================================");
console.log("==== Palindrome ====");
console.log("==============================================================");
const isPalindrome = (string) => {
    let pal = string === string.split("").reverse().join("")
    return pal
        ? 'The entry is a palindrome'
        : 'Entry is not a palindrome';
}

console.log(isPalindrome('madam'))
console.log(isPalindrome('fox'))

console.log("==============================================================");
console.log("==== Recursion ====");
console.log("==============================================================");

const factorial = (num) => {
    if (num <= 2) return num
    return num * factorial(num - 1)
};
console.log(factorial(1))
console.log(factorial(5))

const amountToCoins = () => {
};

const repeat = (callback, count) => {
};

repeat(console.log('Wassup'), 5);

const reduce = () => {
};
