// More on the Arrow Function Syntax

// Omitting parameter list parentheses:
// When having ONE input parameter:
// userName => {}

// If the Arrow Function doesn't take ANY parameters, DO NOT omit the parentheses:
// () => {}

// Omitting function body curly braces;
// If the Arrow Function contains NO OTHER LOGIC:
// number => number * 3;

// Special Cases - Just returning an Object:
// If you go for the shorter alternative explained in 2) 
// and you're trying to return a JavaScript object, you may end up with the following, invalid code:

// number => { age: number }; // trying to return an object

// This code would be invalid because JavaScript treats the curly braces as function body wrappers
// (not as code that creates a JS object).

// To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

// number => ({ age: number }); // wrapping the object in extra parentheses

// By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly 
// braces are not there to define a function body but instead to create an object. Hence that object then gets returned.