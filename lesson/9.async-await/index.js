function delayFnc(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delayFnc(2000);
  console.log(`Hello ${name}`);
}

delayedGreet("MeshKish");

async function divideAsync(num1, num2) {
  try {
    if (num2 === 0) throw new Error("cannot divide by zero");
    return num1 / num2;
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

async function mainFnc() {
  console.log(await divideAsync(20, 3));
  console.log(await divideAsync(20, 0));
}

mainFnc();
