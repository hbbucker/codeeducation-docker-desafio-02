const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fullcycle'
};

const mysql = require('mysql2');
const connection = mysql.createConnection(config);

const ddl = "CREATE TABLE IF NOT EXISTS fullcycle.people(id BIGINT auto_increment NOT NULL PRIMARY KEY, name varchar(100) NULL)";
connection.query(ddl);

const sql = `INSERT INTO people(name) VALUES ('Hugo')`;
connection.query(sql);

var html = '<h1>Full Cycle</h1>';

connection
        .query("SELECT * FROM people", function(err,rows,fields) {
            for (key in rows) {
                html += '(' + rows[key].id + ') ' + rows[key].name + ' </br> ';
                console.log(rows[key]);
            }
        }
    );
connection.end();

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});