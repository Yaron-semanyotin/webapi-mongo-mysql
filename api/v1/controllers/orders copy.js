const Order = require('../models/orders');
const ordersObj = {
  getAllOrders: (req,res)=>{
    Order.find().then((data)=>{
      return res.status(200).json(data);
    });
  },
  getOrderById: (req,res)=>{
    let oid = req.params.id;
    Order.findOne({oid}).then((data)=>{
      return res.status(200).json(data);
    });
  },
  addNewOrder: (req,res)=>{
    let body = req.body;
    let oid = body.oid;
    Order.find({oid}).then((data)=>{
      if(data.length > 0){
        return res.status(200).json({Message: `Order ${oid} is already existed`});
      }
      else{
        Order.insertOne(body).then((data)=>{
          return res.status(200).json(data);
        });
      }
    })
  },
  updateOrderById: (req,res)=>{
    let oid = req.params.id;
    let body = req.body;
    Order.updateOne({oid}, body).then((data)=>{
      return res.status(200).json(data);
    });
  },
  deleteOrderById: (req,res)=>{
    let oid = req.params.id;
    Order.deleteOne({oid}).then((data)=>{
      return res.status(200).json(data);
    });
  }
};

module.exports = ordersObj;