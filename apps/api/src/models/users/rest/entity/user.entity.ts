import { User } from 'src/generated/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  uid: string
  createdAt: Date
  updatedAt: Date
  @IsOptional()
  name: string | null
  @IsOptional()
  image: string | null
}
