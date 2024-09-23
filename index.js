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
    { q: "What is continent is South Africa? 1 = Europe, 2 = Africa", a: "2" },
  ];
  console.log("Welcome to the South Africa Quiz Game");
  let q1 = await question(arr[0]);

  let q2 = await question(arr[1]);

  let q3 = await question(arr[2]);

  if (q3) {
    console.log(`Game Over, your score is ${score}`);
  }

  const interval = setInterval(async () => {
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      console.log(`Game Over, your score is ${score}`);
    }
  }, 1000);
}
game();
