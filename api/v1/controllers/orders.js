const Order = require('../models/orders');
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
    console.log('Good MySql Connection (Order Controller)');
  }
  else{
    console.log(err);
  }
});

const ordersObj = {
  getAllOrders: (req,res)=>{
    let sql = "SELECT * FROM t_order";
    connection.promise().query(sql).then((result,fields)=>{
      return res.status(200).json(result[0]);
    });
  },
  getOrderById: (req,res)=>{
    let oid = req.params.id;
    let sql = `SELECT * FROM t_order WHERE oid = ${oid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  addNewOrder: (req,res)=>{
    let ord = req.body;
    let sql = `INSERT INTO t_order (cusid, cusname) VALUES (${ord.cusid}, '${ord.cusname}')`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  updateOrderById: (req,res)=>{
    let ord = req.body;
    let sql = `UPDATE t_order SET cusid = ${ord.cusid}, cusname = '${ord.cusname}'`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  deleteOrderById: (req,res)=>{
    let oid = req.params.id;
    let sql = `DELETE FROM t_order WHERE oid = ${oid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  }
};

module.exports = ordersObj;