
var multer  = require('multer');

var CreateEventService = require('../services/create-event-service').CreateEventService;
var EventModel = require('../models/event-model').EventModel;

class CreateEventAPI
{
    static Create(app,database,passport)
    {
        app.post('/api/create-event/', passport.isLoggedIn,
            function(req, res) {
            
            console.log("Creating Event, apparently");

            var rawEvent = req.body;
            rawEvent.owner = req.user.id;
            
            var event = EventModel.Create(rawEvent);
            var service = new CreateEventService(app,database);

            service.CreateEvent(event,function(results,message)
            {
                if(results == null)
                {
                    console.log("Failed to create event: '" + message + "'")
                    res.status(204).send(message);
                    return;
                }

                res.redirect('/event/' + results.insertId);
            });

            //Upload image
            


        });
    }
    
    static _uploadFile(req, res, next) 
    {
        var upload = multer({ dest: 'views/assets/Events' })

        upload.single('headerimg')(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log("Failed to Upload Image: " + err);

                res.status(204).send("Failed to Upload Image");
                return;
            } else if (err) {
                console.log("Failed to Upload Image: Unknown Error");

                res.status(204).send("Failed to Upload Image");
                return;
            }
            console.log("Successfully uploaded image");
            console.log(req.file);
            console.log(req.body);
            next();
          })
    }

}

module.exports = { CreateEventAPI };