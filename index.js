// document.getElementById("count").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;

// console.log(myAge);

// console.log(count);

// let myAge = 25;
// console.log(myAge);

// -----------------------------------------

// let myAge = 36;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// -----------------------------------------
// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// -----------------------------------------
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// console.log(countEl);

let count = 0;

function increment() {
  //   console.log("clicked");
  count += 1;
  //   document.getElementById("count").innerText = count;
  //   console.log(count);
  countEl.innerText = count;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
  count = 0;
  countEl.textContent = 0;
}

// save();

// -----------------------------------------

// function print42() {
//   console.log(42);
// }

// print42();

// -----------------------------------------

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTime() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log(totalTime);
// }

// totalLapTime();

// -----------------------------------------

// let lapsCompleted = 0;

// function incrementLapsCompleted() {
//   lapsCompleted = lapsCompleted + 1;
// }

// incrementLapsCompleted();
// incrementLapsCompleted();
// incrementLapsCompleted();

// console.log(lapsCompleted);

// -----------------------------------------

// let username = "Per";
// let message = "You have three new notifications";

// console.log(message + ", " + username + "!");

// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);

// -----------------------------------------

// let name = "Pepe";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name + "!";

// console.log(myGreeting);

// -----------------------------------------
