
const express = require('express')
const database = require('./database');

const router = express.Router()


router.get('/', function (req, res, next) {
  console.log('test')
  database.query('SELECT * FROM connection', function (err, rows) {
    if (err) { 
      console.log('error', err)
      res.json({ data: 'error' })
    } else {
      res.json({ data: rows })
    }
  })
})

router.post('/save-user', function (req, res, next) {
  console.log('test')
  const {id_Member, Member_Name, Member_Email, Member_Number, Member_Address, Member_Type} = req.body
  database.query('INSERT INTO `sampledata`.`connection` (`id_Member`, `Member_Name`, `Member_Email`, `Member_Number`,`Member_Address`, `Member_Type` ) VALUES ("' + id_Member + '", "'+ Member_Name + '", "'+ Member_Email + '", "'+ Member_Number + '", "'+ Member_Address + '", "'+ Member_Type + '")', function (err, rows) {
    if (err) { 
      console.log('error', err)
      res.json({ data:err })
    } else {
      console.log(rows)
      res.json({ data:  {id_Member, Member_Name, Member_Email, Member_Number, Member_Address, Member_Type} })
    }
  });
})

// app.delete("/delete/:id", (req, res) => {
//   let { ID } = req.params.id;
//   let sql = `DELETE FROM notes WHERE ID = ${req.params.id}`;
//   console.log("id: ", req.params.id);

//   // delete a row with id = req.params.id
//   connection.query(sql, (error, results, fields) => {
//     if (error) return console.error(error.message);
//     res.status(200).send(results);
//     console.log("Deleted Row(s):", results.affectedRows);
//   });
// });

// router.connect(function(err) {
//   if (err) throw err;
//   // var sql = "DELETE FROM `sampledata`.`connection` WHERE id_Member = '15'";
//   database.query("DELETE FROM `sampledata`.`connection` WHERE Member_Name = 'bobby'", function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

router.delete('/delete/:id', function (err) {
  console.log('test')
  var sql = "DELETE FROM `sampledata`.`connection` WHERE Member_Name = 'bobby'";
  
  database.query(sql, function (err, rows) {
    if (err) { 
      console.log('error', err)
      res.json({ data:err })
    } else {
      console.log(rows)
      res.json({ data:  {id_Member, Member_Name, Member_Email, Member_Number, Member_Address, Member_Type} })
    }
  });
})

module.exports = router
