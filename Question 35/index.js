#! usr/bin/env node
//Nandini_Kaur 16-05-2024
import chalk from "chalk";
/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as
 A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet!
*/
console.log(chalk.bold.red(`\n\t>>>"""WILD ANIMALS"""<<<\n\t`));
let wildAnimals = ["Lion", "Elephant", "Rhino"];
for (let i = 0; i < wildAnimals.length; i++) {
    console.log(`\nThe ${chalk.bold.underline.blue(wildAnimals[i])} are not domesticated\n`);
}
console.log(chalk.italic.cyan("\nThe wild animals that live on their own without any help from people, a wild animal find its own shelter, food, water and all other needs\n"));
