#! /usr/bin/env node
//Nandini_Kaur 23-04-2024;
import chalk from "chalk";

/*Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, 
 and titlecase.*/

 let personName : string = "Samrith Singh";

//LOWERCASE:
console.log(chalk.italic.blue(personName.toLowerCase())); // Output: samrith singh


//UPPERCASE:
console.log(chalk.italic.green(personName.toUpperCase())); // Output: SAMRITH SINGH


//TITLECASE
console.log(chalk.italic.red(personName.split(" ").map(word => word.charAt(0).toUpperCase() 
+ word.slice(1).toLowerCase()).join(" ")));
// Output: Samrith Singh