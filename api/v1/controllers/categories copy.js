const Categories = require('../models/categories');
const categoriesObj = {
  getAllCategories: (req,res)=>{
    Categories.find().then((data)=>{
      return res.status(200).json(data);
    });
  },
  getCategoryById: (req,res)=>{
    let cid = req.params.id;
    Categories.findOne({cid}).then((data)=>{
      return res.status(200).json(data);
    });
  },
  addNewCategory: (req,res)=>{
    let body = req.body;
    let cid = body.cid;
    Categories.find({cid}).then((data)=>{
      if(data.length > 0){
        return res.status(200).json({Message: `Category ${cid} already existed`});
      }
      else{
        Categories.insertOne(body).then((data)=>{
          return res.status(200).json(data);
        });
      }
    });
  },
  updateCategoryById: (req,res)=>{
    let cid = req.params.id;
    let body = req.body;
    Categories.updateOne({cid}, body).then((data)=>{
      return res.status(200).json(data);
    });
  },
  deleteCategoryById: (req,res)=>{
    let cid = req.params.id;
    Categories.deleteOne({cid}).then((data)=>{
      return res.status(200).json(data);
    });
  }
};

module.exports = categoriesObj;