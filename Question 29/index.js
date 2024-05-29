#! /usr/bin/env node
//Nandini_Kaur 07-05-2024
/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
 statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
 is in your array, the if block should print a statement, such as You really like bananas!
*/
let favorite_fruits = ["Mango", "Pineapple", "Apple"];
if (favorite_fruits.includes("Mango")) {
    console.log(`My favorite fruit is Mango🥭`);
}
if (favorite_fruits.includes("Pineapple")) {
    console.log(`I really like Pineapple🍍`);
}
if (favorite_fruits.includes("Apple")) {
    console.log(`I also like is Apple🍎`);
}
if (favorite_fruits.includes("Kiwi")) {
    console.log(`Kiwi was also good🥝`);
}
if (favorite_fruits.includes("Grapes")) {
    console.log(`My son favorite fruit is Grapes🍇`);
}
export {};
