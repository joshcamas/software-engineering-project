
var multer  = require('multer')

var CreateEventService = require('../services/create-event-service').CreateEventService;
var EventModel = require('../models/event-model').EventModel;

class CreateEventAPI
{
    static Create(app,database,passport)
    {
        app.post('/api/create-event/', passport.isLoggedIn,
            function(req, res) {
            
            var rawEvent = req.body;
            rawEvent.owner = req.user.id;
            
            var event = EventModel.Create(rawEvent);
            var service = new CreateEventService(app,database);

            service.CreateEvent(event,function(results,message)
            {
                if(results == null)
                {
                    console.log("Failed to create event: '" + message + "'")
                    res.send({success:false,error:message});
                    return;
                }

                CreateEventAPI._uploadFile(req,res,function()
                {
                    res.send({success:true,url:'/event?id=' + results.insertId});
                });
            });

        });
    }
    
    static _uploadFile(req, res, next) 
    {
        var upload = multer({ dest: 'site/assets/events/' })

        upload.single('headerimg')(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log("Failed to Upload Image: " + err);

                res.send({success:false,error:"Failed to Upload Image"});
                return;
            } else if (err) {
                console.log("Failed to Upload Image: Unknown Error");

                res.send({success:false,error:"Failed to Upload Image"});
                return;
            }
            console.log("Successfully uploaded image");
            next();
          })
    }

}

module.exports = { CreateEventAPI };