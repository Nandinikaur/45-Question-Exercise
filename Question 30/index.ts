#! /usr/bin/env node
//Nandini_kaur 07-05-2024

import chalk from "chalk";

/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
 that will print a greeting to each user after they log in to a website. Loop through the array, and print a
  greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let userName: string[] = ["Admin","Samrith", "Sameer", "Kabir", "Karan"];

for(let a = 0; a < userName.length; a++){
  if(userName[a] === "Admin"){
  console.log(`\n Hello ${chalk.bold.green(userName[0])}, would you like to see a status report?\n`)
}else{
  console.log(`\nHello ${chalk.italic.blue(userName[a])}, thank you for logging in again.\n`)
}
};