#! usr/bin/env node
//Nandini_Kaur 18-05-2024
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
  such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function cars_info(manufacturer, model_name, mode_number, ...options) {
    let car = {
        manufacturer: manufacturer,
        model_name: model_name,
        mode_number: mode_number,
        ...Object.assign({}, ...options)
    };
    console.log(car);
}
cars_info("Suzuki", "Vitara", 4598, { Color: "Red" });
cars_info("Kia", "sportage", 7412, { color: "white" }, { sunproof: true });
cars_info("Audi", "Audi AG", 9856, { color: "Black" }, { Air_bags: true });
export {};
