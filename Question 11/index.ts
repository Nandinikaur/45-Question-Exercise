#! /usr/bin/env node
//Nandini_Kaur 30-04-2024
import chalk from "chalk";

/* Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time. */


let friendNames : string[]=["naina", "haya", "viyomika", "sadhna"];
for(let i = 0; i < friendNames.length; i++){
    console.log(chalk.italic.rgb(240,98,146)(friendNames[i]));
}
