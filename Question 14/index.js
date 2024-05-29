#! /usr/bin/env node
//Nandini_Kaur 30-04-2024
import chalk from "chalk";
/* Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
let guestList = ["Neha", "Harnoor", "Amrique"];
guestList.forEach(list => console.log(chalk.rgb(93, 173, 226).italic(`Hello! "${chalk.rgb(72, 201, 176).bold(list)}" please come to my house for dinner`)));
