import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class BookingOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookingOrderByWithRelationInputStrict,
      Prisma.BookingOrderByWithRelationInput
    >
{
  id: Prisma.SortOrder
  createdAt: Prisma.SortOrder
  updatedAt: Prisma.SortOrder
  pricePerHour: Prisma.SortOrder | Prisma.SortOrderInput
  totalPrice: Prisma.SortOrder | Prisma.SortOrderInput
  startTime: Prisma.SortOrder
  endTime: Prisma.SortOrder
  vehicleNumber: Prisma.SortOrder
  phoneNumber: Prisma.SortOrder | Prisma.SortOrderInput
  passcode: Prisma.SortOrder | Prisma.SortOrderInput
  status: Prisma.SortOrder
  slotId: Prisma.SortOrder
  customerId: Prisma.SortOrder
  Slot: Prisma.SlotOrderByWithRelationInput
  Customer: Prisma.CustomerOrderByWithRelationInput
  ValetAssignment: Prisma.ValetAssignmentOrderByWithRelationInput
  BookingTimeline: Prisma.BookingTimelineOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class BookingOrderByWithRelationInput extends PartialType(
  BookingOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
