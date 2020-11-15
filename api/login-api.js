
var GetUserService = require('../services/get-user-service').GetUserService;

class LoginAPI {
	static Create(app, database,passport) {
		app = app;
		database = database;

		app.post("/api/sign-in",
			//If already logged in, then redirect
			function (req, res, next)
			{
				if(req.isAuthenticated()) { return res.redirect('/account/'); }
				else { return next();}
			}, 
			//Login
			function (req, res, next) {
				passport.authenticate({failureFlash: true},
				function (err, user, info) {

					if(user != false)
					{
						req.login(user, function(error) {
							if (error) return next(error);
							res.redirect('/account/');
						});
					}
					else 
						res.message(info)
					
				})(req, res, next);
			}
		);

		app.get('/api/sign-out', function (req, res) {
			req.logout();
			res.redirect('/');
		});

		app.get('/api/test', passport.isLoggedIn, function (req, res)
		{
			console.log("IS LOGGED IN");
		});
	}

}

module.exports = { LoginAPI };