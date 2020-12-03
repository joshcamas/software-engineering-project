
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
        
        return model;
    }
}

module.exports = { EventModel };