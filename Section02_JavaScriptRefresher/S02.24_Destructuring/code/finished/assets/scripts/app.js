// Destructuring

// Destructuring Arrays:
// const userNameData = ["John", "Doe"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [fName, lName] = ["John", "Doe"];

// console.log(fName);
// console.log(lName);

// Destructuring Objects:
const { name: userName, age: userAge } = {
    name: "John",
    age: 35
};

// const name = user.name;
// const age = user.age;

console.log(userName);
console.log(userAge);
