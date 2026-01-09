const Categories = require('../models/categories');
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
    console.log('Good MySql Connection (Categories Controller)');
  }
  else{
    console.log(err);
  }
});

const categoriesObj = {
  getAllCategories: (req,res)=>{
    let sql = "SELECT * FROM t_category";
    connection.promise().query(sql).then((result,fields)=>{
      return res.status(200).json(result[0]);
    });
  },
  getCategoryById: (req,res)=>{
    let cid = req.params.id;
    let sql = `SELECT * FROM t_category WHERE cid = ${cid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  addNewCategory: (req,res)=>{
    let cate = req.body;
    let sql = `INSERT INTO t_category (cname) VALUES ('${cate.cname}')`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  updateCategoryById: (req,res)=>{
    let cate = req.body;
    let sql = `UPDATE t_category SET cname = '${cate.cname}'`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  deleteCategoryById: (req,res)=>{
    let cid = req.params.id;
    let sql = `DELETE FROM t_category WHERE cid = ${cid}`;
    connection.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  }
};

module.exports = categoriesObj;