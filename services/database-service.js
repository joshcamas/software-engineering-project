
//Database Wrapper
class DatabaseService
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
	
	query(sql, args)
	{
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        });
	}

	connect()
	{
		this.connection.connect(function(err) {
			if (err) {
                console.error('Connection Error: ' + err.message);
			}
            console.log('Connected to the MySQL server.');
		});
	}
	
	destroy()
	{
		if(this.connection)
			this.connection.destroy();
	}
	
}

module.exports = { DatabaseService };