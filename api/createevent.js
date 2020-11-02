
var CreateEventService = require('./../services/createevent').CreateEventService;
var EventModel = require('./../models/event').EventModel;

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