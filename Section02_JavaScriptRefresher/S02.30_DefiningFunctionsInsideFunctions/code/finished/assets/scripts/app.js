// Defining Functions Inside of Functions

function init() {
    function greet() {
        console.log("Hi");
    }

    // CAN NOT CALL THIS FUNCTION OUTSIDE OF INIT - NOT GLOBALLY SCOPED!!!
    greet();
}

init();
