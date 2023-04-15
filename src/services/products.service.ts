import { ProductCategory } from '../interfaces/productCategory.interfaces'

const knex = require('../db/db')

async function getAllProductCategory(): Promise<any|Error> {
  try {
    const allCategory = knex.select().from('products_category')

    return allCategory
  } catch (err) {
    console.log(err)
    return new Error(String(err))
  }
}

async function createProductCategory(productCategoryObj: ProductCategory): Promise<any | Error> {
  try {
    const allCategory = knex('products_category').insert(productCategoryObj)

    return allCategory
  } catch (err) {
    console.log(err)
    return new Error(String(err))
  }
}


export default { getAllProductCategory, createProductCategory }