const mysql = require("mysql");
// import inquirer from 'inquirer';

const mysql_user = {
  host: "localhost",
  user: "root",
  password: "root",
  database: 'sampledata'
};

const connection = mysql.createConnection(mysql_user, {
  multipleStatements: true,
});

// function inquire() {
//   inquirer
//     .prompt([
//       {
//         name: 'statement',
//         message: 'mysql>',
//       },
//     ])
//     .then((answer) => {
//       if (answer.statement === 'quit') {
//         console.log('Disconnected and exit');
//         connection.end();
//       } else {
//         query(answer.statement);
//       }
//     });
// }

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to SQL");
  }
});

module.exports = connection;