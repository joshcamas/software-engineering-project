
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
            scale: 15,
            color: {
                dark:"#FFFFFFFF",
                light:"#00000000"
              }
        }
        QRCode.toDataURL(qrcodestr, options, function (err, url) {
            onComplete(url);
        })
    }

    CreateStringCodeFromTicket(ticketID)
    {
        return "ticketqrcode_" + ticketID.toString();
    }
    
    GetTicketIDFromQRCodeString(qrCodeStr)
    {
        return parseInt(qrCodeStr.substring(13));
    }
}

module.exports = { GenerateQRCodeService };
