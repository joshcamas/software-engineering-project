
var CreateEventService = require('../services/create-event-service').CreateEventService;
var EventModel = require('../models/event-model').EventModel;

class CreateEventAPI
{
    static Create(app,database)
    {
        app = app;
        database = database;

        app.post('/api/create-event/', function(req, res) {
            
            console.log("Creating Event, apparently");

            var event = new EventModel(req.body);
            var service = new CreateEventService(app,database);

            service.CreateEvent(event,null)
        });
    }
}

module.exports = { CreateEventAPI };