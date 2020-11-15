const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const passport = require('passport');

const db = require('./services/database-service');

const ListEventsAPI = require('./api/list-events-api').ListEventsAPI;
const CreateEventAPI = require('./api/create-event-api').CreateEventAPI;
const GetEventAPI = require('./api/get-event-api').GetEventAPI;
const GetInventoryApi = require('./api/get-inventory-api').GetInventoryAPI;

const app = express();
const port = 3000;

app.use(express.static('views'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//Startup webserver
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
GetEventAPI.Create(app, database);
GetInventoryApi.Create(app, database);

//This ensures refresh doesn't return get error
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})