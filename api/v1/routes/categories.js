const router = require('express').Router();
const {
  getAllCategories,
  getCategoryById,
  addNewCategory,
  updateCategoryById,
  deleteCategoryById
} = require('../controllers/categories');

router.get('/',getAllCategories);
router.get('/:id',getCategoryById);
router.post('/',addNewCategory);
router.put('/:id',updateCategoryById);
router.delete('/:id',deleteCategoryById);

module.exports = router;
