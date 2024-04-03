
// index.js

// Function to return the first two drivers from the passed-in array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// Function to return the last two drivers from the passed-in array
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// Array of functions, with the first two being returnFirstTwoDrivers and returnLastTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier;
    };
}

// Function to double fares
const fareDoubler = createFareMultiplier(2);

// Function to triple fares
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the passed-in function
function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}

module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
