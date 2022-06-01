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

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);
  connection.query(sqlInsert);
  connection.query(sqlQuery, function (err, result, fields) {
    if (err) throw err;
    res.send('<h1>Full Cycle</h1> <ul>' + result.map(item => `<li>${item.name}</li>`).join('') +'</ul>');
  });
  connection.end();

});


app.listen(port, () => console.log(`Rodando na porta ${port}!`));