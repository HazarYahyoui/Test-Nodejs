const express = require('express');
const router = express.Router();


const { getAllUsers, createUser, getUser, updateUser, deleteUser  } = require('../controllers/CrudClient');

router.get('/Users', getAllUsers);
router.post('/createUser', createUser);
router.get('/:Id', getUser);
router.put('/updateUser/:Id', updateUser);
router.delete('/deleteUser/:Id', deleteUser);


module.exports = router;