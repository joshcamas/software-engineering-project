const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');

const db = require('./services/database-service');

const ListEventsAPI = require('./api/list-events-api').ListEventsAPI;
const CreateEventAPI = require('./api/create-event-api').CreateEventAPI;
const GlobalInventoryAPI = require('./api/global-inventory-api').GlobalInventoryAPI;


//Startup webserver

app.use(express.static('views'));
app.use(cors());

app.listen(port, () => {
  console.log(`Tikit Server at http://localhost:${port}`)
})

//Connect to database
var database = new db.Database("localhost","admin","password123","tikit");
database.createConnection(mysql);
database.connect()

//Initialize API's
ListEventsAPI.Create(app,database);
CreateEventAPI.Create(app,database);
GlobalInventoryAPI.Create(app,database);