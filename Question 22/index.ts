#! /usr/bin/env node
//Nandini_Kaur 06-05-2024

import chalk from "chalk";

/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.
*/

let foodItem: string[] =["Rice", "chicken", "veggies"];

let error = foodItem[6];

let correctError = foodItem[2];

console.log(`\nThis item was not available "${chalk.bgRed(error)}"\n`);

console.log(`Your item "${chalk.green(correctError)}"`);


