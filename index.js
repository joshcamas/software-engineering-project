const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const db = require('./services/database');
const listEventsAPI = require('./api/listevents');
const createEventsAPI = require('./api/createevent');


//Startup webserver

app.use(express.static('views'));

app.listen(port, () => {
  console.log(`Tikit Server at http://localhost:${port}`)
})

//Connect to database
var database = new db.Database("localhost","admin","password123","tikit");
database.createConnection(mysql);

database.connect()

//Initialize API's
listEventsAPI.ListEventsAPI.Create(app,database);
createEventsAPI.CreateEventAPI.Create(app,database);