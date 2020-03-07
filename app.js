const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'password'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});
// db.connect();

const app = express();

app.get('/', (req, res) => {
    res.send("Sadaqa")
});

app.get('/createtransactiontable', (req, res) => {
    let sql_query = 'CREATE TABLE sampledb.transactions(id int, name VARCHAR(255), amount int)';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Table created...');
    });
});

app.get('/createdb', (req, res) => {
    let sql_query = 'CREATE DATABASE sampledb';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.get('/deletedb', (req, res) => {
    let sql_query = 'DROP DATABASE sampledb';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database deleted...');
    });
});

const port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});