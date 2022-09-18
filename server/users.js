
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

module.exports = router
