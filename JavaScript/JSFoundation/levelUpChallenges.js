
let teas = ["green tea","black tea","chai","oolong tea"]
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if(teas[i] === 'chai'){
        break;
    }
    selectedTeas.push(teas[i])
    
}
console.log(selectedTeas)


let cities = ["london","new york","paris","berlin"];
let visitedCities = []

for (let i = 0; i < cities.length; i++) {
    if(cities[i] === "paris" || cities[i] === "Paris"){
        continue;
    }
   visitedCities.push(cities[i]);
    
}
console.log(visitedCities);



let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) {
    if(num === 4){
        break;
    }
    smallNumbers.push(num)
}
console.log(smallNumbers)


let teaTypes = ["chai","green tea","herbal tea","black tea"];
let preferredTeas = []

for (const tea of teaTypes) {
    if(tea === "herbal tea"){
     continue;   
    }
    preferredTeas.push(tea)
}
console.log(preferredTeas)


let citiesPopulation = {
    "london": 8900000,
    "new york": 8400000,
    "paris": 2200000,
    "berlin": 3500000
}

let cityNewPopulations = {};
// console.log(Object.keys(citiesPopulation));

for (const city in citiesPopulation) {
    if (city == "berlin") {
        break; 
    }
    cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);


let worldCities = {
    sydney: 5000000,
    tokyo: 9000000,
    berlin: 3500000,
    paris: 2200000
}
let largeCities = {}

for (const city in worldCities) {
   if(worldCities[city] < 3000000){
    continue;
   }
     largeCities[city] = worldCities.key;
    }
console.log(largeCities)


let teaCollection = ["earl grey","green tea","chai","oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea){
    if(tea === "chai"){
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);





