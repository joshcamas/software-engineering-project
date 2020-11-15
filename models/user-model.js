const crypto = require('crypto'); 

class UserModel
{
    constructor()
    {
        this.id = -1;
        this.username = "";
        this.hashpassword = "";
        this.email = "";
        this.salt = null;
    }

    static Create(json)
    {
        var model = new UserModel();

        model.id = json["id"];
        model.username = json["username"];
        model.hashpassword = json["password"];
        model.email = json["email"];
        model.salt = json["salt"];
        return model;
    }

    setPassword(password)
    {
        this.salt = crypto.randomBytes(16).toString('hex'); 
        this.hashpassword = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
    }

    validPassword(password) { 

        if(this.salt == null)
            return false;

        var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
        return this.hashpassword === hash; 
    };
}

module.exports = { UserModel };