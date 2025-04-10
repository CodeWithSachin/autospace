import { Field, ObjectType } from '@nestjs/graphql'
import { Garage as GarageType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Garage implements RestrictProperties<Garage, GarageType> {
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  displayName: string | null
  @Field({ nullable: true })
  description: string | null
  id: number
  images: string[]
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
