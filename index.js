const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const DatabaseService = require('./services/database-service').DatabaseService;
const PassportService = require('./services/passport-service').PassportService;

const ListEventsAPI = require('./api/list-events-api').ListEventsAPI;
const CreateEventAPI = require('./api/create-event-api').CreateEventAPI;
const GetEventAPI = require('./api/get-event-api').GetEventAPI;
const GetInventoryAPI = require('./api/get-inventory-api').GetInventoryAPI;
const LoginAPI = require('./api/login-api').LoginAPI;
const CreateUserAPI = require('./api/create-user-api').CreateUserAPI;
const PurchaseTicketAPI = require('./api/purchase-ticket-api').PurchaseTicketAPI;
const GetQRCodeAPI = require('./api/get-qrcode-api').GetQRCodeAPI;
const ScanPurchaseAPI = require('./api/scan-purchase-api').ScanPurchaseAPI;
const GetOwnedEventsAPI = require('./api/get-owned-events-api').GetOwnedEventsAPI;

const app = express();
const port = 3000;

app.use(express.static('views'));
app.use(cors());

app.use(fileUpload({
  createParentPath: true
}));

//Startup webserver
app.listen(port, () => {
  console.log(`Tikit Server at http://localhost:${port}`)
})

//Connect to database
var database = new DatabaseService("localhost","admin","password123","tikit");
database.createConnection(mysql);
database.connect()

//Set up passport
var passport = new PassportService(app, database);

//Initialize API's
ListEventsAPI.Create(app,database);
CreateEventAPI.Create(app,database,passport);
GetEventAPI.Create(app, database);
GetInventoryAPI.Create(app, database, passport);
LoginAPI.Create(app, database, passport);
CreateUserAPI.Create(app, database, passport);
PurchaseTicketAPI.Create(app, database, passport);
GetQRCodeAPI.Create(app,database,passport);
ScanPurchaseAPI.Create(app,database,passport);
GetOwnedEventsAPI.Create(app,database,passport);

//This ensures refresh doesn't return get error
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
})
  