
var EventModel = require('../models/event-model').EventModel;
var GetEventService = require('../services/get-event-service').GetEventService;

class GetEventAPI
{
    static Create(app,database)
    {
        app = app;
        database = database;

        app.get('/api/event', function(req, res) {
            let id = req.query.id;

            var service = new GetEventService(app, database);
            service.GetEventByID(id,function(event,eventraw)
            {
                if(event != null)
                    res.send(event);
                else 
                    res.send("");
            });

        });
    }

}

module.exports = { GetEventAPI };