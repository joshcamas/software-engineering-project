const LocalStrategy = require('passport-local').Strategy;

class LoginAPI
{
    static Create(app,database)
    {
        app = app;
        database = database;

        //Implement local strategy (password + username)
        passport.use(new LocalStrategy(
            function(username, password, done) {
              User.findOne({ username: username }, function(err, user) {
                if (err) { return done(err); }
                if (!user) {
                  return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                  return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
              });
            }
        ));

        app.post('/login', 
            passport.authenticate('local', 
            {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: true 
            }),
            function(req, res) {

                res.redirect('/users/' + req.user.username);

            }
        );

        app.get('/logout', function(req, res){
            req.logout();
            res.redirect('/');
        });
    }

}

module.exports = { LoginAPI };