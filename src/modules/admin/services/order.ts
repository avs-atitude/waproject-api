import { Injectable } from '@nestjs/common';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';

import { OrderRepository } from '../repositories/order';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  public async save(model: IOrder): Promise<Order> {
    if (model.id) return this.update(model);
    return this.create(model);
  }

  public async remove(orderID: number): Promise<void> {
    return this.orderRepository.remove(orderID);
  }

  private async create(model: IOrder): Promise<Order> {
    model.createdDate = new Date();
    const order = await this.orderRepository.insert(model);

    return order;
  }

  private async update(model: IOrder): Promise<Order> {
    const order = await this.orderRepository.findById(model.id);
    model.updatedDate = new Date();

    return this.orderRepository.update({ ...order, ...model });
  }
}
