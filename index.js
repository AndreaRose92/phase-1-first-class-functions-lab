const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let fare;
let multiplier;

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareQuintupler = (5, createFareMultiplier(5))

const fareDoubler = (10, createFareMultiplier(2))

const fareTripler = (12, createFareMultiplier(3))

const selectDifferentDrivers = (drivers, fn) => {
    switch (fn) {
        case returnFirstTwoDrivers:
            return drivers.slice(0,2)
            break;
        case returnLastTwoDrivers:
            return drivers.slice(2)
            break;
    }
}