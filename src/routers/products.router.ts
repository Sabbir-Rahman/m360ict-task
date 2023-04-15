import { Router } from 'express';
import { productsController } from '../controllers';

const router = Router()

router.get('/', productsController.getAllProductsCategory)
router.post('/', productsController.createProductsCategory)
router.put('/byid', productsController.editProductCategoryById)
router.put('/byname', productsController.editProductCategoryByName)

export default router