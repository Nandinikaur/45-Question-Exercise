#! /usr/bin/env node
//Nandini_Kaur 01-05-2024
import chalk from "chalk";
/*Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
 a list containing these items. */
let mountains = ["K2", "Mount Everest", "Nanga Parbat", "Board Peak", "Rakaposhi"];
console.log(chalk.bold.yellowBright(`List of Mountains:`));
mountains.forEach(mountains => console.log(chalk.italic.rgb(191, 132, 255)(mountains)));
