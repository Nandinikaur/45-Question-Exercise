#! /usr/bin/env node
//nandini_kaur 01-05-2024
import chalk from "chalk";
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has change.*/
//store locations in array
let locations = ["France", "Pakistan", "Canada", "USA", "Turkey", "Brazil"];
//print locations
console.log(chalk.italic.blue(`\nPlaces: ${chalk.bold.green(locations)}\n`));
//Print array in alphabetical order without modifying
console.log(chalk.italic.yellow(`\nAlphabetical order: ${chalk.bold.green([...locations].sort())}\n`));
//show array in its original order
console.log(chalk.italic.blue(`\nShow original order: ${chalk.bold.green(locations)}\n`));
//Print array in reverse alphabetical order without changing the order of the original list.
console.log(chalk.italic.rgb(48, 46, 181)(`\nReverse alphabetical order: ${chalk.bold.green([...locations].sort().reverse())}\n`));
//Show that array is still in its original order printing it again.
console.log(chalk.italic.blue(`\nshow its again that list is in original order ${chalk.bold.green(locations)}\n`));
// Reverse the order of the list. Print the array that its order has changed.
console.log(chalk.italic.rgb(222, 95, 136)(`\nreverse original list: ${chalk.bold.green(locations.reverse())}\n`));
//Reverse the order again. Print the list to show it’s back to its original order.
console.log(chalk.italic.blue(`\nReverse again the reverse list to back in original order: ${chalk.bold.green(locations.reverse())}\n`));
//Sort array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(chalk.italic.rgb(255, 107, 1)(`\nOriginal list in alphabetical order: ${chalk.bold.green(locations.sort())}\n`));
//Sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has change.*/
console.log(chalk.italic.rgb(48, 46, 181)(`\nPrint again alphabetical order in reverse order: ${chalk.bold.green(locations.sort().reverse())}\n`));
