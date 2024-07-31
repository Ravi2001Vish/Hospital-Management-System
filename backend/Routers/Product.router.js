import express from 'express'
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct ,getProductsByAggr} from '../Controllers/Product.controller'

const router = express.Router();


router.get('/get-doctors', getProducts);
router.get('/get-products-aggr', getProductsByAggr);
router.get('/get-doctor/:product_id', getProduct);
router.post('/add-doctor', addProduct);
router.put('/update-doctor/:product_id', updateProduct);
router.delete('/delete-doctor/:product_id', deleteProduct);

export default router;