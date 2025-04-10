import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'

@InputType()
export class BookingWhereUniqueInput {
  id: number
}

@InputType()
export class BookingWhereInputStrict
  implements
    RestrictProperties<BookingWhereInputStrict, Prisma.BookingWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  pricePerHour: FloatFilter
  totalPrice: FloatFilter
  startTime: DateTimeFilter
  endTime: DateTimeFilter
  vehicleNumber: StringFilter
  phoneNumber: StringFilter
  passcode: StringFilter
  status: $Enums.BookingStatus | Prisma.EnumBookingStatusFilter<'Booking'>
  slotId: IntFilter
  customerId: StringFilter
  Slot:
    | (Prisma.Without<Prisma.SlotScalarRelationFilter, Prisma.SlotWhereInput> &
        Prisma.SlotWhereInput)
    | (Prisma.Without<Prisma.SlotWhereInput, Prisma.SlotScalarRelationFilter> &
        Prisma.SlotScalarRelationFilter)
  Customer:
    | (Prisma.Without<
        Prisma.CustomerScalarRelationFilter,
        Prisma.CustomerWhereInput
      > &
        Prisma.CustomerWhereInput)
    | (Prisma.Without<
        Prisma.CustomerWhereInput,
        Prisma.CustomerScalarRelationFilter
      > &
        Prisma.CustomerScalarRelationFilter)
  ValetAssignment:
    | (Prisma.Without<
        Prisma.ValetAssignmentNullableScalarRelationFilter,
        Prisma.ValetAssignmentWhereInput
      > &
        Prisma.ValetAssignmentWhereInput)
    | (Prisma.Without<
        Prisma.ValetAssignmentWhereInput,
        Prisma.ValetAssignmentNullableScalarRelationFilter
      > &
        Prisma.ValetAssignmentNullableScalarRelationFilter)
    | null
  BookingTimeline: Prisma.BookingTimelineListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: BookingWhereInput[]
  OR: BookingWhereInput[]
  NOT: BookingWhereInput[]
}

@InputType()
export class BookingWhereInput extends PartialType(BookingWhereInputStrict) {}

@InputType()
export class BookingListRelationFilter {
  every?: BookingWhereInput
  some?: BookingWhereInput
  none?: BookingWhereInput
}

@InputType()
export class BookingRelationFilter {
  is?: BookingWhereInput
  isNot?: BookingWhereInput
}
