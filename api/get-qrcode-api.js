
var GenerateQRCodeService = require('../services/generate-qrimage-service').GenerateQRCodeService;

class GetQRCodeAPI
{
    static Create(app,database,passport)
    {
        app.get('/api/get-qr/', 
            passport.isLoggedIn,
            function(req, res) {
                
                var ticketid = req.query.ticketid;
                
                var service = new GenerateQRCodeService();
                var strcode = service.CreateStringCodeFromTicket(ticketid);
                service.CreateImageDataFromTicket(ticketid,function(imgdata)
                {
                    res.send({code: strcode, img: imgdata});
                });

        });
    }
}

module.exports = { GetQRCodeAPI };