export interface ProductCategory {
  title: String,
  parentId?: Number,
}

export interface ProductCategoryByNameEdit {
  oldName: String
  newName: String
}

export interface ProductCategoryByIdEdit {
  id: Number
  newName: String
}