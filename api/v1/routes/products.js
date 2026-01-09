const router = require('express').Router();
const{
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById
} = require('../controllers/products');

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/',addNewProduct);
router.put('/:id', updateProductById);
router.delete('/:id',deleteProductById);

module.exports = router;