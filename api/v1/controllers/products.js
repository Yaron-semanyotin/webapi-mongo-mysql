const Product = require('../models/product');
const mySqlDb = require('../modules/mySql');
const productsObj = {
  getAllProducts: (req, res) => {
    let sql = "SELECT * FROM t_product";
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  getProductById: (req, res) => {
    let pid = req.params.id;
    let sql = `SELECT * FROM t_product WHERE pid = ${pid}`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  addNewProduct: (req, res) => {
    let prod = req.body;
    let sql = `INSERT INTO t_product (pname, price, pdesc, picname) VALUES ('${prod.pname}',${prod.price}, '${prod.pdesc}', '${prod.picname}')`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  updateProductById: (req, res) => {
    let pid = req.params.id;
    let prod = req.body;
    let sql = `UPDATE t_product SET pname = '${prod.pname}', price = ${prod.price}, pdesc = '${prod.pdesc}', picname = '${prod.picname}' WHERE pid = ${pid}`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  deleteProductById: (req, res) => {
    let pid = req.params.id;
    let sql = `DELETE FROM t_product WHERE pid = ${pid}`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  }
};

module.exports = productsObj;
