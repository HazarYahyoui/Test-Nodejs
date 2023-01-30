const express = require('express');
const router = express.Router();


const { createOrder, getAllOrders, getOrder  } = require('../controllers/Com');


router.post('/createOrder/IdUser/IdProduit', createOrder);
router.get('/allOrders', getAllOrders);
router.get('/:Id', getOrder)

module.exports = router;