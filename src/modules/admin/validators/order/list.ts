import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';
import { PaginationValidator } from 'modules/common/validators/pagination';

export class ListValidator extends PaginationValidator {
  @IsOptional()
  @IsIn(['price', 'description', 'quantity', 'createdDate', 'updatedDate'])
  @ApiProperty({ required: false, enum: ['price', 'description', 'quantity', 'createdDate', 'updatedDate'] })
  public orderBy: any;
}
