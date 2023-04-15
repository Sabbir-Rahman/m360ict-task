export interface ProductCategory {
  title: String,
  parent_id?: Number,
}

export interface ProductCategoryByNameEdit {
  oldName: String
  newName: String
}

export interface ProductCategoryByIdEdit {
  id: Number
  newName: String
}