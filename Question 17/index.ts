#! /usr/bin/env node
//Nandini_Kaur 01-05-2024;
import chalk from "chalk";

/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.*/
//my guest list.

//start with exercise 16:
let guestList : string[] = ["Neha", "Harnoor", "Amrique", "Samrith"];

//making a variable for those guest who can't come.
let notArrived = guestList[0];
//print the name and msg for those who can't come.
console.log(chalk.rgb(203,67,53).bold(notArrived, "are not come for some reason!"));

//add new value and remove older value from guest list array. 
guestList.splice(0, 1, "Rahham");

//print a msg that I found bigger table for dinner.
console.log(chalk.yellowBright.italic("\n\tGreat news, friends! I've found a bigger dinner table for us to share even more fun together! can't wait to host you all soon!🤩 🤩\n\t"));

//add new guest to the beginning of array.
guestList.unshift("Meher");

 //add 1 more guest in the end of array.
guestList.push("arhan");

//add 1 more guest in the middle of array.
let middleIndex : number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Riyan");


//Print invite message for update guest list each friend..
guestList.forEach(guest => console.log(chalk.rgb(72,201,176).italic(`hello! "${chalk.rgb(187,143,206).bold(guest)}" please come to my house for dinner 🍽️`)));

//inform that only two guest are invited
console.log(chalk.bold.rgb(138,3,14)("\nThere is a problem I got a new dinner table and there was space for only two guests.thats why I can invite only two people to join us for dinner.🥺🥺\n"));

//print a message one by one that they are not invited.
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(chalk.italic.magenta(`Sorry, 🙏 ${chalk.bold.whiteBright(removeGuest)} I won't be able to invite you for dinner as planned. Let's catch up soon🖐️`));
}

//print a message for last two guest for invitation 
guestList.forEach(lastTwo => console.log(chalk.italic.greenBright(`\nHi! ${chalk.bold.whiteBright(lastTwo)}, you are still invited for dinner😊 😊\n`)));

//remove last two guest from the guest list
guestList.pop();
guestList.pop();
console.log(chalk.bold.redBright("\n\t>>>>REMOVE LAST TWO NAME FROM GUESTLIST<<<<\n\t"));

console.log(chalk.bold.cyan("😈 😈 😈 list was empty 😈 😈 😈",guestList));

