// CHALLENGE 1:
let teaFlavours = ["green tea","black tea","oolong tea"];
const firstTea = teaFlavours[0];

// CHALLENGE 2:
let cities = ["london","tokyo","new york"];
const favCity = cities[2];

// CHALLENGE 3:
let teaTypes = ["herbal tea","white tea","masala chaai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

// CHALLENGE 4:
let citiesVisited = ["mumbai","sydney"];
citiesVisited.push("berlin");  // citiesVisited[2] = "Berlin";
console.log(citiesVisited);

// CHALLENGE 5:
let teaOrders = ["chai","iced tea","matcha","earl grey"];

let lastOrder = teaOrders.pop();
console.log(lastOrder);

// CHALLENGE 6:
let popularTeas = ["green tea","oolong tea","chai"];
let sofCopyTeas = popularTeas;

// CHALLENGE 7:
let topCities = ["berlin","singapore","new york"];
const hardCopyCities = [...topCities];  // const hardCopyCities = topCities.slice()