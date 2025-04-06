import {
  Field,
  InputType,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql'
import { User } from '../entity/user.entity'
import { AuthProviderType } from 'src/generated/client'

registerEnumType(AuthProviderType, {
  name: 'AuthProviderType',
})

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['uid', 'name', 'image'],
  InputType,
) {
  @Field(() => AuthProviderType)
  type: AuthProviderType
}

@InputType()
export class RegisterWithCredentialInput {
  name: string
  email: string
  password: string
  image?: string
}

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialInput, [
  'email',
  'password',
]) {}

@ObjectType()
export class LoginOutput {
  token: string
}
