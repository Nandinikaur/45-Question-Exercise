#! /usr/bin/env node
//Nandini_Kaur 06-05-2024
import chalk from "chalk";
/*
Conditional Tests: Write a series of conditional tests. Print a statement
 describing each test and your prediction for the results of each test.
  Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line
evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another
  5 tests evaluate to False.
*/
let subject = "Computer Science";
//True Statement
console.log(chalk.green("If subject is == 'Computer Science'? I predict True."));
console.log(subject == "Computer Science");
console.log(chalk.green("If subject is === 'Computer Science'? I predict True."));
console.log(subject === "Computer Science");
console.log(chalk.green("If subject is >= 'Computer Science'? I predict True."));
console.log(subject >= "Computer Science");
console.log(chalk.green("If subject is != 'Science'? I predict True."));
console.log(subject != "Science");
console.log(chalk.green("If subject is > 'Computer'? I predict True."));
console.log(subject > "Computer");
//False Statements
console.log(chalk.magenta("If subject is !== 'Computer Science'? I predict False."));
console.log(subject !== "Computer Science");
console.log(chalk.magenta("If subject is > 'Computer science'? I predict False."));
console.log(subject > "Computer science");
console.log(chalk.magenta("If subject is === 'Urdu'? I predict False."));
console.log(subject === "Urdu");
console.log(chalk.magenta("If subject is == 'English'? I predict False."));
console.log(subject == "English");
console.log(chalk.magenta("If subject is == 'Mathematics'? I predict False."));
console.log(subject == "Mathematics");
