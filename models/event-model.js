
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
        
        return model;
    }

    static ToJSON(eventModel)
    {
        var json = {};
        json.id = eventModel.id;
        json.name = eventModel.name;
        json.shortdesc = eventModel.shortdesc;
        json.longdesc = eventModel.longdesc;
        json.price = eventModel.price;
        json.headerimg = eventModel.headerimg;
        return json;
    }
}

module.exports = { EventModel };