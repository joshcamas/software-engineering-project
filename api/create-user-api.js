
var GetUserService = require('../services/get-user-service').GetUserService;
var CreateUserService = require('../services/create-user-service').CreateUserService;
var UserModel = require('../models/user-model').UserModel;

class CreateUserAPI {
	static Create(app, database,passport) {
		app = app;
		database = database;

		app.post("/api/sign-up",
			//If already logged in, then redirect
			function (req, res, next)
			{
				if(req.isAuthenticated()) { return res.redirect('/account/'); }
				else { return next();}
			}, 
			//Login
			function (req, res, next) {

                var username = req.body["username"];
                var password = req.body["password"];
                var email = req.body["email"];

                console.log("USername " + username);
                console.log("Password " + password);

                //res.message("Hellow :)");
                
                //Make sure username and password are of suitable length
                if(username.length < 4)
                {
                    console.log("Username too short");
                    req.flash('error', 'Username must be at least 4 characters');
                    res.status(204).send();
                    return;
                }

                if(email.length < 6)
                {
                    console.log("Email too short");
                    req.flash('error', 'Invalid email');
                    res.status(204).send();
                    return;
                }

                if(password.length < 6)
                {
                    console.log("Password too short");
                    req.flash('error', 'Password must be at least 6 characters');
                    res.status(204).send();
                    return;
                }
                
                //TODO: START USING PROMISES, THIS IS DISGUSTING

                var service = new GetUserService(app, database);

                function checkUsername(onComplete)
                {
                    service.GetUserByUsername(username, function (user) 
                    {
                        if(user != null)
                        {
                            console.log('Username already exists');
                            req.flash('error', 'Username already exists');
                            res.status(204).send();
                            onComplete(true);
                            return;
                        }
                        onComplete(false);
                    });
                }

                
                function checkEmail(onComplete)
                {
                    service.GetUserByEmail(email, function (user) 
                    {
                        if(user != null)
                        {
                            console.log('Email already exists');
                            req.flash('error', 'Email already exists');
                            res.status(204).send();
                            onComplete(true);
                            return;
                        }
                        onComplete(false);
                    });
                }

                checkUsername(function (found)
                {
                    if(found)
                        return;

                    checkEmail(function (found)
                    {
                        if(found)
                            return;

                        var user = new UserModel();
                        user.username = username;
                        user.email = email;
                        user.setPassword(password);

                        var createUser = new CreateUserService(app,database);
                        createUser.CreateUser(user,function () 
                        {
                            console.log('Created Account');
                            return res.redirect('/account/');
                        });
                    });
                });

			});
	}

}

module.exports = { CreateUserAPI };