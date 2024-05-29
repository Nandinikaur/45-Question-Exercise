#! /usr/bin/env node
//Nandini_Kaur 30-04-2024
import chalk from "chalk";


/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestList : string[] = ["Neha", "Harnoor", "Amrique"];

let notArrived = guestList[0];
console.log(chalk.rgb(203,67,53).bold(notArrived, "are not come for some reason"));

guestList.splice(0, 1, "Rahham");

guestList.forEach(guest => console.log(chalk.rgb(72,201,176).italic(`hello! "${chalk.rgb(187,143,206).bold(guest)}" please come to my house for dinner 🍽️`)));

