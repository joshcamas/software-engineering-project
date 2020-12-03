
var EventModel = require('../models/event-model').EventModel;

const util = require('util');

class GetOwnedEventsService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    GetOwnedEvents(userId, onComplete)
    {
        var query = "SELECT * FROM `events` where `owner`= '" + userId + "';";
        
        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;

                var events = [];

                for(var i = 0; i < results.length; i++)
                    events.push(EventModel.Create(results[i]))

                onComplete(events,results);
            }
        );
    }


}

module.exports = { GetOwnedEventsService };
