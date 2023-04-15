import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAllProductsCategory = async (req: Request, res: Response): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'View all product category not successful',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const data = await productsService.getAllProductCategory()
  if (data instanceof Error) {
    response.developerMessage = data.message
  } else {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'View all product category successful'
    response.data = data
    
  }
  res.status(response.statusCode).json(response)
}

const createProductsCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Create product category not successful',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const data = await productsService.createProductCategory(req.body)
  if (data instanceof Error) {
    response.developerMessage = data.message
  } else {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Create product category successful'
    response.data = data
  }
  res.status(response.statusCode).json(response)
}

const editProductCategoryByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Edit product category not successful',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const data = await productsService.editProductCategoryByName(req.body)
  if (data instanceof Error) {
    response.developerMessage = data.message
  } else {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Edit product category successful'
    response.data = data
  }
  res.status(response.statusCode).json(response)
}

const editProductCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Edit product category not successful',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const data = await productsService.editCategoryById(req.body)
  if (data instanceof Error) {
    response.developerMessage = data.message
  } else {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Edit product category successful'
    response.data = data
  }
  res.status(response.statusCode).json(response)
}

const deactivateProductCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Deactivate product category not successful',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const data = await productsService.deactivateProductCategory(req.params.id)
  if (data instanceof Error) {
    response.developerMessage = data.message
  } else {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Deactivate product category successful'
    response.data = data
  }
  res.status(response.statusCode).json(response)
}

const deleteProductCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Delete product category not successful',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const data = await productsService.deleteCategoryById(req.params.id)
  if (data instanceof Error) {
    response.developerMessage = data.message
  } else {
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Delete product category successful'
    response.data = data
  }
  res.status(response.statusCode).json(response)
}

export default { getAllProductsCategory, createProductsCategory, editProductCategoryById,editProductCategoryByName, deleteProductCategoryById, deactivateProductCategory }