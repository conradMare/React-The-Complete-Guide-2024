// Using Functions as Values

function handleTimeout() {
    console.log("Timed Out!");
}

function handleTimeout2() {
    console.log("Timed Out... Again");
}

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeout2, 2000);
setTimeout(() => {
    console.log("More timing out");
}, 3000);

function greeter(greetFn) {
    greetFn();
}

greeter(() => {
    console.log("Hi");
})
