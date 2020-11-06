
var CreateEventService = require('../services/create-event-service').CreateEventService;
var EventModel = require('../models/event-model').EventModel;

class CreateEventAPI
{
    static Create(app,database)
    {
        app = app;
        database = database;

        app.get('/api/create-event/', function(req, res) {
            
            var event = new EventModel(res);
            var service = new CreateEventService(app,database);

            service.CreateEvent(event,null)
        });
    }
}

module.exports = { CreateEventAPI };