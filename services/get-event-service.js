
var EventModel = require('../models/event-model').EventModel;

class GetEventService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    GetEventByID(id, onComplete)
    {
        if(typeof id == 'undefined')
        {
            onComplete(null);
            return;
        }

        var _this = this;
        var query = "SELECT * FROM events where id= " + id + ";";

        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;
                if(results.length == 0)
                {
                    onComplete(null);
                    return;
                }
                var event = results[0];

                if(event.date != null)
                {
                    event.time = event.date.split(" ")[1];
                    event.date = event.date.split(" ")[0];
                }

                var query2 = "SELECT * FROM `inventory` where `event_id`= '" + id + "';";
                _this.database.connection.query(query2, 
                    function (error, invresults) {
                        if(error)
                        throw error;

                        event.soldcount = invresults.length;
                        onComplete(EventModel.Create(event),results[0]);

                    });

            }
        );
    }


    GetAllEvents(onComplete)
    {
        var _this = this;
        var query = "SELECT * FROM events;";

        function processEvent(results,index,events,onComplete)
        {
            var event = results[index];

            if(event.date != null)
            {
                event.time = event.date.split(" ")[1];
                event.date = event.date.split(" ")[0];
            }

            var query = "SELECT * FROM `inventory` where `event_id`= '" + event.id + "';";
            _this.database.connection.query(query, 
                function (error, invresults) {
                    if(error)
                        throw error;

                    event.soldcount = invresults.length;
                    events.push(EventModel.Create(event));

                    if(index + 1 >= results.length)
                        onComplete(events);
                    else
                        processEvent(results,index+1,events,onComplete)
                }
            );
        }

        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;

                if(results.length == 0)
                {
                    onComplete([],results);
                    return;
                }
                processEvent(results,0,[],function (events)
                {
                    onComplete(events,results);
                });
            }
        );
    }
}

module.exports = { GetEventService };
