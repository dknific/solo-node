const express = require('express');
const methods = require('./methods');
const port = 3000;

const app = express();

app.get('/people', async (req, res, next) => {
    console.log('Received GET request for resource: /people');
    const data = await methods.getAllPeople(req.query.sortBy); 
    res.json(data);

    if (res.statusMessage === 'OK') {
        console.log('Request completed.');
    } else { console.log('Could not complete request.'); }
    
});

app.get('/planets', async (req, res, next) => {
    console.log('Received GET request for resource /planets');
    const data = await methods.getAllPlanets(); 
    res.json(data);

    if (res.statusMessage === 'OK') {
        console.log('Request completed.');
    } else { console.log('Could not complete request.'); }
});

app.listen(port, () => console.log(`Hello, Alderaan!\nExpress.js app is listening on: Port ${port}`));
