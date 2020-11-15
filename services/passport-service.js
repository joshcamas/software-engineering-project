const passport = require('passport');
const flash = require('connect-flash');
const session   = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var GetUserService = require('../services/get-user-service').GetUserService;

const LocalStrategy = require('passport-local').Strategy;

//Wrapper for passport
class PassportService
{
    constructor(app, database)
    {
        this.app = app;
        this.passport = passport;

        app.use(session({
            secret: 'secret tikit',
            resave: true,
            saveUninitialized: true,
            cookie: { secure: false } 
        }));
        
        app.use(cookieParser('secret tikit'));

        app.use(passport.initialize());
        app.use(passport.session());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.use(flash());

        //Implement local strategy (password + username)
        passport.use(new LocalStrategy(
            {
            passReqToCallback: true
            },
            function (body, username, password, done) {
            
            var service = new GetUserService(app, database);
            service.GetUserByUsername(username, function (user) 
            {
                if(user == null)
                {
                    console.log("No matching user");
                    return done(null, false, { message: 'Incorrect username.' });
                }
                
                if(!user.validPassword(password))
                {
                    console.log("No matching password");
                    return done(null, false, { message: 'Incorrect password.' });
                }
                
                console.log("Successfully Logged in");
                return done(null, user);
            });
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user.username);
        });

        passport.deserializeUser((username, done) => {
            done(null, {username: username});
        }); 
        
    }

    isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            console.log("Is authenticated");
            return next();
        } else {
            console.log("Is not");
            return res.redirect('/sign-in');
        }
    }

    authenticate(options, oncomplete)
    {
        return passport.authenticate("local",options, oncomplete);
    }
}
module.exports = { PassportService };