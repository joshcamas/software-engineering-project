
//Database class
class Database
{
	constructor(host,user,password,database)
	{
		this.host = host;
		this.user = user;
		this.password = password;
		this.database = database;
		this.connection = null;
	}
	
	createConnection(mysql)
	{
		this.connection = mysql.createConnection({
			host: this.host,
			user: this.user,
			password: this.password,
			database: this.database
		});
	}
	
	destroy()
	{
		if(this.connection)
			this.connection.destroy();
	}
	
	testConnection()
	{
		this.connection.connect(function(err) {
			if (err) {
                console.error('Connection Error: ' + err.message);
                return false;
			}
            console.log('Connected to the MySQL server.');
            return true;
		});
	}
	
}

module.exports = { Database };