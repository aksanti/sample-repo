// Greeting message function
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
// const greetingMessage = createGreetingMessage('Christopher');
// const greetingMessage = createGreetingMessage('Christopher');

function displayDone() {
    console.log('3 second has elapsed');
}

setTimeout(displayDone, 3000);


setTimeout(function () {
    console.log('4 second has elapsed');
}, 4000);

setTimeout(() => { console.log('5 second has elapsed'); }, 5000);