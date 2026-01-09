const router = require('express').Router();
const {
  getAllOrders,
  getOrderById,
  addNewOrder,
  updateOrderById,
  deleteOrderById
} = require('../controllers/orders');

router.get('/',getAllOrders);
router.get('/:id',getOrderById);
router.post('/',addNewOrder);
router.put('/:id',updateOrderById);
router.delete('/:id',deleteOrderById);

module.exports = router;