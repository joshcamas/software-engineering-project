
var GetUserService = require('../services/get-user-service').GetUserService;


class LoginAPI {
	static Create(app, database,passport) {

		app.post("/api/sign-in",
			passport.isNotLoggedIn, 
			function (req, res, next) {
				passport.authenticate({failureFlash: true},
				function (err, user, info) {
					if(user != false)
					{
						req.login(user, function(error) {
							if (error) return next(error);
							res.send({success:true,url:'/account'});
						});
					}
					else 
					{
						res.send({success:false,error:info.message});
					}
					
				})(req, res, next);
			}
		);

		app.get('/sign-out', function (req, res) {
			req.logout();
			res.redirect('/sign-in');
		});

		app.get('/api/sign-out', function (req, res) {
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