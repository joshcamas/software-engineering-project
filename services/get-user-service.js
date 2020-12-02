
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

                if(results.length == 0)
                    onComplete(null);
                else
                    onComplete(UserModel.Create(results[0]));

            }
        );
    }

    GetUserByEmail(email, onComplete)
    {
        var query = "SELECT * FROM `users` where `email`= '" + email + "';";
        
        this.database.connection.query(query, 
            function (error, results, fields) {
                if(error)
                    throw error;
                    
                if(results.length == 0)
                    onComplete(null);
                else
                    onComplete(UserModel.Create(results[0]));

            }
        );
    }

}

module.exports = { GetUserService };
