import { PartialType } from '@nestjs/swagger'
import { CreateUser } from './create.dto'
import { User } from 'src/generated/client'

export class UpdateUser extends PartialType(CreateUser) {
  uid: User['uid']
}
