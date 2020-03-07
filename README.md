# Sample Node.js REST API
## Overview
* [Prerequisites](#prerequisites)
* [Installing MySQL](#installing-mysql)
* [Configuring MySQL Workbench](#configuring-mysql-workbench)
* [Running the RESTful Backend](#running-the-restful-backend)

## Prerequisites  
* [Node.js](https://nodejs.org/en/download/)
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
* [Homebrew](https://brew.sh/) (Optional)
* MySQL

## Installing MySQL
To start you will need to install MySQL. I found the easiest way to do this was using homebrew. In the terminal, enter the following commands:
```
brew install mysql
```
```
brew services start mysql
```
```
mysqladmin -u root password 'newpassword'
```

## Configuring MySQL Workbench
We will now need to set up MySQL Workbench. Start by opening the application, create a new connection with all of the default values, and start that connection.
Make sure that the connection is working properly.

## Running the RESTful Backend
If you haven't already, clone this repository to your local machine. In the `sample-node-sql` directory, enter the following commands to meet the prerequisites of the project:
```
npm install express, mysql
```
To run this server, I used `nodemon` which is an npm package which essentially allows you to make edits in the code and visualize it in the browser without having to constantly stop and restart the server. To install this package run the command:
```
npm install nodemon
```
We now have all the required packages. In the `app.js` make sure that all of the attributes and credentials are correct in the `createConnection()` section. If you don't have a password for your mysql instance, change the line to  
`password : ''`  
  

Now we're ready to start up the RESTful service. In your terminal, run the command `$ nodemon`, and you should see a couple messages saying:  
```
"Server started on port 3000..."  
"MySql Connected..."
```

Navigate to [localhost:3000/](http://localhost:3000/) and you should see `Sadaqa`.  
  
### You're now ready to sample out some of the available routes:  
**Note:** After each available step, you should be able to see these updates reflected in your MySQL Database.  
  
  
To create a database, navigate to [localhost:3000/createdb](http://localhost:3000/createdb)  
To create a table in that database, navigate to [localhost:3000/createtransactiontable](http://localhost:3000/createtransactiontable)  
To delete the database, navigate to [localhost:3000/deletedb](http://localhost:3000/deletedb)  
