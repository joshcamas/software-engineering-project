
const util = require('util');
var QRCode = require('qrcode');

class GenerateQRCodeService
{
    constructor()
    {
    }

    CreateImageDataFromTicket(ticketID, onComplete)
    {
        var qrcodestr = this.CreateStringCodeFromTicket(ticketID);

        var options = 
        {
            scale: 15,/*
            color: {
                dark:"#FFFFFFFF",
                light:"#00000000"
              }*/
        }
        QRCode.toDataURL(qrcodestr, options, function (err, url) {
            onComplete(url);
        })
    }

    CreateStringCodeFromTicket(ticketID)
    {
        if(ticketID == null)
            return null;
        
        return "ticketqrcode" + ticketID.toString();
    }
    
    GetTicketIDFromQRCodeString(qrCodeStr)
    {
        if(qrCodeStr == null)
            return null;
        
        return parseInt(qrCodeStr.substring(12));
    }
}

module.exports = { GenerateQRCodeService };
