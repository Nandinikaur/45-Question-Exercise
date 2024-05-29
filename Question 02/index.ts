#! /usr/bin/env node
//Nandini_kaur 23-04-2024;
import chalk from "chalk";

/*Personal Message: Store a person’s name in a variable, 
and print a message to that person. Your message should be simple, 
such as, “Hello Eric, would you like to learn some Python today?”*/

let personName : string = "Samrith Singh";
console.log(chalk.bold.greenBright(`Hello ${chalk.italic.cyan(personName)},
 would you like to learn some typescript today?`));
