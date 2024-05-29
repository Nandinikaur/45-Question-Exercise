#! /usr/bin/env node
//Nandini_Kaur 06-05-20

import chalk from "chalk";

/*
They think of something you could store in a TypeScript Object. Write a program 
that creates Objects containing these items.
*/
 let student: {name: string; age: number; isPass: boolean;} = {
    name: "Samrith Singh",
    age: 7,
    isPass: true
}

console.log(student);
console.log(`\n"${chalk.green(student.name)}"\n\t`);
console.log(`"${chalk.yellow(student.age)}" years old\n\t`);
console.log(`"${chalk.cyan(student.isPass)}" Is pass congratulation!`);