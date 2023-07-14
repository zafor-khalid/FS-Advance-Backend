const express = require('express');
const countCharacters = require('./utils/countCharacters');
const generateRandomPrime = require('./utils/generateRandomPrime');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const generatePerson = require('./utils/generatePerson');
app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.get('/random-prime', (req, res) => {
    const { min, max } = req.query;
    const randomNumber = generateRandomPrime(Number(min), Number(max));

    res.status(200).json({ 'random-prime': randomNumber });
});

app.get('/count-character', (req, res) => {
    const { string } = req.query;
    const result = countCharacters(string);
    res.status(200).json({ countingObj: result });
});
app.post('/create-profile', (req, res) => {
    const { fields } = req.body;

    res.status(201).json({ person: generatePerson(fields) });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
