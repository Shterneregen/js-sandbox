// ==== Module#1 Basics ====

console.log("==============================================================");
console.log("==== Change the capitalization of all letters in a string ====");
console.log("==============================================================");
const changeCase = (str) => {
  var newStr = "";
  for (var character of str) {
    newStr +=
      character == character.toUpperCase()
        ? character.toLowerCase()
        : character.toUpperCase();
  }
  return newStr;
};

let str1 = "21century";
let str2 = "Hybris";
console.log(str1, "->", changeCase(str1)); // Output: 21CENTURY
console.log(str2, "->", changeCase(str2)); // Output: hYBRIS

console.log("==============================================================");
console.log("==== Filter out the non-unique values in an array ====");
console.log("==============================================================");
const filterNonUnique = (array) => {
  var uniqArr = new Array();

  for (var x of array) {
    var count = 0;
    for (var y of array) {
      if (x == y) {
        count++;
      }
    }
    if (count == 1) {
      uniqArr.push(x);
    }
  }
  return uniqArr;
};

let inputArr = [1, 2, 2, 3, 4, 4, 5];
console.log(inputArr, "->", filterNonUnique(inputArr));

console.log("==============================================================");
console.log("==== Sort string in alphabetical order ====");
console.log("==============================================================");
const alphabetSort = (str) => {
  var arr = str.split("");
  var sorted = arr.sort();
  return sorted.join("");
};
let str = "Python";
console.log(str, "->", alphabetSort(str));

console.log("==============================================================");
console.log("==== Get second min integer ====");
console.log("==============================================================");
const getSecondMinimum = (arr) => {
  var sorted = arr.sort();
  return sorted[1];
};
let inputArr2 = [5, 0, 7, 3, 8];
console.log(inputArr2, "->", getSecondMinimum(inputArr2));

console.log("==============================================================");
console.log("==== Double every even integer ====");
console.log("==============================================================");
const doubleEveryEven = (arr) => {
  var newArr = new Array();
  for (var el of arr) {
    if (el % 2 == 0) {
      el *= 2;
    }
    newArr.push(el);
  }
  return newArr;
};

let inputArr3 = [2, 0, 7, 3, 8, 4];
console.log(inputArr3, "->", doubleEveryEven(inputArr3));

console.log("==============================================================");
console.log("==== Create array with all possible pairs of two arrays ====");
console.log("==============================================================");
const getArrayElementsPairs = (arr1, arr2) => {
  arrOfArr = [];
  for (var el1 of arr1) {
    for (var el2 of arr2) {
      arrOfArr.push([el1, el2]);
    }
  }
  return arrOfArr;
};

let arr1 = [1, 2];
let arr2 = ["a", "b"];
console.log(arr1, arr2, "->", getArrayElementsPairs(arr1, arr2));

console.log("==============================================================");
console.log("==== Deep equal ====");
console.log("==============================================================");
// https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison/25456134
const deepEqual = function(x, y) {
  if (x === y) {
    return true;
  } else if (
    typeof x == "object" &&
    x != null &&
    typeof y == "object" &&
    y != null
  ) {
    if (Object.keys(x).length != Object.keys(y).length) return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

console.log("==============================================================");
console.log("==== Format date ====");
console.log("==============================================================");
const formatDate = (notFormattedDate) => {
  if (Array.isArray(notFormattedDate)) {
    var date = new Date(...notFormattedDate);
  } else {
    var date = new Date(notFormattedDate);
  }
  let dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let mm =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let yy = date
    .getFullYear()
    .toString()
    .substr(-2);
  return dd + "." + mm + "." + yy;
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
