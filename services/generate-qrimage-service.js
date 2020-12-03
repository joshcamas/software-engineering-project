
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

        QRCode.toDataURL(qrcodestr, function (err, url) {
            onComplete(url);
        })
    }

    CreateStringCodeFromTicket(ticketID)
    {
        return ticketID.toString();
    }
    
    GetTicketIDFromQRCodeString(qrCodeStr)
    {
        return parseInt(qrCodeStr);
    }
}

module.exports = { GenerateQRCodeService };
