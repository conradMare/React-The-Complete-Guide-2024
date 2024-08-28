// Revisiting Control Structures

const password = prompt("Your Password");

if (password === "Hello") {
    console.log("Hello works");
} else if (password === "hello") {
    console.log("hello with a lower case works");
} else {
    console.log("Access not granted");
}

// for-of loop
const hobbies = ["Sport", "Cooking"];

for (const hobby of hobbies) {
    console.log(hobby);
}