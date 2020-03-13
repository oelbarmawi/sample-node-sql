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

const app = express();

app.get('/', (req, res) => {
    res.send("Sadaqa")
});

app.get('/createdb', (req, res) => {
    let sql_query = 'CREATE DATABASE sampledb';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        console.log('Database created...');
        res.send('Database created...');
    });
});

app.get('/createtransactiontable', (req, res) => {
    let sql_query = 'CREATE TABLE sampledb.transactions(id int, name VARCHAR(255), amount int)';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        console.log('Table created...');
        res.send('Table created...');
    });
});

app.get('/deletedb', (req, res) => {
    let sql_query = 'DROP DATABASE sampledb';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        console.log('Database deleted...');
        res.send('Database deleted...');
    });
});

app.post('/insert/credentials', (req, res) => {
    let sql_query = 'CREATE DATABASE sampledb';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        // consle.send('SampleDB created...');
        console.log('SampleDB created...')
    });

    sql_query = 'CREATE TABLE sampledb.users(username VARCHAR(255), password VARCHAR(255))';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        // res.send('Users table created...');
        console.log('Users table created...')
    });

    let insert_query = `INSERT INTO sampledb.users(username, password) VALUES ('${req.headers.user}', '${req.headers.pass}')`;
    db.query(insert_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        console.log('Data successfully inserted into SampleDB.');
        res.send('Data successfully inserted into SampleDB.');
    });

});

const port = process.env.PORT || '5000';
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});