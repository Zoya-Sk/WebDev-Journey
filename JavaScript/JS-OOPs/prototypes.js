let computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__: computer
};
console.log(`lenovo`, lenovo.__proto__);

let tomHardWare = {};

console.log(computer);
console.log(`computer`, computer.__proto__);  //print on browser's console for more info.


let genericCar = {tyres: 4};
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla`, tesla);