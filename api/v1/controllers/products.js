const Product = require('../models/product');
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
    console.log('Good MySql Connection (Product Controller)');
  }
  else{
    console.log(err);
  }
});

const productsObj = {
  getAllProducts: (req, res) => {
    let sql = "SELECT * FROM t_product";
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  getProductById: (req, res) => {
    let pid = req.params.id;
    let sql = `SELECT * FROM t_product WHERE pid = ${pid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  addNewProduct: (req, res) => {
    let prod = req.body;
    let sql = `INSERT INTO t_product (pname, price, pdesc, picname) VALUES ('${prod.pname}',${prod.price}, '${prod.pdesc}', '${prod.picname}')`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  updateProductById: (req, res) => {
    let pid = req.params.id;
    let prod = req.body;
    let sql = `UPDATE t_product SET pname = '${prod.pname}', price = ${prod.price}, pdesc = '${prod.pdesc}', picname = '${prod.picname}' WHERE pid = ${pid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  deleteProductById: (req, res) => {
    let pid = req.params.id;
    let sql = `DELETE FROM t_product WHERE pid = ${pid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  }
};

module.exports = productsObj;
