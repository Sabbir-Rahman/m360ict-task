import { Router } from 'express';
import { productsController } from '../controllers';

const router = Router()

router.get('/', productsController.getAllProductsCategory)
router.post('/', productsController.createProductsCategory)

export default router