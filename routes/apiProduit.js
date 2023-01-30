const express = require('express');
const router = express.Router();


const { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct  } = require('../controllers/CrudProduit');

router.get('/allProducts', getAllProducts);
router.post('/createProduct', createProduct);
router.get('/:Id', getProduct);
router.put('/updateProduct/:Id', updateProduct);
router.delete('/deleteProduct/:Id', deleteProduct);


module.exports = router;