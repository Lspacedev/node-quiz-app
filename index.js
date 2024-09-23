const readlineSync = require("readline-sync");
const readline = require("readline");

async function timer(test) {
  let counter = 5;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`);
    rl.close();
  });
  const interval = setInterval(async () => {
    counter--;
    console.log(counter);
    if (counter < 0) {
      clearInterval(interval);
      console.log("time up");
    }
  }, 1000);
}

function readLineAsync(question) {
  return new Promise((resolve) => {
    const answer = readlineSync.question(question);
    resolve(answer);
  });
}
let score = 0;
let round = 0;
let done = false;

async function question(obj) {
  if (round === 3 || round === -3) {
    done = true;
  }
  let counter = 10;

  const interval = setInterval(async () => {
    console.log(counter);
    counter--;

    if (counter === 0) {
      clearInterval(interval);

      console.log("time up");
    }
  }, 1000);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(obj.q, (answer) => {
    if (answer === obj.a) {
      console.log("correct");

      score++;
      round++;
      clearInterval(interval);
    } else if (answer !== obj.a) {
      console.log("incorrect");

      clearInterval(interval);
      round--;
    }
    rl.close();
  });
}

async function game() {
  let counter = 30;

  let arr = [
    {
      q: "What is the population of South Africa, in millions? 1 = 50 million, 2 = 60 million ",
      a: "2",
    },
    {
      q: "What is the capital city of South Africa? 1 = Pretoria, 2 = Polokwane",
      a: "1",
    },
    { q: "What is continent is South Africa? 1 = Europe, 2 = Africa", a: "2" },
  ];

  let miliseconds = 10000;

  // arr.forEach((obj, i) => {
  //   setTimeout(() => {
  //     question(obj);
  //   }, miliseconds * i);
  //   i++;
  // });

  const interval = setInterval(async () => {
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      console.log(`Game Over, your score is ${score}`);
    }
  }, 1000);
  if (done) {
    clearInterval(interval);
  }
}
game();
