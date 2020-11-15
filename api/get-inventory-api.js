
class GetInventoryAPI
{
    static Create(app,database,passport)
    {
        app = app;
        database = database;

        app.get('/api/inventory', passport.isLoggedIn,
            function(req, res) {
                let id = req.query.id;
                console.log(id);
                database.connection.query('SELECT * FROM inventory as a RIGHT JOIN events as b ON a.event_id = b.id WHERE a.user_id = ' + id, 
                function (error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                    res.send(results);
                });
            }
        );
    }

}

module.exports = { GetInventoryAPI };