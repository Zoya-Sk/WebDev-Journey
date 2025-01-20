let obj = {
    firstName: "Hitesh",
    isLoggedIn: true
}

console.log(obj);
console.log(typeof obj);

console.log(obj.firstName);
obj.firstName = "Zoya";


//Get Today's Date:
let today = new Date();
console.log(today.getDate());

//ARRAYS:
let foodItems = ["Burger", "pizza","pavBhaji","Biryani"];
console.log(foodItems);
foodItems.push("Paneer","Sweets");
console.log(foodItems);
let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("Deleted -", deletedItems);

console.log(foodItems.toString()); //converts any array to a sring. without changing athe original array.

//JS implicit conversion:
console.log("1" + 1); //11

//JS explicit conversion:
let isValue = "2abc";
console.log(typeof Number(isValue));