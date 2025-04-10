import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, BookingTimeline as BookingTimelineType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class BookingTimeline
  implements RestrictProperties<BookingTimeline, BookingTimelineType>
{
  id: number
  status: $Enums.BookingStatus
  timestamp: Date
  bookingId: number
  @Field({ nullable: true })
  valetId: string | null
  @Field({ nullable: true })
  managerId: string | null
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
