const axios = require('axios');

function sortByKey(array, key, keyIsNumber) {
    return array.sort(function(a, b) {
        let x, y;
    
        if (keyIsNumber) {
            let tempA = a[key].replace(/\,/g,'');
            let tempB = b[key].replace(/\,/g,'');
            
            // Mass and heights with 'uknown' value will be
            // thrown to the bottom of the list:
            if (tempA === 'unknown') tempA = '99999';
            if (tempB === 'unknown') tempB = '99999';

            x = parseInt(tempA);
            y = parseInt(tempB);
        } else {
            x = a[key];
            y = b[key];
        }
  
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

async function getFullName(url) {
    let response = await axios.get(url);
    return response.data.name;
}
  
async function getAllPeople(sortBy) {
    let allPeople = [];
    let pageNumber = 1;
    let nextUrl = '';

    while (nextUrl !== null) {
        let response = await axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`);
        response.data.results.forEach(person => allPeople.push(person));

        nextUrl = response.data.next;
        pageNumber++;
    }

    if (sortBy === 'name') {
        allPeople = sortByKey(allPeople, sortBy, false);
    } else if (sortBy === 'height' || sortBy === 'mass') {
        allPeople = sortByKey(allPeople, sortBy, true);
    }

    return allPeople;
}

async function getAllPlanets() {
    let allPlanets = [];
    let pageNumber = 1;
    let nextUrl = '';

    while (nextUrl !== null) {
        let response = await axios.get(`https://swapi.dev/api/planets/?page=${pageNumber}`);
        
        response.data.results.forEach(planet => {
            let fullNames = [];
            planet.residents.forEach(async url => {
                let residentName = await getFullName(url);
                fullNames.push(residentName);
            });

            planet.residents = fullNames;
            allPlanets.push(planet);
        });

        nextUrl = response.data.next;
        pageNumber++;
    }

    return allPlanets;
}

module.exports = { getAllPeople, getAllPlanets };
