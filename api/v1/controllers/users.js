const User = require('../models/users');
// connection to mysql
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yaron',
  password: 'yaron123',
  database: 'ecommdb'
});
connection.connect((err)=>{
  if(err == null){
    console.log('Good MySql Connection (Users Controller)');
  }
  else{
    console.log(err);
  }
});

const usersObj = {
  getAllUsers: (req,res)=>{
    let sql = "SELECT * FROM t_users";
    connection.promise().query(sql).then((result,fields)=>{
      return res.status(200).json(result[0]);
    });
  },
  getUserById: (req,res)=>{
    let uid = req.params.id;
    let sql = `SELECT * FROM t_users WHERE uid = ${uid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  addNewUser: (req,res)=>{
    let usr = req.body;
    let sql = `INSERT INTO t_users (username, password) VALUES ('${usr.username}', '${usr.password}')`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  updateUserById: (req,res)=>{
    let usr = req.body;
    let sql = `UPDATE t_users SET username = '${usr.username}', password = '${usr.password}'`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  deleteUserById: (req,res)=>{
    let uid = req.params.id;
    let sql = `DELETE FROM t_users WHERE uid = ${uid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  }
};

module.exports = usersObj;