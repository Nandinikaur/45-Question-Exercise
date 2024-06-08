#! usr/bin/env node
//Nandini_Kaur 17-05-2024

import chalk from "chalk";

/*
City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city: string, country: string){
    console.log(`\n"${chalk.yellow(city)}, ${chalk.magenta(country)}"\n`)
}
city_country("Tokyo", "Japan");
city_country("Sydney", "Australia");
city_country("Paris", "France");
