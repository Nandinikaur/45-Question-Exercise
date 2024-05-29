#! /usr/bin/env node 
//Nandini_kaur 30-04-2024

import chalk from "chalk";

/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about 
 these items, such as “I would like to own a Honda motorcycle.”*/
 
 let favoriteTransport : string[] = ["Toyota supra", "Nissan GT-R", "Rolls-Royce", "BMW"];
  favoriteTransport.forEach(transport => console.log(chalk.rgb(93,151,73).italic(`One day I will buy my son's favorite transport like  "${chalk.rgb(146,252,5).bold(transport)}"`)));