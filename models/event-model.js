
class EventModel
{
    constructor()
    {
        this.id = -1;
        this.name = "";
        this.shortdesc = "";
        this.longdesc = "";
        this.price = 0;
        this.headerimg = "";
        this.owner = -1;
        this.datetime = null;
        this.soldcount = 0;
    }

    sqlDatetime()
    {
        return this.datetime.toISOString().slice(0, 19).replace('T', ' ');
    }

    static Create(json)
    {
        var model = new EventModel();

        model.id = json["id"];
        model.name = json["name"];
        model.shortdesc = json["shortdesc"];
        model.longdesc = json["longdesc"];
        model.price = json["price"];
        model.headerimg = json["headerimg"];
        model.owner = json["owner"];
        model.ticketcount = json["ticketcount"];

        if(typeof json["soldcount"] != 'undefined')
            model.soldcount = json["soldcount"];
        
        if(json["date"] != null)
        {
            model.datetime = new Date(json["date"]);
        }

        if(json["date"] != null && json["time"] != null)
        {
            var tsplit = json["time"].split(":");
    
            if(tsplit.length == 2 || tsplit.length == 3)
            {
                model.datetime.setHours(parseInt(tsplit[0]))
                model.datetime.setMinutes(parseInt(tsplit[1]))
            }
    
        }
        return model;
    }
}

module.exports = { EventModel };