
class ListEventsAPI
{
    static Create(app,database)
    {
        app = app;
        database = database;

        app.get('/api/listevents', function(req, res) {

            database.connection.query('SELECT * from events', function (error, results, fields) {
                if (error) throw error;
                res.send(results);
              });

        });
    }

}

module.exports = { ListEventsAPI };