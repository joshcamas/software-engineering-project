
class GlobalInventoryAPI
{
    static Create(app,database)
    {
        app = app;
        database = database;

        app.get('/api/globalinventory', function(req, res) {

            database.connection.query('SELECT * FROM inventory LEFT JOIN events ON inventory.event_id = events.id', function (error, results, fields) {
                if (error) throw error;
                res.send(results);
              });
              
        });
    }

}

module.exports = { GlobalInventoryAPI };