#! usr/bin/env node
//Nandini_kaur 18-05-2024

import chalk from "chalk";

/*
Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’
 names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians()
  with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
//original array
let magicians_names: string[] = ["Harry Houdini", "Criss Angel", "David Blaine", "Derren Brown"];


function make_great(array: string[]) {
  return[...array]
}


let magicians_names2 = make_great(magicians_names)


function new_magicians_array(array: string[]){
  for(let i = 0; i < array.length; i++){
    magicians_names2[i] = "The Great Magicians" + array[i]
   } 
  };


make_great(magicians_names)
new_magicians_array(magicians_names2)
  

function show_magician(array: string[]){
 console.log(array)
}

console.log(chalk.italic.yellow("Original Magicians:"));

show_magician(magicians_names);

console.log(`\n\n`)

console.log(chalk.italic.yellow("Great Magicians:"));

show_magician(magicians_names2);
