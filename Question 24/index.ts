#! /usr/bin/env node
//Nandini_Kaur 06-05-2024

import chalk from "chalk";

/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one
  False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
  greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


let car: string = "Honda";
let num : number = 123;

console.log(chalk.bold.greenBright("\n\t>>>TEST WITH STRING<<<\n\t"))

//Tests for equality and inequality with strings: 
//double equal to:
console.log("\n1a: if car == 'Honda' ans is true");
console.log(car == "Honda");

console.log("\n1a: if car == 'Ford' ans is false");
console.log(car == "Ford");

//not equal to:
console.log("\n1b: if Car != 'Bentley' ans is true");
 console.log(car != "Bentley");

console.log("\n1b: if Car != 'Honda' ans is false");
 console.log(car != "Honda");


 console.log(chalk.bold.greenBright("\n\t>>>TEST WITH LOWERCASE FUNCTION<<<\n\t"))
//Tests using the lower case function
console.log("\n2a: if car != 'Honda' into lower case ans is true");
console.log(car.toLowerCase() != "Honda");

 console.log("\n2b:if Car == 'Honda' into lower case ans is false");
 console.log(car.toLowerCase() == "Honda");


 console.log(chalk.bold.greenBright("\n\t>>>TEST WITH NUMERICAL<<<\n\t"))
 /*Numerical tests involving equality and inequality, greater than and less than,
  greater than or equal to, and less than or equal to*/

  //numerical test equality:
  console.log("\n3a: if num === '123' ans is true");
  console.log(num === 123 );

  console.log("\n3a: if num === '444' ans is false");
console.log(num === 444);

//numerical test inequality:
console.log("\n3b: if num !== '444' ans is true");
  console.log(num !== 444 );

  console.log("\n3b: if num !== '123' ans is false");
console.log(num !== 123);

  //numerical test less than:
  console.log("\n3c: if num < '444' ans is true");
console.log(num < 444);

console.log("\n3c: if num < '123' ans is false");
console.log(num < 123);

//numerical test greater than:
 console.log("\n3d: if num > '100' ans is true");
 console.log(num > 100);
 
 console.log("\n3d: if num > '123' ans is false");
 console.log(num > 123);


//numerical test less than or equal to:
 console.log("\n3e: if num <= '123' ans is true");
console.log(num <= 123);

console.log("\n3e: if '444' <= num ans is false");
console.log(444 <= num);

//numerical test greater than or equal to:
 console.log("\n3f: if num >= '123' ans is true");
 console.log(num >= 123);

 console.log("\n3f: if num >= '444' ans is false");
 console.log(num >= 444);

 console.log(chalk.bold.greenBright("\n\t>>>TEST WITH && AND OR OPERATORS<<<\n\t"))
 //test using "and = &&" and 'or = || operators:

 //and operator &&:
console.log("\n4a: if '444' == '444' && 'num' == '123' ans is true");
 console.log(444 == 444 && num == 123);

 console.log("\n4a: if '444' != '444' && num != '123' ans is true");
 console.log(444 != 444 && 123 != 123);

//or operator ||:
console.log("\n4b: if num < '444'  || '444' > num ans is true");
console.log(num < 444 || 444 > num);

console.log("\n4b: if num > '444'  || '444' < num ans is true");
console.log(num > 444 || 444 < num);


 console.log(chalk.bold.greenBright("\n\t>>>TEST WITH ITEMS IN ARRAY<<<\n\t"))
 let items = ["chips", "juice", "chocolate"]
 //Test whether an item is in a array
 console.log("\n4b: if item chips in array ans is true");
 console.log(items.includes("chips") === true);

 console.log("\n4b: if item biscuit in array ans is false");
 console.log(items.includes("biscuit") === true);
 
 

 console.log(chalk.bold.greenBright("\n\t>>>TEST WITH ITEMS NOT IN ARRAY<<<\n\t"))
 //Test whether an item is not in a array
 console.log("\n4b: if item chips in array ans is true");
 console.log(items.includes("chips") !== false);
 
 console.log("\n4b: if item chips in array ans is true");
 console.log(items.includes("chips") !== true);
 
