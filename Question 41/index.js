#! usr/bin/env node 
//Nandini_Kaur 18-05-2024
import chalk from "chalk";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints
the name of each magician in the array.
*/
let magicians_names = ["Harry Houdini", "Criss Angel", "David Blaine", "Derren Brown"];
function show_magicians(array) {
    array.forEach(names => console.log(`\n${chalk.underline.blue(names)}\n`));
}
show_magicians(magicians_names);
