import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<void> {
  if (!IS_DEV) return;

  const orders = await knex
    .count()
    .from('Order')
    .first();

  if (Number(orders.count) > 0) return;

  for (let x = 0; x < 50; x++) {
    const order: IOrder = {
      description: faker.lorem.text(),
      price: faker.random.number({ precision: 0.01 }),
      quantity: faker.random.number(),
      createdDate: new Date(),
      updatedDate: new Date()
    };
    await knex.insert(order).into('Order');
  }
}
