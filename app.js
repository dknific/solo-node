const express = require('express');
const methods = require('./methods');
const port = 3000;

const app = express();

app.get('/people', async (req, res, next) => {
    console.log(`Received GET request for resource: ${req.url}`);

    try {
        const data = await methods.getAllPeople(req.query.sortBy); 
        res.json(data);
        console.log('Request completed.');
    } catch (error) {
        console.error(error);
    }
});

app.get('/planets', async (req, res, next) => {
    console.log(`Received GET request for resource: ${req.url}`);

    try {
        const data = await methods.getAllPlanets(); 
        res.json(data);
        console.log('Request completed.');
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => console.log(`Hello, Alderaan!\nExpress.js app is listening on: Port ${port}\n`));
