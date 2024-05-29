#! /usr/bin/env node
//Nandini_Kaur 07-05-2024
import chalk from "chalk";
/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
 and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5
 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/
let alienColor = "green";
if (alienColor == "green") {
    console.log(`\nWOW! You earned ${chalk.bold.green(5)} point`);
}
else {
    console.log(`\nCongratulations! You earned 10 points`);
}
;
//another version:
let alienColor2 = "green";
if (alienColor2 != "green") {
    console.log("\nWOW! You earned 5 point");
}
else {
    console.log(`\nCongratulations! You earned ${chalk.bold.yellow(10)} points`);
}
;
