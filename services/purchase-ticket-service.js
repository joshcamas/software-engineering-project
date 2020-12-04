
const util = require('util');

class PurchaseTicketService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    PurchaseTicket (userID, eventID,onComplete)
    {
        var command_template = "INSERT INTO `inventory` (`user_id`,`event_id`,`used`,`purchase_date`) VALUES ('%s','%s','%s',%s);";
        var command = util.format(command_template, parseInt(userID), parseInt(eventID), 0, "NOW()");

        this.database.connection.query(command, function (error, results, fields) {
            if(error)
                throw error;

            if(onComplete != null)
                onComplete(true);
          });
    }
}

module.exports = { PurchaseTicketService };
