
const util = require('util');

class UsePurchaseService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    UsePurchase(ticket,onComplete)
    {
        var command_template = "UPDATE `inventory` SET used = %s WHERE id = %s;";
        var command = util.format(command_template, 1, ticket);

        this.database.connection.query(command, function (error, results, fields) {
            if(error)
                throw error;

            if(onComplete != null)
                onComplete(true);
          });
    }
}

module.exports = { UsePurchaseService };
