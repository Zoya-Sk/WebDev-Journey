
 // WHILE LOOP
let sum = 0;
let i = 1;

while(i <= 5){
    sum = sum + i;  // sum += i;
    i++;
}
// console.log(sum);


let countdown = [];
let j = 5;
while(j > 0){
    countdown.push(j);
    j--;
}
// console.log(countdown);


// DO-WHILE LOOP
let teaCollection = [];
let tea;

do{
    // tea = prompt(`Enter your favourite tea (type "stop" to finish)`)

    if(tea !== "stop"){
        teaCollection.push(tea);
    }
} while(tea !== "stop");


let total = 0;
let k = 1;

do{
    total += k;
    k++;
} while(k <= 3);
// console.log(total);


//FOR LOOP
let multipliedNumbers = []
let numbers = [2,4,6]

for (let l = 0; l < numbers.length; l++) {
    let takeNumbers = numbers[l] * 2
    multipliedNumbers.push(takeNumbers)
    
}
console.log(multipliedNumbers)


let cities = ["new york","paris","tokyo","london"]
let cityList = []

for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity)
}
console.log(cityList)





