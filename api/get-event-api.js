class GetEventAPI
{
    static Create(app,database)
    {
        app = app;
        database = database;

        app.get('/api/event', function(req, res) {
            let id = req.query.id;
            console.log(id);
            database.connection.query('SELECT * from events WHERE id = ' + id, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
              });
        });
    }

}

module.exports = { GetEventAPI };