import { InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'

@InputType()
export class BookingTimelineWhereUniqueInput {
  id: number
}

@InputType()
export class BookingTimelineWhereInputStrict
  implements
    RestrictProperties<
      BookingTimelineWhereInputStrict,
      Prisma.BookingTimelineWhereInput
    >
{
  id: IntFilter
  timestamp: DateTimeFilter
  status:
    | $Enums.BookingStatus
    | Prisma.EnumBookingStatusFilter<'BookingTimeline'>
  bookingId: IntFilter
  valetId: StringFilter
  managerId: StringFilter
  Booking:
    | (Prisma.Without<
        Prisma.BookingScalarRelationFilter,
        Prisma.BookingWhereInput
      > &
        Prisma.BookingWhereInput)
    | (Prisma.Without<
        Prisma.BookingWhereInput,
        Prisma.BookingScalarRelationFilter
      > &
        Prisma.BookingScalarRelationFilter)
  Valet:
    | (Prisma.Without<
        Prisma.ValetNullableScalarRelationFilter,
        Prisma.ValetWhereInput
      > &
        Prisma.ValetWhereInput)
    | (Prisma.Without<
        Prisma.ValetWhereInput,
        Prisma.ValetNullableScalarRelationFilter
      > &
        Prisma.ValetNullableScalarRelationFilter)
    | null
  Manager:
    | (Prisma.Without<
        Prisma.ManagerNullableScalarRelationFilter,
        Prisma.ManagerWhereInput
      > &
        Prisma.ManagerWhereInput)
    | (Prisma.Without<
        Prisma.ManagerWhereInput,
        Prisma.ManagerNullableScalarRelationFilter
      > &
        Prisma.ManagerNullableScalarRelationFilter)
    | null
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: BookingTimelineWhereInput[]
  OR: BookingTimelineWhereInput[]
  NOT: BookingTimelineWhereInput[]
}

@InputType()
export class BookingTimelineWhereInput extends PartialType(
  BookingTimelineWhereInputStrict,
) {}

@InputType()
export class BookingTimelineListRelationFilter {
  every?: BookingTimelineWhereInput
  some?: BookingTimelineWhereInput
  none?: BookingTimelineWhereInput
}

@InputType()
export class BookingTimelineRelationFilter {
  is?: BookingTimelineWhereInput
  isNot?: BookingTimelineWhereInput
}
