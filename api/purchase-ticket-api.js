
var PurchaseTicketService = require('../services/purchase-ticket-service').PurchaseTicketService;

class PurchaseTicketAPI
{
    static Create(app,database,passport)
    {
        app.get('/api/purchase-ticket/', 
            passport.isLoggedIn,
            function(req, res) {
                
                var eventid = req.query.eventid;
                
                console.log(req.query.eventid);

                if(typeof eventid === 'undefined')
                    eventid = req.eventid;
                
                var userid = req.user.id;

                console.log("Purchasing Ticket for " + userid + " and event ID " + eventid);

                var service = new PurchaseTicketService(app,database);
                service.PurchaseTicket(req.user.id,eventid,function()
                {
                    console.log("Successfully Purchased!");
                    res.redirect("/account");
                });

        });
    }
}

module.exports = { PurchaseTicketAPI };