const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserById,
  deleteUserById
} = require('../controllers/users');

router.get('/',getAllUsers);
router.get('/:id',getUserById);
router.post('/',addNewUser);
router.put('/:id',updateUserById);
router.delete('/:id',deleteUserById);

module.exports = router;