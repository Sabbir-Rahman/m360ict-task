/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('immediate_parent_category')
    table.string('size')
    table.string('color')
    table
      .foreign('immediate_parent_category')
      .references('title')
      .inTable('products_category')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
