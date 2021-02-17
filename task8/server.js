const express = require('express');
const bodyParser = require('body-parser');

const DataRepository = require('./dataRepository');

const dataRepository1 = new DataRepository('julia_klepitskaia_data1.json');
const dataRepository2 = new DataRepository('julia_klepitskaia_data2.json');
const dataRepository3 = new DataRepository('julia_klepitskaia_data3.json');
const repositories = [dataRepository1, dataRepository2, dataRepository3];
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/pages'));

app.get('/data/1', (_, res) => res.status(200).send(dataRepository1.getAll()));
app.get('/data/2', (_, res) => setTimeout(() => res.status(200).send(dataRepository2.getAll()), 2000));
app.get('/data/3', (_, res) => setTimeout(() => res.status(200).send(dataRepository3.getAll()), 3000));
app.post('/data', (req, res) => {
    const repository = repositories[req.body.dataFile];
    const createdNote = repository.add(req.body);

    repository.write();
    
    res.status(201).send(createdNote);
});

app.listen(3000, () => console.log('Server was runned on 3000 port'));