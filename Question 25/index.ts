#! /usr/bin/env node
//Nandini_Kaur 07-05-2024

import chalk from "chalk";

/*
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable
called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print 
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
 (The version that fails will have no output.)
 */
let alien_color = "green";
if (alien_color == "green") {
  console.log(`You earned ${chalk.bold.green(5)} points`);
}

//another version of the program that fail will have no output
alien_color = "yellow";
if (alien_color == "green") {
  }; 



