
class TicketModel
{
    constructor()
    {
        this.id = -1;
        this.eventId = -1;
        this.userId = -1;
        this.used = false;
        this.purchasedDate = 0;
    }

    static Create(json)
    {
        var model = new TicketModel();

        model.id = json["id"];
        model.eventId = json["event_id"];
        model.userId = json["user_id"];
        model.used = json["used"];
        model.purchasedDate = json["purchase_date"];

        return model;
    }

    static ToJSON(eventModel)
    {
        var json = {};
        json.id = eventModel.id;
        json.event_id = eventModel.eventId;
        json.user_id = eventModel.userId;
        json.used = eventModel.used;
        return json;
    }
}

module.exports = { TicketModel };