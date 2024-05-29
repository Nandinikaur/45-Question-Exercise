#! /usr/bin/env node
//Nandini_kaur 30-04-2024

import chalk from "chalk";

/* Greetings: Start with the array you used in Exercise 11, but instead of just printing
each person’s name, print a message to them. The text of each message should be the same,
 but each message should be personalized with the person’s name.*/

let friendNames : string[] = ["naina", "haya", "viyomika","sadhna"];

for( let name of friendNames){
    console.log(chalk.italic.rgb(183,149,11)(`"hey,${chalk.bold.rgb(211,84,0)(name)} hope you're doing great"`))
}