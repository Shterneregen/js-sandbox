console.log("==============================================================");
console.log("==== Module#3 Objects ====");
console.log("==============================================================");
console.log("==== Array to List ====");
console.log("==============================================================");

const arrayToList = (arr) => {
    let obj = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        obj = Object.assign({ value: arr[i] }, { rest: obj });
    }
    return obj;
};

const listToArray = (list, ...args) => {
    let arr = args[0] || [];
    arr.push(list.value);
    return list.rest === null ? arr : listToArray(list.rest, arr);
};

const result1 = arrayToList([10, 20]);
const result2 = listToArray(arrayToList([10, 20, 30]));

console.log(result1);
console.log(result2);

console.log("==============================================================");
console.log("==== Keys and values to list ====");
console.log("==============================================================");

const getKeyValuePairs = (obj) => {
    let arr = [];
    for (let prop in obj) {
        arr.push([prop, obj[prop]]);
    }
    return arr;
};

const result3 = getKeyValuePairs({
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
});
console.log(result3);

console.log("==============================================================");
console.log("==== Invert keys and values ====");
console.log("==============================================================");

const invertKeyValue = (obj) => {
    let newObj;
    for (let prop in obj) {
        // newObj = Object.assign(newObj || {}, { [`"${obj[prop]}"`]: prop });
        newObj = Object.assign(newObj || {}, { [obj[prop]]: prop });
    }
    return newObj;
};

const result4 = invertKeyValue({
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
});
console.log(result4);

console.log("==============================================================");
console.log("==== Get all methods from object ====");
console.log("==============================================================");

const getAllMethodsFromObject = (obj) =>
    Object.getOwnPropertyNames(obj).filter(
        (item) => typeof obj[item] === "function"
    );

const result5 = getAllMethodsFromObject(Math);
console.log(result5);

console.log("==============================================================");
console.log("==== Groups ====");
console.log("==============================================================");

class Groups {
    constructor(members) {
        this.members = members;
        this.length = members.length;
        this.add = (newMember) => {
            if (this.has(newMember)) return;
            this.members.push(newMember);
            this.length++;
        };
        this.has = (memberToCheck) => this.members.includes(memberToCheck);
        this.delete = (memberToDelete) => {
            if (!this.has(memberToDelete)) return;
            this.members = this.members.filter(
                (item) => item !== memberToDelete
            );
            this.length--;
        };
    }
    static from(members) {
        return new Groups(members);
    }
}

const group = Groups.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false
