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
        this.database = database;

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
                    return done(null, false, { message: 'Incorrect username or password' });
                }
                
                if(!user.validPassword(password))
                {
                    return done(null, false, { message: 'Incorrect username or password' });
                }
                
                console.log("Successfully Logged in");
                return done(null, user);
            });
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser((username, done) => {
            done(null, username);
        }); 
        
    }

    isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        } else {
            return res.redirect('/sign-in');
        }
    }

    isNotLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return res.redirect('/account');
        } else {
            return next();
        }
    }

    authenticate(options, oncomplete)
    {
        return passport.authenticate("local",options, oncomplete);
    }

    getLoggedInUser(req,onComplete)
    {
        var service = new GetUserService(this.app, this.database);
        service.GetUserByUsername(req.user.username, function (user) 
        {
            onComplete(user) 
        });
    }
}
module.exports = { PassportService };