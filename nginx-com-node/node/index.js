const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sqlInsert = `INSERT INTO people(name) values('Arthur'), ('Enzo')`;
const sqlQuery = `SELECT * FROM people`;

let resultList = [];

app.get('/', (req, res) => {
  connection.query(sqlInsert);
  connection.query(sqlQuery, function (err, result, fields) {
    if (err) throw err;
    resultList = result;
  });
  connection.end();
  res.send('<h1>Full Cycle</h1> <ul>' + resultList.map(item => `<li>${item.name}</li>`).join('') +'</ul>');

});

app.listen(port, () => console.log(`Rodando na porta ${port}!`));