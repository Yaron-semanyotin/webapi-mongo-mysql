const User = require('../models/users');
const mySqlDb = require('../modules/mySql');
const usersObj = {
  getAllUsers: (req,res)=>{
    let sql = "SELECT * FROM t_users";
    mySqlDb.promise().query(sql).then((result,fields)=>{
      return res.status(200).json(result[0]);
    });
  },
  getUserById: (req,res)=>{
    let uid = req.params.id;
    let sql = `SELECT * FROM t_users WHERE uid = ${uid}`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  addNewUser: (req,res)=>{
    let usr = req.body;
    let sql = `INSERT INTO t_users (username, password) VALUES ('${usr.username}', '${usr.password}')`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  updateUserById: (req,res)=>{
    let usr = req.body;
    let sql = `UPDATE t_users SET username = '${usr.username}', password = '${usr.password}'`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  deleteUserById: (req,res)=>{
    let uid = req.params.id;
    let sql = `DELETE FROM t_users WHERE uid = ${uid}`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  }
};

module.exports = usersObj;