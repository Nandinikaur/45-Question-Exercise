#! usr/bin/env node
//Nandini_Kaur 16-05-2024

import chalk from "chalk";

/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
 */


//the list of users is not empty.
let usersName: string[] = ["Admin","Samrith", "Sameer", "Kabir", "Karan"];

//Remove all of the usersName
//If the list is empty, print the message We need to find some users!

if(usersName.splice(0, usersName.length)){
  console.log(`\n ${chalk.red.underline("The user list was empty, We need to find some users!")}\n`);
}
