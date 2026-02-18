//This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

const EventEmitter = require("node:events");

//new class or object
const myFirstEventEmitter = new EventEmitter();

//REGISTER AN EVENT
myFirstEventEmitter.on("start", (subject) => {
  console.log(`The ${subject} course has commenced on ${new Date().getDate()}`);
});

//listen to triggered event
myFirstEventEmitter.emit("start", "English");
