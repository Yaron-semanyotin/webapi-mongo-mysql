const Product = require('../models/product');
const productsObj = {
  getAllProducts: (req, res) => {
    Product.find().then((data) => {
      return res.status(200).json(data);
    });
  },
  getProductById: (req, res) => {
    let pid = req.params.id;
    Product.findOne({ pid }).then((data) => {
      return res.status(200).json(data);
    });
  },
  addNewProduct: (req, res) => {
    let body = req.body;
    let pid = body.pid;
    Product.find({pid}).then((data) => { // בדיקה אם המוצר קיים לפי ההוספה במידה וכן שלח את ההודעה הנל
      if (data.length > 0) {
        return res.status(200).json({message: `The product ${pid} already exists`});
      }
      else { // במידה ולא הוסף את אותו מוצר
        Product.insertOne(body).then((data) => {
          return res.status(200).json(data);
        });
      }
    });
  },
  updateProductById: (req, res) => {
    let pid = req.params.id;
    let body = req.body;
    Product.updateOne({ pid }, body).then((data) => {
      return res.status(200).json(data);
    });
  },
  deleteProductById: (req, res) => {
    let pid = req.params.id;
    Product.deleteOne({ pid }).then((data) => {
      return res.status(200).json(data);
    });
  }
};

module.exports = productsObj;
