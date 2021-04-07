import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Order', table => {
    table.increments('id').primary();
    table.text('description').notNullable();
    table.float('price').notNullable();
    table.integer('quantity').notNullable();
    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate');
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('Order');
}
