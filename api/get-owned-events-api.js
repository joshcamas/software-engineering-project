var GetOwnedEventsService = require('../services/get-owned-events-service').GetOwnedEventsService;


class GetOwnedEventsAPI
{
    static Create(app,database,passport)
    {
        app.get('/api/get-owned-events/', 
            passport.isLoggedIn,
            function(req, res) {
                
                var service = new GetOwnedEventsService(app,database);
                service.GetOwnedEvents(req.user.id,function(events) 
                {
                    res.send(events);
                });

        });
    }
}

module.exports = { GetOwnedEventsAPI };