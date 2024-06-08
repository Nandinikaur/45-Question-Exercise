#! usr/bin/env node
//Nandini_Kaur 17-05-2024
import chalk from "chalk";
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
*/
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`\n◽ the T-shirt is ${chalk.bold.cyan(size)} in size.\n \n${chalk.italic.yellow(message)}\n ◽ this message print on it.\n`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "🙆 want to learn TypeScript!🙆");
