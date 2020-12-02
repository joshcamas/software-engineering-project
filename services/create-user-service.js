
const util = require('util');

class CreateUserService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    CreateUser (userData,onComplete)
    {
        var command_template = "INSERT INTO `users` (`username`,`password`,`email`,`salt`) VALUES ('%s','%s','%s','%s');";
        var command = util.format(command_template, userData.username, userData.hashpassword,userData.email, userData.salt);

        this.database.connection.query(command, function (error, results, fields) {
            
            if(error)
                throw error;

            if(onComplete != null)
                onComplete(results,error);
          });
    }
}

module.exports = { CreateUserService };
