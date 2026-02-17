//A Promise in JavaScript is an object representing the eventual completion (or failure) of an
// asynchronous operation and its resulting value

function delayFnc(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved after ${time} ms`);
    }, time);
  });
}

delayFnc(2000).then(() => console.log("Promise resolved! after 2 seconds"));

function divideFnc(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFnc(10, 0)
  .then((ans) => console.log(`Result: ${ans}`))
  .catch((err) => console.log(`Error: ${err}`));
