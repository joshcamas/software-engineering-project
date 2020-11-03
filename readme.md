# Tik-it: A ticket purchasing platform

## Creating MySQL database
First you must install MySQL on your computer. 

Then create the database and user via:
```
CREATE DATABASE tikit;
CREATE USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY 'password123';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
FLUSH PRIVILEGES;
```
The reason why we have to create a username with mysql_native_password is due to nodej's mysql module's antiquated authentication module. This ensures the user has the correct type of authentication.
