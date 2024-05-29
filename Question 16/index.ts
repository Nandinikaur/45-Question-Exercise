#! /usr/bin/env node
//Nandini_kaur 01-05-2014;

import chalk from "chalk";

/*More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list. */

//my guest list.
 let guestList : string[] = ["Neha", "Harnoor", "Amrique", "Samrith"];

 //making a variable for those guest who can't come.
let notArrived = guestList[0];
//print the name and msg for those who can't come.
console.log(chalk.rgb(203,67,53).bold(notArrived, "are not come for some reason!"));

//add new value and remove older value from guest list array. 
guestList.splice(0, 1, "Rahham");

//print a msg that I found bigger table for dinner.
console.log(chalk.yellowBright.italic("\n\tGreat news, friends! I've found a bigger dinner table for us to share even more fun together! can't wait to host you all soon!🤩🤩\n\t"));

//add new guest to the beginning of array.
guestList.unshift("Meher");

  //add 1 more guest in the end of array.
guestList.push("arhan");

//add 1 more guest in the middle of array.
let middleIndex : number = Math.floor(guestList.length / 2);
 guestList.splice(middleIndex, 0, "Riyan");


 //Print invite message for update guest list each friend..
guestList.forEach(guest => console.log(chalk.rgb(72,201,176).italic(`hello! "${chalk.rgb(187,143,206).bold(guest)}" please come to my house for dinner 🍽️`)));
