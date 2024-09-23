const { count } = require("console");
const readline = require("readline");

let score = 0;

async function question(obj) {
  return new Promise((resolve) => {
    let counter = 15;

    const interval = setInterval(async () => {
      console.log("\t", "\t", "\t", "time left: ", counter);
      counter--;

      if (counter === 0) {
        clearInterval(interval);
        resolve("time up");
        console.log("time up");
      }
    }, 1000);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(`${obj.q} \n Answer: \n`, (answer) => {
      // if (typeof answer != "number") {
      //   console.log("Invalid input, enter number");
      // }
      if (answer === obj.a) {
        console.log("correct");
        resolve(answer);
        score++;

        clearInterval(interval);
      } else if (answer !== obj.a) {
        console.log("incorrect");
        resolve(answer);
        clearInterval(interval);
      }
      rl.close();
    });
  });
}

async function game() {
  let counter = 45;

  let arr = [
    {
      q: "What is the population of South Africa, in millions? 1 = 50 million, 2 = 60 million ",
      a: "2",
    },
    {
      q: "What is the capital city of South Africa? 1 = Pretoria, 2 = Polokwane",
      a: "1",
    },
    {
      q: "What continent is South Africa located? 1 = Europe, 2 = Africa",
      a: "2",
    },
    {
      q: "What is South Africa's currency? 1 = zar, 2 = usd",
      a: "1",
    },
  ];
  console.log("Welcome to the South Africa Quiz Game");

  let q1 = await question(arr[0]);

  let q2 = await question(arr[1]);

  let q3 = await question(arr[2]);

  let q4 = await question(arr[3]);

  if (q4) {
    console.log(`Game Over, your score is ${score}/4`);
  }

  const interval = setInterval(async () => {
    counter--;

    if (counter === 0) {
      clearInterval(interval);
      console.log(`Game Over, your score is ${score}`);
    }
  }, 1000);
}
game();
