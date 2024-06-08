#! usr/bin/env node
//Nandini_Kaur 18-05-2024

import chalk from "chalk";

/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects
as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/

 function sandwich_making(...items: string[]){
    console.log(chalk.blueBright("\nHello user please add your item that you want to add on your sandwich: \n "))

    items.forEach(addItems => console.log(" " + addItems));

    console.log(chalk.cyanBright("\n \t Enjoy Your Meal! \n\t"))
}

sandwich_making("Bread", "Ketchup", "Egg", "Lettuce", "cheese");

sandwich_making("Brown Bread", "Chicken Spread", "cheese");

sandwich_making("bread", "Egg", "Lettuce", "cucumber", "mayo", "Ketchup", "Bacon");