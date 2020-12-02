
var GetUserService = require('../services/get-user-service').GetUserService;


class LoginAPI {
	static Create(app, database,passport) {

		app.post("/api/sign-in",
			passport.isNotLoggedIn, 
			function (req, res, next) {
				passport.authenticate({failureFlash: true},
				function (err, user, info) {
					console.log(info);
					if(user != false)
					{
						console.log("Signing In");
						req.login(user, function(error) {
							if (error) return next(error);
							res.redirect('/account/');
						});
					}
					else 
					{
						console.log("Failed to login");
						res.status(204).send(info.message);
					}
					
				})(req, res, next);
			}
		);

		app.get('/sign-out', function (req, res) {
			console.log("Signing Out");
			req.logout();
			res.redirect('/sign-in');
		});

		app.get('/api/sign-out', function (req, res) {
			console.log("Signing Out");
			req.logout();
			res.redirect('/sign-in');
		});

		app.get('/api/test', passport.isLoggedIn, function (req, res)
		{
			console.log("IS LOGGED IN");
		});
	}

}

module.exports = { LoginAPI };