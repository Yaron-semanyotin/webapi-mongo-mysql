const User = require('../models/users');
const usersObj = {
  getAllUsers: (req,res)=>{
    User.find().then((data)=>{
      return res.status(200).json(data);
    });
  },
  getUserById: (req,res)=>{
    let uid = req.params.id;
    User.findOne({uid}).then((data)=>{
      return res.status(200).json(data);
    });
  },
  addNewUser: (req,res)=>{
    let body = req.body;
    let uid = body.uid;
    User.find({uid}).then((data)=>{
      if(data.length > 0){
        return res.status(200).json({Message: `User ${uid} already existed`});
      }
      else{
        User.insertOne(body).then((data) => {
          return res.status(200).json(data);
        });
      }
    });
  },
  updateUserById: (req,res)=>{
    let uid = req.params.id;
    let body = req.body;
    User.updateOne({uid}, body).then((data) => {
      return res.status(200).json(data);
    });
  },
  deleteUserById: (req,res)=>{
    let uid = req.params.id;
    User.deleteOne({uid}).then((data) => {
      return res.status(200).json(data);
    });
  }
};

module.exports = usersObj;