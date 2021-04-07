import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthRequired } from 'modules/common/guards/token';
import { enRoles } from 'modules/database/interfaces/user';
import { Order } from 'modules/database/models/order';

import { OrderRepository } from '../repositories/order';
import { OrderService } from '../services/order';
import { ListValidator } from '../validators/order/list';
import { SaveValidator } from '../validators/order/save';

@Controller('/orders')
@AuthRequired([enRoles.admin])
export class OrderController {
  constructor(private orderRepository: OrderRepository, private orderService: OrderService) {}
  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  public async list(@Query() model: ListValidator) {
    return this.orderRepository.list(model);
  }

  @Get(':orderId')
  @ApiResponse({ status: 200, type: [Order] })
  public async details(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderRepository.findById(orderId);
  }

  @Post()
  @ApiResponse({ status: 201, type: Order })
  public async save(@Body() model: SaveValidator) {
    return this.orderService.save(model);
  }

  @Delete(':orderId')
  public async delete(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderService.remove(orderId);
  }
}
