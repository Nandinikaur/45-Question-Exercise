#! /usr/bin/env node
//Nandini_Kaur 01-05-2024
import chalk from "chalk";
/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.*/
let guestList = ["Neha", "Harnoor", "Amrique"];
let numberGuest = guestList.length;
console.log(chalk.bold.yellow(`I'm invited total ${numberGuest} guests`));
