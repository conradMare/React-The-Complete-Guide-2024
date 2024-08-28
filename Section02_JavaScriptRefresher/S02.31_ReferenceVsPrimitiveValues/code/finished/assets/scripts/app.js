// Reference Vs Primitive Values

// Primitive Value - CAN'T EDIT PRIMITIVES, CAN ONLY OVERRIDE THEM
let userMessage = 'Hello';
userMessage = userMessage.concat('!!!!');

// Reference Values
const hobbies = ['Sport', 'Reading'];
hobbies.push('Cooking');
console.log(hobbies);
