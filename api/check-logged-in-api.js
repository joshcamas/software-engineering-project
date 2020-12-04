
class CheckLoggedInAPI 
{
    static Create(app,database,passport)
    {
        app.get('/api/check-logged-in', function(req, res)
        {
            if(req.isAuthenticated())
            {
                res.send(req.user);
            }
            else 
            {
                res.send("false");
            }
        });
    }
}

module.exports = { CheckLoggedInAPI };