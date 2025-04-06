import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { Prisma } from 'src/generated/client'

export class UserQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  searchBy?: string
}
