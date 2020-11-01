const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const db = require('./services/database');
const listevents = require('./api/listevents');

//Startup webserver

app.use(express.static('views'));

app.listen(port, () => {
  console.log(`Tikit Server at http://localhost:${port}`)
})

//Connect to database
var database = new db.Database("localhost","admin","password123","tikit");
database.createConnection(mysql);

if(!database.testConnection())
	return;

//Initialize API's
new listevents.ListEventsAPI(app,database).init();