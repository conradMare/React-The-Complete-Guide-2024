// The Spread Operator

const hobbies = ["Sport", "Cooking"];
const user = {
    name: "John",
    age: 35
};

const newHobbies = ["Reading"];

const mergedList = [...hobbies, ...newHobbies];
console.log(mergedList);

const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);

// The Spread Operator [...<arrayName>] "pulls out" values from an array
// and adds them to another array as COMMA SEPARATED VALUES,
// if you don't use the spread operator it will created an array
// with another NESTED ARRAY.
