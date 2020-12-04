
var TicketModel = require('../models/ticket-model').TicketModel;

class GetTicketService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    GetTicketByID(ticketID,onComplete)
    {
        if(typeof ticketID == 'undefined')
        {
            onComplete(null);
            return;
        }
        
        var query = "SELECT * FROM `inventory` where `id`= " + ticketID + ";";

        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;

                if(results.length == 0)
                    onComplete(null);
                else
                    onComplete(TicketModel.Create(results[0]));
            }
        );
    }

    GetTicketForUserAndEvent(userID, eventID, onComplete)
    {
        if(typeof userID == 'undefined' || typeof eventID == 'undefined')
        {
            onComplete(null);
            return;
        }

        var query = "SELECT * FROM `inventory` where `user_id`= '" + userID + "' and `event_id`= `" + eventID + "`;";

        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;

                if(results.length == 0)
                    onComplete(null);
                else
                    onComplete(TicketModel.Create(results[0]));
            }
        );
    }


}

module.exports = { GetTicketService };
