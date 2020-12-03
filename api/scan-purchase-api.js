var GetTicketService = require('../services/get-ticket-service').GetTicketService;
var GenerateQRCodeService =  require('../services/generate-qrimage-service').GenerateQRCodeService;
var GetEventService = require('../services/get-event-service').GetEventService;
var UsePurchaseService = require('../services/use-purchase-service').UsePurchaseService;

class ScanPurchaseAPI
{
    static Create(app,database,passport)
    {
        app.get('/api/scan-purchase/', 
            passport.isLoggedIn,
            function(req, res) {
                
                var qrcode= req.query.qrcode;
                
                if(typeof qrcode === 'undefined')
                    qrcode = req.qrcode;
                
                //Convert qr code to ticket code
                var qrservice = new GenerateQRCodeService();
                var ticketID = qrservice.GetTicketIDFromQRCodeString(qrcode);

                //Get ticket info
                var gtservice = new GetTicketService(app,database);
                gtservice.GetTicketByID(ticketID,function (ticket)
                {
                    if(ticket.used)
                    {
                        console.log("Ticket already used");
                        res.status(204).send("Ticket already used");
                        return;
                    }

                    //Get event ID
                    var geservice = new GetEventService(app, database);
                    geservice.GetEventByID(ticket.eventid,function(event,eventraw)
                    {
                        if(event == null)
                        {
                            console.log("Event not found");
                            res.status(204).send("Event Not Found");
                            return;
                        }

                        //Make sure scanner is event owner
                        var scannerUserId = req.user.id;

                        if(scannerUserId != event.owner)
                        {
                            console.log("Only event owner may scan tickets");
                            res.status(204).send("Only event owner may scan tickets");
                            return;
                        }
                        
                        var upservice = new UsePurchaseService(app,database);
                        upservice.UsePurchase(ticket.id,function (success,message)
                        {
                            if(success)
                            {
                                console.log("Only event owner may scan tickets");
                                res.status(204).send("Successfully Used Ticket!");
                                return;
                            }
                            else 
                            {
                                console.log("Scanning Failed, " + message);
                                res.status(204).send("Scanning Failed, " + message);
                                return;
                            }
                        });

                    });
                });
        });
    }
}

module.exports = { ScanPurchaseAPI };