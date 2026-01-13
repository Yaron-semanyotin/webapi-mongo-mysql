require('dotenv').config();
const express = require('express');
const app = express();
const productsRouter = require('./api/v1/routes/products');
const categoriesRouter = require('./api/v1/routes/categories');
const ordersRouter = require('./api/v1/routes/orders');
const usersRouter = require('./api/v1/routes/users');
const cors = require('cors');
const morgan = require('morgan');
const ipFilter = require('./api/v1/middlewares/ipFilter');
const mongoose = require('mongoose');
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoServer = process.env.MONGO_SERVER;
const mongoConnStr = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoServer}/?appName=Ecomm`;
mongoose.connect(mongoConnStr).then((stat)=>{
  console.log(`Connected to mongoDB`);
});


app.use(cors());

app.use(morgan('dev'));
app.use(ipFilter);

app.use(express.json());
app.use(express.urlencoded());

app.use('/products',productsRouter);
app.use('/categories',categoriesRouter);
app.use('/orders',ordersRouter);
app.use('/users',usersRouter);
app.use((req,res)=>{
  res.status(404).json({Message: `Path not found`});
});
module.exports = app;