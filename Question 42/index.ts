#! usr/bin/env node
//Nandini_kaur 18-05-2024

import chalk from "chalk";

/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the
 array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
  actually been modified.
*/

let magicians_names: string[] = ["Harry Houdini", "Criss Angel", "David Blaine", "Derren Brown"];



function make_great(array: string[]) {
 for(let i = 0; i < array.length; i++){
  magicians_names[i] = "The Great Magicians" + array[i]
 } 
};

  make_great(magicians_names);
  console.log(magicians_names);
  