#! /usr/bin/env node
//Nandini_Kaur 23-04-2024
import chalk from "chalk";

/*Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name 
in a variable called famous_person. Then compose your message and store it in a new 
variable called message. Print your message.*/

let famous_person : string = "John Kennedy";
let message : string = "once said, Ask not what your country can do for you; ask what you can do for your country"

console.log(`${chalk.bold.underline(famous_person)} "${chalk.italic.rgb(159,168,218)(message)}"`);