// ==== Module#1 Basics ====

console.log("==============================================================");
console.log("==== Change the capitalization of all letters in a string ====");
console.log("==============================================================");
const changeCase = (string) => {
    let text = '';
    [...string].forEach((letter) => {
        text += /[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase();
    });
    return text;
};

let str1 = "21century";
let str2 = "Hybris";
console.log(str1, "->", changeCase(str1)); // Output: 21CENTURY
console.log(str2, "->", changeCase(str2)); // Output: hYBRIS

console.log("==============================================================");
console.log("==== Filter out the non-unique values in an array ====");
console.log("==============================================================");
const filterNonUnique = (arr) => {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
};

let inputArr = [1, 2, 2, 3, 4, 4, 5];
console.log(inputArr, "->", filterNonUnique(inputArr));

console.log("==============================================================");
console.log("==== Sort string in alphabetical order ====");
console.log("==============================================================");
const alphabetSort = (str) => {
    let arr = str.split("");
    let sorted = arr.sort();
    return sorted.join("");
};
let str = "Python";
console.log(str, "->", alphabetSort(str));

console.log("==============================================================");
console.log("==== Get second min integer ====");
console.log("==============================================================");
const getSecondMinimum = (arr) => {
    arr.sort();
    return arr[1];
};
let inputArr2 = [5, 0, 7, 3, 8];
console.log(inputArr2, "->", getSecondMinimum(inputArr2));

console.log("==============================================================");
console.log("==== Double every even integer ====");
console.log("==============================================================");
const doubleEveryEven = (arr) => {
    return arr.map((num) => {
        return num % 2 ? num : num * 2;
    });
};

let inputArr3 = [2, 0, 7, 3, 8, 4];
console.log(inputArr3, "->", doubleEveryEven(inputArr3));

console.log("==============================================================");
console.log("==== Create array with all possible pairs of two arrays ====");
console.log("==============================================================");
const getArrayElementsPairs = (arr1, arr2) => {
    return arr1.flatMap(item => arr2.map(i => [item, i]));
};

let arr1 = [1, 2];
let arr2 = ["a", "b"];
console.log(arr1, arr2, "->", getArrayElementsPairs(arr1, arr2));

console.log("==============================================================");
console.log("==== Deep equal ====");
console.log("==============================================================");
// https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison/25456134
const deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

console.log("==============================================================");
console.log("==== Format date ====");
console.log("==============================================================");
const formatDate = (...date) => {
    let parsedDate = new Date(...date.flatMap(d => d));
    let dd = ('0' + parsedDate.getDate()).slice(-2);
    let mm = ('0' + (parsedDate.getMonth() + 1)).slice(-2);
    let yy = parsedDate.getYear().toString().slice(-2);

    return `${dd}.${mm}.${yy}`;
};

let date1 = "2011-10-02";
console.log(date1, "->", formatDate(date1));

let date2 = 1234567890000;
console.log(date2, "->", formatDate(date2));

let date3 = [2014, 0, 1];
console.log(date3, "->", formatDate(date3));

let date4 = new Date(2014, 0, 1);
console.log(date4, "->", formatDate(date4));

console.log("==============================================================");
let dateArray = [2012, 6, 5];
let dateObject = new Date(...dateArray);
console.log("Date from array: ", dateArray, "->", dateObject);
console.log("==============================================================");
