const Categories = require('../models/categories');
const mySqlDb = require('../modules/mySql');
const categoriesObj = {
  getAllCategories: (req,res)=>{
    let sql = "SELECT * FROM t_category";
    mySqlDb.promise().query(sql).then((result,fields)=>{
      return res.status(200).json(result[0]);
    });
  },
  getCategoryById: (req,res)=>{
    let cid = req.params.id;
    let sql = `SELECT * FROM t_category WHERE cid = ${cid}`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  addNewCategory: (req,res)=>{
    let cate = req.body;
    let sql = `INSERT INTO t_category (cname) VALUES ('${cate.cname}')`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  updateCategoryById: (req,res)=>{
    let cate = req.body;
    let sql = `UPDATE t_category SET cname = '${cate.cname}'`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  },
  deleteCategoryById: (req,res)=>{
    let cid = req.params.id;
    let sql = `DELETE FROM t_category WHERE cid = ${cid}`;
    mySqlDb.promise().query(sql).then((result, fields)=>{
    return res.status(200).json(result[0]);
    });
  }
};

module.exports = categoriesObj;