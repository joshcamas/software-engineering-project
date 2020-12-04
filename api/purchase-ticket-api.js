
var PurchaseTicketService = require('../services/purchase-ticket-service').PurchaseTicketService;

class PurchaseTicketAPI
{
    static Create(app,database,passport)
    {
        app.get('/api/purchase-ticket/', 
            passport.isLoggedIn,
            function(req, res) {
                
                var eventid = req.query.eventid;
                
                if(typeof eventid === 'undefined')
                    eventid = req.eventid;
                
                var userid = req.user.id;

                console.log("Purchasing Ticket for " + userid + " and event ID " + eventid);

                var service = new PurchaseTicketService(app,database);
                service.PurchaseTicket(req.user.id,eventid,function(success,message)
                {
                    if(success)
                        res.send({success:true,url:'/account'});
                    else 
                        res.send({success:false,error:message});
                });

        });
    }
}

module.exports = { PurchaseTicketAPI };