import { ProductCategory, ProductCategoryByIdEdit, ProductCategoryByNameEdit } from '../interfaces/productCategory.interfaces'

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
    const createCategory = knex('products_category').insert(productCategoryObj)

    return createCategory
  } catch (err) {
    console.log(err)
    return new Error(String(err))
  }
}

async function editProductCategoryByName(
  productCategoryByNameEditObj: ProductCategoryByNameEdit
): Promise<any | Error> {
  try {
    const editCategory = knex('products_category')
      .where('title', productCategoryByNameEditObj.oldName)
      .update({ title: productCategoryByNameEditObj.newName })

    return editCategory
  } catch (err) {
    console.log(err)
    return new Error(String(err))
  }
}

async function editCategoryById(
  productCategoryByIdEditObj: ProductCategoryByIdEdit
): Promise<any | Error> {
  try {
    const editCategory = knex('products_category')
      .where('id', productCategoryByIdEditObj.id)
      .update({ title: productCategoryByIdEditObj.newName })

    return editCategory
  } catch (err) {
    console.log(err)
    return new Error(String(err))
  }
}

async function deleteCategoryById(
  productId: string
): Promise<any | Error> {
  try {
    const editCategory = knex('products_category')
      .where('id', productId)
      .del()

    return editCategory
  } catch (err) {
    console.log(err)
    return new Error(String(err))
  }
}


export default { getAllProductCategory, createProductCategory,editProductCategoryByName,editCategoryById, deleteCategoryById }