
const util = require('util');

class CreateEventService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    CreateEvent(eventData,onComplete)
    {
        var _this = this;

        if(isNaN(parseInt(eventData.price)))
        {
            onComplete(null,"Price is not valid");
            return;
        }

        var command_template = "INSERT INTO `events` (`name`,`shortdesc`,`longdesc`,`price`, `owner`) VALUES ('%s','%s','%s',%s, %s);";
        var command = util.format(command_template, eventData.name,eventData.shortdesc,eventData.longdesc,parseInt(eventData.price), parseInt(eventData.owner));

        this.database.connection.query(command, function (error, results, fields) {
            if(error)
                throw error;

            //Automatically generate header image name based on insertID
            command_template = "UPDATE `events` SET headerimg = '%s' WHERE id = %s;";
            var command = util.format(command_template, "event_"+results.insertId+".png", results.insertId);

            _this.database.connection.query(command, function (error, nresults, fields)
            {
                if(error)
                    throw error;

                if(onComplete != null)
                    onComplete(results);
            });
          });
    }
}

module.exports = { CreateEventService };
