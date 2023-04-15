/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('products_category', (table) => {
      table.increments('id').unsigned().notNullable()
      table.string('title').notNullable()
      table.integer('parent_id').unsigned().defaultTo(null)
      table.primary(['id'])
      table
        .foreign('parent_id')
        .references('id')
        .inTable('products_category')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('products', (table) => {
      table.increments('id').unsigned().notNullable()
      table.string('name').notNullable()
      table
        .string('category')
        .references('title')
        .inTable('products_category')
      table.string('size')
      table.string('color')
      table.primary(['id'])
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('products_category').dropTable('products')
}
