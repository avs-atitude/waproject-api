import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty({ required: true, type: 'text', minLength: 3 })
  public description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true, type: 'integer', minLength: 1 })
  public quantity: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true, type: 'float', minLength: 1 })
  public price: number;
}
