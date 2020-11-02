
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
        var command_template = "INSERT INTO `events` (`name`,`shortdesc`,`longdesc`,`price`, `headerimg`) VALUES ('%s','%s','%s', '%s', '%s');";
        var command = util.format(command_template, eventData.name,eventData.shortdesc,eventData.longdesc,parseInt(eventData.price),eventData.headerimg);

        this.database.connection.query(command, function (error, results, fields) {
            if(onComplete != null)
                onComplete(results,error);
          });
    }
}

module.exports = { CreateEventService };
