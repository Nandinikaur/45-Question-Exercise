#! usr/bin/env node
//Nandini_Kaur 16-05-2024

import chalk from "chalk";

/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
 has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in
 the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that  
the person will need to enter a new username. If a username has not been used, print a message saying that the username
 is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users: string[] = ["Karan", "Kabir", "Naina", "Samrith", "Sameer"];


let new_users: string[] = ["Samrith", "Shaayan", "naina", "Riyan", "Amrique"];


new_users.forEach(new_check_user => {
    let our_con = current_users.some(current_check_user => current_check_user.toLowerCase() === new_check_user.toLowerCase())
    if(our_con){
        console.log(`\n🔘  sorry! "${chalk.bgRed(new_check_user)}" has been used '${chalk.underline.red(new_check_user.toLowerCase())}' should not be accepted. please re-enter an unique username.\n`)
    }else{console.log(`\n🔘  ${chalk.green.underline(new_check_user)} is available\n`)};
} 
); 
   
    






