#! /user/bin/env node 
//Nandini_kaur 23-04-2024
import chalk from "chalk";

/*Stripping Names: Store a person’s name, and include some whitespace characters at the
beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
at least once. Print the name once, so the whitespace around the name is displayed. Then print 
the name after striping the white spaces.*/

 let userName : string = "\n\tSamrith Singh\t\n";


 console.log(chalk.bold.rgb(105,240,174)(userName));

 
 console.log(chalk.bold.rgb(105,240,174)(userName.trim()));