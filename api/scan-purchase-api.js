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
                var matchingevent = req.query.eventid;

                //Convert qr code to ticket code
                var qrservice = new GenerateQRCodeService();
                var ticketID = qrservice.GetTicketIDFromQRCodeString(qrcode);

                //Get ticket info
                var gtservice = new GetTicketService(app,database);
                gtservice.GetTicketByID(ticketID,function (ticket)
                {
                    if(ticket == null)
                    {
                        console.log("Ticket does not exist");
                        res.send({success:false, error:"Ticket does not exist"});
                        return;
                    }

                    if(ticket.eventId != matchingevent)
                    {
                        console.log("Ticket is for a different event (Ticket Event ID:" + ticket.eventId +")");
                        res.send({success:false, error:"Ticket is for a different event"});
                        return;
                    }

                    if(ticket.used)
                    {
                        console.log("Ticket already used");
                        res.send({success:false, error:"Ticket already used"});
                        return;
                    }

                    //Get event ID
                    var geservice = new GetEventService(app, database);
                    geservice.GetEventByID(ticket.eventId,function(event,eventraw)
                    {
                        if(event == null)
                        {
                            console.log("Event not found (Event:" + ticket.eventId);
                            res.send({success:false, error:"Event Not Found"});
                            return;
                        }

                        //Make sure scanner is event owner
                        var scannerUserId = req.user.id;

                        if(scannerUserId != event.owner)
                        {
                            console.log("Only event owner may scan tickets");
                            res.send({success:false, error:"Only event owner may scan tickets"});
                            return;
                        }
                        
                        var upservice = new UsePurchaseService(app,database);
                        upservice.UsePurchase(ticket.id,function (success,message)
                        {
                            if(success)
                            {
                                console.log("Successfully used ticket!");
                                res.send({success:true, message:"Successfully used ticket!"});
                                return;
                            }
                            else 
                            {
                                console.log("Scanning Failed, " + message);
                                res.send({success:false, error:"Scanning Failed, " + message});
                                return;
                            }
                        });

                    });
                });
        });
    }
}

module.exports = { ScanPurchaseAPI };