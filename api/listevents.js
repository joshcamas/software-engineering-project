
class ListEventsAPI
{
    constructor(app,database)
    {
        this.app = app;
        this.database = database;
    }

    init()
    {
        this.app.get('/event/', function(req, res) {
            res.send('Return Event Data Here');
        });
    }
}
module.exports = { ListEventsAPI };