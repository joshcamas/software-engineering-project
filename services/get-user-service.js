
const util = require('util');

var UserModel = require('../models/user-model').UserModel;

class GetUserService
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    GetUserByUsername(username, onComplete)
    {
        var query = "SELECT * FROM `users` where `username`= '" + username + "';";
        
        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;

                console.log(results);

                if(results.length == 0)
                    onComplete(null);
                else
                    onComplete(UserModel.Create(results[0]));

            }
        );
    }

    CreateUser (userData,onComplete)
    {
        var command_template = "INSERT INTO `users` (`username`,`password`,`email`) VALUES ('%s','%s','%s');";
        var command = util.format(command_template, userData.username,userData.password,userData.email);

        this.database.connection.query(command, function (error, results, fields) {
            if(onComplete != null)
                onComplete(results,error);
          });
    }
}

module.exports = { GetUserService };
