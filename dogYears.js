// get user age with prompt
var myAge = prompt('What is your current age?');
// create value for first two years
var firstYears = (10.5 * 2);
// calculate age in dog years less first two years
var laterYears = ((myAge - 2) * 4);
// add value for first two years and value for rest of years
var myAgeInDogYears = (firstYears + laterYears);
// log dog years age
console.log(myAgeInDogYears);
