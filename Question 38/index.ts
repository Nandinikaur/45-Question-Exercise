#! usr/bin/evn node
//Nandini_Kaur 17-05-2024

import chalk from "chalk";

/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print
 a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function 
 for three different cities, at least one of which is not in the default country.
*/
function describe_city(cityName: string, country: string = "Pakistan"){
console.log(`\n◽ ${chalk.underline.blue(cityName)} is a city in ${chalk.bold.green(country)}\n`)
}
describe_city("karachi");
describe_city("Lahore");
describe_city("Islamabad");
describe_city("New York", chalk.cyan("USA"));