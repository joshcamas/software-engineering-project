
var GetEventService = require('../services/get-event-service').GetEventService;

class ListEventsAPI
{
    static Create(app,database)
    {
        app.get('/api/listevents', function(req, res) {

            var service = new GetEventService(app,database);
            service.GetAllEvents(function (events,results)
            {
                res.send(events);
            });

        });
    }

}

module.exports = { ListEventsAPI };