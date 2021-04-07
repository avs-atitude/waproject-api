import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

import { IOrder } from '../interfaces/order';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'integer' })
  public id: number;

  @ApiProperty({ type: 'text' })
  public description: string;

  @ApiProperty({ type: 'float' })
  public price: number;

  @ApiProperty({ type: 'integer' })
  public quantity: number;

  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdDate: Date;

  @ApiProperty({ type: 'string', format: 'date-time' })
  public updatedDate: Date;
  public static get tableName(): string {
    return 'Order';
  }
}
