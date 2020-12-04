
var EventModel = require('../models/event-model').EventModel;
var TicketModel = require('../models/ticket-model').TicketModel;


class GetInventoryAPI
{
    static Create(app,database,passport)
    {
        app = app;
        database = database;

        app.get('/api/inventory', passport.isLoggedIn,
            function(req, res) {

                let id = req.user.id;
                database.connection.query('SELECT * FROM inventory WHERE user_id = ' + id, 
                function (error, results, fields) {
                    if (error) throw error;
                        
                    if(results.length == 0)
                    {
                        onComplete([],results);
                        return;
                    }

                    var fulltickets = [];

                    for(var i = 0; i < results.length; i++)
                        fulltickets.push(TicketModel.Create(results[i]));

                    processTicket(results,0,fulltickets,function (fulltickets)
                    {
                        res.send(fulltickets);
                    });
                    
                });
            }
        );

        
        function processTicket(results,index,fulltickets,onComplete)
        {
            var ticket = fulltickets[index];

            var query = "SELECT * FROM `events` where `id`= '" + ticket.eventId + "';";
            database.connection.query(query, 
                function (error, event) {
                    if(error)
                        throw error;
                    
                    fulltickets[index].event = EventModel.Create(event[0]);
                    
                    if(index + 1 >= results.length)
                        onComplete(fulltickets);
                    else
                    processTicket(results,index+1,fulltickets,onComplete)
                }
            );
        }

    }

}

module.exports = { GetInventoryAPI };