#! usr/bin/env node
//Nandini_Kaur 17-05-2024

import chalk from "chalk";

/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/

function make_shirt(size: string, message: string){ 
console.log(`\n◽ the T-shirt is ${chalk.bold.cyan(size)} in size.\n \n${chalk.italic.yellow(message)}\n ◽ this message print on it.\n`)

}
make_shirt("small", "🙆 want to learn TypeScript!🙆");
make_shirt("medium", "😎 soon FULL STACK developer🔥🔥");
make_shirt("large", "eat( 🥪 ); sleep( 😴 ); code( 🔠 ); repeat(🔁 );")