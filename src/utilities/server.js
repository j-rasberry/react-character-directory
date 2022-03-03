const express = require('express')
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken')
const port = 3001
//const {publickey} = require('./env')
require('dotenv').config();

console.log(process.env.SERVERHOST)

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : process.env.SERVERHOST,
  user     : process.env.SERVERUSER,
  password : process.env.SERVERPASS,
  database : process.env.SERVERDB
});
 

app.use(cors());

const authToken = async(req,res,next)=>{
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if(!token){
    return res.status(401).json({
      message:"Bad Token",
    });
  }
  try{
    const auth = await jwt.verify(token, process.env.PUBLICKEY);
    req.auth = auth;
    next();

  }catch(error){
    return res.status(401).json({
      message:"Bad Token"
    })
  }
}

app.get('/data' , authToken, (req,res) => {
  res.json({
    data:"Should you be looking at this?",
  })
})
app.get('/get-info', (req, res) => {
    connection.connect();
 
connection.query('SELECT * FROM characters', function (error, results, fields) {
  if (error) throw error;

  console.log(results)
  res.send(results)
});
//  connection.end();


})


app.get('/add-character', (req, res) => {
    connection.connect();
 
connection.query('SELECT * FROM characters', function (error, results, fields) {
  if (error) throw error;

  console.log(results)
  res.send(results)
});
 connection.end();


})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})