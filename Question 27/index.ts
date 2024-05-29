#! /usr/bin/env node 
//Nandini_Kaur 07-05-2024

import chalk from "chalk";

/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
let alienColor1 = "green";
let alienColor2 = "yellow";
let alienColor3 = "red";

//version 1:
if (alienColor1 === "green") {
  console.log(chalk.green(`\n(WOW! You shot ${chalk.white(5)} green alien and you earned ${chalk.bold.white(5)} points)`));
} else {
  console.log(chalk.red("Invalid color"));
}

//version 2:
if (alienColor2 === "yellow") {
    console.log(chalk.yellow(`\nGREAT! You shot ${chalk.white(5)} yellow alien an you earned ${chalk.bold.white(10)} points`));
}
else {
    console.log(chalk.red("Invalid color"));
}

//version 3:
if (alienColor3 === "red") {
    console.log(chalk.red(`\n CONGRATULATION! You shot ${chalk.white(5)} red alien and you earned ${chalk.bold.white(15)} points`));
}
else {
    console.log(chalk.red("Invalid color"));
}












