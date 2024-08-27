// Arrays and Array Methods lik map()

const hobbies = ["Golf", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

// Find the Index of a item in an Array -> takes a function as a parameter
const index = hobbies.findIndex((item) => item === "Reading");

console.log(index);

// Map - Allows you to transform every item in an array to another item (Also takes a function as input)
// const editedHobbies = hobbies.map((item) => item + "!");
// console.log(editedHobbies);

// Map can also take objects
const updatedHobbies = hobbies.map((item) => ({
    text: item
}));

console.log(updatedHobbies);
