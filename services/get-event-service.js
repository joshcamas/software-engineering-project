
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
        var query = "SELECT * FROM events where id= " + id + ";";

        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;
                
                if(results.length == 0)
                    onComplete(null);
                else
                    onComplete(EventModel.Create(results[0]),results[0]);
            }
        );
    }


}

module.exports = { GetEventService };
